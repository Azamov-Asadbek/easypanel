import { COLORS, DARK_COLORS, LIGHT_COLORS } from '@/constants/colors'
import { Box } from '@mui/material'
import {
  experimental_extendTheme as extendTheme,
  type ColorSystemOptions,
  type SupportedColorScheme,
} from '@mui/material/styles'
import { ReactComponent as IconDirectionRow } from '@/assets/icons/direction-row.svg'

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
  link: React.CSSProperties
  'Caps / Caps 2 - 12 Regular': React.CSSProperties
  'Heading / H4 - 20': React.CSSProperties
  'Heading / H5 - 16': React.CSSProperties
  'Badge-x-base': React.CSSProperties
}

declare module '@mui/material/styles' {
  interface TypographyVariants extends TypographyProps {}

  interface TypographyVariantsOptions extends TypographyProps {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    link: true
    'Caps / Caps 2 - 12 Regular': true
    'Heading / H4 - 20': true
    'Heading / H5 - 16': true
    'Badge-x-base': true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    white: true
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
        main: COLORS.BRAND30,
      },
      text: {
        primary: COLORS.GREY,
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

  components: {
    MuiCssBaseline: {
      styleOverrides: theme => ({
        textarea: {
          fontSize: '14px !important',
          fontWeight: '500 !important',
        },
      }),
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif !important',
        },
      },
      variants: [
        {
          props: { variant: 'link' },
          style: ({ theme }) => ({
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '20px',
            color: theme.palette.colors.Brand,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }),
        },
        {
          props: { variant: 'Caps / Caps 2 - 12 Regular' },
          style: ({ theme }) => ({
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0.48px',
            textTransform: 'uppercase',
            color: theme.palette.colors['Grayscale-Content-3'],
          }),
        },
        {
          props: { variant: 'Heading / H5 - 16' },
          style: ({ theme }) => ({
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            color: theme.palette.colors.Brand,
          }),
        },
        {
          props: { variant: 'Heading / H4 - 20' },
          style: ({ theme }) => ({
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '28px',
            color: theme.palette.colors['Grayscale-Content-1'],
          }),
        },
        {
          props: { variant: 'Badge-x-base' },
          style: ({ theme }) => ({
            padding: '2px 6px',
            borderRadius: '6px',
            border: `1px solid ${theme.palette.colors['Brand-Border']}`,
            background: theme.palette.colors['Brand-background'],
            fontSize: '13px',
            fontWeight: 500,
            lineHeight: '20px',
            color: theme.palette.colors.Brand,
          }),
        },
      ],
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        sizeExtraLarge: {
          height: 52,
          borderRadius: '12px',
        },
        sizeLarge: {
          height: 46,
          borderRadius: '8px',
        },
        sizeMedium: {
          height: 44,
        },
        sizeSmall: {
          height: 40,
          fontSize: '16px',
        },
        sizeExtraSmall: {
          height: 29,
        },
        root: ({ theme }) => ({
          fontWeight: 400,
          fontSize: '16px',
          boxShadow: `0px 1px 1px 0px ${theme.palette.allColors.BLACK10}`,
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          textTransform: 'inherit',
          padding: '10px 16px',
          justifyContent: 'flex-start',
          ':hover': {
            boxShadow: `0px 1px 1px 0px ${theme.palette.allColors.BLACK10}`,
          },
          '&.MuiButton-sizeMedium': {
            borderRadius: '8px',
          },

          '&.MuiLoadingButton-loading': {
            '.MuiCircularProgress-root': {
              width: '18px !important',
              height: '18px !important',
            },
          },
        }),
      },
      variants: [
        {
          props: { variant: 'text' },
          style: ({ theme }) => ({
            boxShadow: 'none !important',
            color: theme.palette.colors['Grayscale-Content-2'],
          }),
        },
        {
          props: { variant: 'white' },
          style: ({ theme }) => ({
            border: `1px solid ${theme.palette.colors['Grayscale-Border']}`,
            color: theme.palette.colors['Grayscale-Content-1'],
            background: theme.palette.background.paper,
          }),
        },
        {
          props: { variant: 'outlined' },
          style: ({ theme }) => ({
            border: `1px solid ${theme.palette.colors['Grayscale-Border']}`,
            color: theme.palette.colors['Grayscale-Content-2'],
            background: theme.palette.background.paper,
            '&:hover': {
              border: `1px solid ${theme.palette.colors['Grayscale-Border']}`,
            },
          }),
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          width: 24,
          height: 24,
          borderRadius: '4px',
          padding: '0 !important',
        },
        root: ({ ownerState, theme }) => ({
          padding: '0 !important',
          width: 38,
          height: 38,
          borderRadius: '4px',
          svg: {
            width: '28px',
          },
          path: {
            fill: theme.palette.colors['Grayscale-Content-3'],
          },
          '.MuiTouchRipple-root .MuiTouchRipple-child': {
            borderRadius: '4px',
          },
          ...(ownerState.radius && {
            borderRadius:
              typeof ownerState.radius === 'number' ? `${ownerState.radius}px` : ownerState.radius,
            '.MuiTouchRipple-root .MuiTouchRipple-child': {
              borderRadius:
                typeof ownerState.radius === 'number'
                  ? `${ownerState.radius}px`
                  : ownerState.radius,
            },
          }),
        }),
      },
      variants: [
        {
          props: { color: 'contained' },
          style: ({ theme }) => ({
            border: `1px solid${theme.palette.colors['Grayscale-Border']}`,
            borderRadius: '4px',
            backgroundColor: theme.palette.allColors.TRANSPARENT,
            boxShadow: `0px 1px 1px 0px ${theme.palette.allColors.BLACK10}`,
            '&:hover': {
              backgroundColor: theme.palette.allColors.TRANSPARENT,
            },
          }),
        },
        {
          props: { color: 'filled' },
          style: ({ theme }) => ({
            border: `1px solid${theme.palette.colors['Grayscale-Border']}`,
            borderRadius: '4px',
            backgroundColor: theme.palette.colors.Brand,
            boxShadow: `0px 1px 1px 0px ${theme.palette.allColors.BLACK10}`,
            '&:hover': {
              backgroundColor: theme.palette.colors.Brand,
            },
          }),
        },
        {
          props: { color: 'white' },
          style: ({ theme }) => ({
            border: `1px solid${theme.palette.colors['Grayscale-Border']}`,
            boxShadow: `0px 1px 1px 0px ${theme.palette.allColors.BLACK10}`,
            borderRadius: '4px',
            color: theme.palette.colors.Brand,
            backgroundColor: theme.palette.background.paper,

            path: {
              fill: theme.palette.colors.Brand,
            },
            '&:hover': {
              backgroundColor: theme.palette.background.paper,
            },
          }),
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 46,
          '&.MuiInputBase-sizeSmall': {
            height: 40,
          },
          backgroundColor: theme.palette.background.paper,
          'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active':
            {
              fontWeight: 400,
              fontSize: '16px',
              borderRadius: '0 8px 8px 0',
            },
          ':has(.MuiInputAdornment-positionStart)': {
            paddingLeft: '20px !important',
            input: {
              paddingLeft: '0 !important',
            },
          },
          ':has(.MuiInputAdornment-positionEnd)': {
            paddingRight: '8px !important',
            input: {
              paddingRight: '0 !important',
            },
          },
          fieldset: {
            legend: {
              display: 'none',
            },
          },
          input: {
            padding: '8px 12px !important',
            fontSize: '16px',
            fontWeight: 400,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '8px',
          '&.MuiInputBase-sizeSmall': {
            borderRadius: '8px',
          },
          '& fieldset': {
            top: 0,
            borderWidth: '1px',
            borderColor: theme.palette.colors['Grayscale-Border'],
            boxShadow: `0px 1px 1px 0px ${theme.palette.allColors.BLACK10}`,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.colors.Brand} !important`,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: `${theme.palette.colors.Brand} !important`,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: `${theme.palette.allColors.RED} !important`,
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          padding: '8px 12px',
          color: theme.palette.colors['Grayscale-Content-3'],
        }),
      },
      defaultProps: {
        MenuProps: {
          style: { zIndex: 9500, maxHeight: '300px' },
        },
        IconComponent: props => (
          <Box
            {...props}
            sx={{
              width: '32px !important',
              height: '40px  !important',
              display: 'flex',
              right: '0px !important',
              justifyContent: 'flex-end !important',
              top: 'calc(50% - 20px) !important',
              '&.MuiSelect-iconOpen': {
                transform: 'rotate(0)',
              },
            }}
          >
            <IconDirectionRow />
          </Box>
        ),
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          marginTop: '8px',
          borderRadius: '8px',
          background: theme.palette.background.paper,
          border: `1px solid ${theme.palette.colors['Grayscale-Border']}`,
          boxShadow: `0px 2px 40px 0px ${theme.palette.allColors.BLACK10}`,
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.colors['Grayscale-Border'],
        }),
      },
    },
  },
})
