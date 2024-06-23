export const COLORS = {
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  WHITE10: '#E8E8E8',
  BRAND: '#0BA864',
  BRANDGRADIENT:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #0BA864',
  BRAND10: '#D5F5E6',
  BRAND20: '#F4FBF8',
  BRAND30: '#16D180',
  BLACK: '#1C1C1C',
  BLACK10: 'rgba(0, 0, 0, 0.06)',
  BLACK20: '#1A1A1A',
  BLACK30: '#272727',
  GREY: '#E8E8E8',
  GREY10: '#969696',
  GREY20: '#F7F7F7',
  GREY30: '#585757',
  GREY40: '#313131',
  GREY50: '#767676',
  RED: '#E92C2C',
  REDGRADIENT:
    'linear-gradient(0deg, rgba(255, 59, 59, 0.10) 0%, rgba(255, 59, 59, 0.10) 100%), #FFF',
}

export const LIGHT_COLORS = {
  'Grayscale-Border': COLORS.GREY,
  Brand: COLORS.BRAND,
  'Grayscale-Content-3': COLORS.GREY10,
}

export const DARK_COLORS: typeof LIGHT_COLORS = {
  'Grayscale-Border': COLORS.GREY40,
  Brand: COLORS.BRAND30,
  'Grayscale-Content-3': COLORS.GREY50,
}
