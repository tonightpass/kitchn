import React from "react";

export const pickChild = (
  children: React.ReactNode | undefined,
  targetChild: React.ElementType,
): [React.ReactNode | undefined, React.ReactNode | undefined] => {
  const target: React.ReactNode[] = [];
  const withoutTargetChildren = React.Children.map(children, (item) => {
    if (!React.isValidElement(item)) return item;
    if (item.type === targetChild) {
      target.push(item);
      return null;
    }
    return item;
  });

  const targetChildren = target.length >= 0 ? target : undefined;

  return [withoutTargetChildren, targetChildren];
};
