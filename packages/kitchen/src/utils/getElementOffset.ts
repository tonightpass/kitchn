const getElementOffset = (el?: HTMLElement | null | undefined) => {
  if (!el)
    return {
      top: 0,
      left: 0,
    };
  const { top, left } = el.getBoundingClientRect();
  return { top, left };
};

export default getElementOffset;
