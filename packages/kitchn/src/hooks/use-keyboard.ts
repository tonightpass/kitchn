import React from "react";

import { KeyMod } from "../utils/codes";
import { getActiveModMap } from "../utils/get-active-mod-map";
import { getCtrlKeysByPlatform } from "../utils/get-ctrl-keys-by-platform";

export type KeyboardOptions = {
  disableGlobalEvent?: boolean;
  stopPropagation?: boolean;
  preventDefault?: boolean;
  capture?: boolean;
  event?: "keydown" | "keypress" | "keyup";
};

export type KeyboardResult = {
  bindings: {
    onKeyDown: React.KeyboardEventHandler;
    onKeyDownCapture: React.KeyboardEventHandler;
    onKeyPress: React.KeyboardEventHandler;
    onKeyPressCapture: React.KeyboardEventHandler;
    onKeyUp: React.KeyboardEventHandler;
    onKeyUpCapture: React.KeyboardEventHandler;
  };
};

export type UseKeyboardHandler = (
  event: React.KeyboardEvent | KeyboardEvent,
) => void;

export type UseKeyboard = (
  handler: UseKeyboardHandler,
  keyBindings: number[] | number,
  options?: KeyboardOptions,
) => KeyboardResult;

export const useKeyboard: UseKeyboard = (
  handler,
  keyBindings,
  options = {},
) => {
  const bindings = Array.isArray(keyBindings)
    ? (keyBindings as number[])
    : [keyBindings];
  const {
    disableGlobalEvent = false,
    capture = false,
    stopPropagation = false,
    preventDefault = true,
    event = "keydown",
  } = options;
  const activeModMap = getActiveModMap(bindings);
  const keyCode = bindings.filter((item: number) => !KeyMod[item]);
  const { CtrlCmd, WinCtrl } = getCtrlKeysByPlatform();

  const eventHandler = React.useCallback(
    (event: React.KeyboardEvent | KeyboardEvent) => {
      if (activeModMap.Shift && !event.shiftKey) return;
      if (activeModMap.Alt && !event.altKey) return;
      if (activeModMap.CtrlCmd && !event[CtrlCmd]) return;
      if (activeModMap.WinCtrl && !event[WinCtrl]) return;
      const hitOne = keyCode.find((k) => k === event.keyCode);
      if (keyCode && !hitOne) return;
      if (stopPropagation) {
        event.stopPropagation();
      }
      if (preventDefault) {
        event.preventDefault();
      }
      handler && handler(event);
    },
    [
      activeModMap,
      CtrlCmd,
      WinCtrl,
      keyCode,
      handler,
      preventDefault,
      stopPropagation,
    ],
  );

  React.useEffect(() => {
    if (!disableGlobalEvent) {
      document.addEventListener(event, eventHandler);
    }
    return () => {
      document.removeEventListener(event, eventHandler);
    };
  }, [disableGlobalEvent, event, eventHandler]);

  const elementBindingHandler = (
    elementEventType: "keydown" | "keypress" | "keyup",
    isCapture = false,
  ) => {
    if (elementEventType !== event) return () => null;
    if (isCapture !== capture) return () => null;
    return (e: React.KeyboardEvent) => eventHandler(e);
  };

  return {
    bindings: {
      onKeyDown: elementBindingHandler("keydown"),
      onKeyDownCapture: elementBindingHandler("keydown", true),
      onKeyPress: elementBindingHandler("keypress"),
      onKeyPressCapture: elementBindingHandler("keypress", true),
      onKeyUp: elementBindingHandler("keyup"),
      onKeyUpCapture: elementBindingHandler("keyup", true),
    },
  };
};
