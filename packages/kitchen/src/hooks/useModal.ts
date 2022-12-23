import React from "react";

export type UseModalResult = [boolean, () => void, () => void];

const useModal = (): UseModalResult => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);

  return [isOpen, open, close];
};

export default useModal;
