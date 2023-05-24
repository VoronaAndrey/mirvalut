const TABLET_BREAKPOINT = 1150;
const SMALL_TABLET_BREAKPOINT = 880;

export const MAX_WITH_CONTAINER = {
  PHONE: 800,
};
export const tabletBreakpoint = (styles) => ({
  [`@media screen and (max-width: ${TABLET_BREAKPOINT}px)`]: styles,
});
export const smallTabletBreakpoint = (styles) => ({
  [`@media screen and (max-width: ${SMALL_TABLET_BREAKPOINT}px)`]: styles,
});
