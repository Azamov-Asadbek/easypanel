import { COLORS, DARK_COLORS, LIGHT_COLORS } from '@/constants/colors'
import {
  experimental_extendTheme as extendTheme,
  type ColorSystemOptions,
  type SupportedColorScheme,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    allColors: typeof COLORS
    colors: typeof LIGHT_COLORS
  }

  interface PaletteOptions {
    allColors: typeof COLORS
    colors: typeof LIGHT_COLORS
  }
}

interface TypographyProps {
  title: React.CSSProperties
}

declare module '@mui/material/styles' {
  interface TypographyVariants extends TypographyProps {}

  interface TypographyVariantsOptions extends TypographyProps {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'contained-light': true
  }
  interface ButtonPropsSizeOverrides {
    extraLarge: true
    extraSmall: true
    mediumSmall: true
  }
  interface ButtonExtraProps {
    sizeExtraLarge: true
    sizeExtraSmall: true
    sizeMediumSmall: true
  }
  interface ButtonClasses {
    sizeExtraLarge: 'sizeExtraLarge'
    sizeExtraSmall: 'sizeExtraSmall'
    sizeMediumSmall: 'sizeMediumSmall'
  }
}

declare module '@mui/material/RadioGroup' {
  interface RadioGroupProps {
    error?: boolean
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    filled: true
    contained: true
    white: true
  }

  interface IconButtonOwnProps {
    radius?: string | number
  }
}

const colorSchemes: Partial<Record<SupportedColorScheme, ColorSystemOptions>> | undefined = {
  light: {
    palette: {
      allColors: COLORS,
      colors: LIGHT_COLORS,
      primary: {
        main: COLORS.BRAND,
      },
      text: {
        primary: COLORS.BLACK,
      },
      background: {
        paper: COLORS.WHITE,
        default: COLORS.GREY20,
      },
      error: {
        light: COLORS.RED,
        main: COLORS.RED,
        dark: COLORS.RED,
      },
    },
  },
  dark: {
    palette: {
      allColors: COLORS,
      colors: DARK_COLORS,
      primary: {
        main: COLORS.BRAND,
      },
      text: {
        primary: COLORS.WHITE10,
      },
      background: {
        paper: COLORS.BLACK20,
        default: COLORS.BLACK30,
      },
      error: {
        light: COLORS.RED,
        main: COLORS.RED,
        dark: COLORS.RED,
      },
    },
  },
}

export const theme = extendTheme({
  colorSchemes,
  shape: {
    borderRadius: 8,
  },
  typography: palette => ({
    fontFamily: 'Onest, serif !important',
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '20px',
      letterSpacing: '0.35px',
      color: palette.allColors.BLACK,
    },
  }),
})
