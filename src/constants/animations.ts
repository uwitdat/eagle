export const ANIMATIONS = {
  FADE_IN: {
    initial: `transition-all duration-1000 opacity-0`,
    animate: 'opacity-100',
  },
  SLIDE_LEFT: {
    initial: `transition-all duration-1000 translate-x-48 opacity-0`,
    animate: 'translate-x-0 opacity-100',
  },
  SLIDE_UP: {
    initial: `transition-all duration-1000 translate-y-48 opacity-0`,
    animate: 'translate-y-0 opacity-100',
  },
  SCALE: {
    initial: `transition-all duration-1000 scale-0 opacity-0`,
    animate: 'scale-100 opacity-100',
  },
}
