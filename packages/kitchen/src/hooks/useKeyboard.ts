import React from "react";
import { KeyMod } from "../utils/codes";
import getActiveModMap from "../utils/getActiveModMap";
import getCtrlKeysByPlatform from "../utils/getCtrlKeysByPlatform";

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
  event: React.KeyboardEvent | KeyboardEvent
) => void;

export type UseKeyboard = (
  handler: UseKeyboardHandler,
  keyBindings: Array<number> | number,
  options?: KeyboardOptions
) => KeyboardResult;

const useKeyboard: UseKeyboard = (handler, keyBindings, options = {}) => {
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

  const eventHandler = (event: React.KeyboardEvent | KeyboardEvent) => {
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
  };

  React.useEffect(() => {
    if (!disableGlobalEvent) {
      document.addEventListener(event, eventHandler);
    }
    return () => {
      document.removeEventListener(event, eventHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableGlobalEvent]);

  const elementBindingHandler = (
    elementEventType: "keydown" | "keypress" | "keyup",
    isCapture = false
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

export default useKeyboard;
