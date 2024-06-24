export const COLORS = {
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  WHITE20: '#BABABA',
  BRAND: '#0BA864',
  BRANDGRADIENT:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #0BA864',
  BRANDFOCUSED: '0px 0px 2px 2px rgba(22, 209, 128, 0.15)',
  BRAND10: '#D5F5E6',
  BRAND20: '#F4FBF8',
  BRAND30: '#16D180',
  BRAND10GRADIENT:
    'linear-gradient(0deg, rgba(11, 168, 100, 0.10) 0%, rgba(11, 168, 100, 0.10) 100%), #1A1A1A',
  BLACK: '#1C1C1C',
  BLACK10: 'rgba(0, 0, 0, 0.06)',
  BLACK40: '#1c1c1c80',
  BLACK20: '#1A1A1A',
  BLACK30: '#272727',
  GREY: '#E8E8E8',
  GREY10: '#969696',
  GREY20: '#F7F7F7',
  GREY30: '#585757',
  GREY40: '#313131',
  GREY50: '#767676',
  RED: '#E92C2C',
  REDFOCUSED: '0px 0px 2px 2px rgba(233, 44, 44, 0.15)',
  REDGRADIENT:
    'linear-gradient(0deg, rgba(255, 59, 59, 0.10) 0%, rgba(255, 59, 59, 0.10) 100%), #FFF',
}

export const LIGHT_COLORS = {
  Brand: COLORS.BRAND,
  'Brand-gradiend': COLORS.BRANDGRADIENT,
  'Grayscale-Border': COLORS.GREY,
  'Grayscale-Content-1': COLORS.BLACK,
  'Grayscale-Content-2': COLORS.GREY30,
  'Grayscale-Content-3': COLORS.GREY10,
  'Brand-Border': COLORS.BRAND10,
  'Brand-background': COLORS.BRAND20,
  'Overlay-bg': COLORS.BLACK40,
}

export const DARK_COLORS: typeof LIGHT_COLORS = {
  Brand: COLORS.BRAND30,
  'Brand-gradiend': COLORS.BRANDGRADIENT,
  'Grayscale-Border': COLORS.GREY40,
  'Grayscale-Content-1': COLORS.GREY,
  'Grayscale-Content-2': COLORS.WHITE20,
  'Grayscale-Content-3': COLORS.GREY50,
  'Brand-Border': COLORS.BRAND30,
  'Brand-background': COLORS.BRAND10GRADIENT,
  'Overlay-bg': COLORS.BLACK40,
}
