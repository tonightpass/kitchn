import React from "react";

export type CurrentStateType<S> = [
  S,
  React.Dispatch<React.SetStateAction<S>>,
  React.MutableRefObject<S>
];

const useCurrentState = <S>(
  initialState: S | (() => S)
): CurrentStateType<S> => {
  const [state, setState] = React.useState<S>(() => {
    return typeof initialState === "function"
      ? (initialState as () => S)()
      : initialState;
  });
  const ref = React.useRef<S>(initialState as S);

  React.useEffect(() => {
    ref.current = state;
  }, [state]);

  const setValue = (val: React.SetStateAction<S>) => {
    const result =
      typeof val === "function"
        ? (val as (prevState: S) => S)(ref.current)
        : val;
    ref.current = result;
    setState(result);
  };

  return [state, setValue, ref];
};

export default useCurrentState;
