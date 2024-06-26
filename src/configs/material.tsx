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
  'Paragraph / P2 - 20': React.CSSProperties
  'Heading / H5 - 16': React.CSSProperties
  'Paragraph / P3 - 13': React.CSSProperties
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
    'Paragraph / P2 - 20': true
    'Heading / H5 - 16': true
    'Paragraph / P3 - 13': true
    'Badge-x-base': true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    white: true
    'active-text': true
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
          props: { variant: 'Paragraph / P2 - 20' },
          style: ({ theme }) => ({
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            color: theme.palette.colors['Grayscale-Content-2'],
          }),
        },
        {
          props: { variant: 'Paragraph / P3 - 13' },
          style: ({ theme }) => ({
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '20px',
            color: theme.palette.colors['Grayscale-Content-3'],
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
          props: { variant: 'contained' },
          style: ({ theme }) => ({
            border: `1px solid ${theme.palette.colors['Brand-Border']}`,
            textShadow: `0px 1px 1px ${theme.palette.allColors.BLACK10}`,
            color: theme.palette.allColors.WHITE,
            background: theme.palette.colors['Brand-gradiend'],
          }),
        },
        {
          props: { variant: 'text' },
          style: ({ theme }) => ({
            boxShadow: 'none !important',
            color: theme.palette.colors['Grayscale-Content-2'],
          }),
        },
        {
          props: { variant: 'active-text' },
          style: ({ theme }) => ({
            boxShadow: 'none !important',
            color: theme.palette.colors.Brand,
            background: theme.palette.colors['Brand-background'],
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
            border: `1px solid${theme.palette.colors['Brand-Border']}`,
            borderRadius: '4px',
            background: theme.palette.colors['Brand-gradiend'],
            boxShadow: `0px 1px 1px 0px ${theme.palette.allColors.BLACK10}`,
            path: {
              fill: theme.palette.allColors.WHITE,
            },
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
            paddingLeft: '12px !important',
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
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'static',
          height: 'auto',
          transform: 'translate(0) scale(1)',
          fontSize: '14px',
          color: theme.palette.colors['Grayscale-Content-2'],
          marginBottom: '8px',
        }),
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },

      variants: [
        {
          props: { variant: 'outlined' },
          style: ({ theme }) => ({
            minHeight: '40px',
            input: {
              fontSize: '16px',
            },

            '.MuiInputBase-root': {
              padding: 0,
              borderRadius: '8px',
              height: '40px',
              minHeight: '40px',
              paddingLeft: '6px',
            },
            '&.header': {
              label: {
                margin: 0,
              },
              '.MuiInputBase-root': {
                background: theme.palette.background.default,
              },
              fieldset: {
                borderWidth: '1px',
                borderColor: theme.palette.background.default,
                boxShadow: 'none',
              },
            },
          }),
        },
      ],
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
            legend: {
              display: 'none',
            },
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.colors.Brand} !important`,
            boxShadow: theme.palette.allColors.BRANDFOCUSED + ' !important',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: `${theme.palette.colors.Brand} !important`,
            boxShadow: theme.palette.allColors.BRANDFOCUSED + ' !important',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: `${theme.palette.allColors.RED} !important`,
            boxShadow: theme.palette.allColors.REDFOCUSED + ' !important',
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
          style: { zIndex: 9500, maxHeight: '300px', fontSize: '13px' },
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
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '40px',
          '.MuiTabs-flexContainer': {
            gap: '32px !important',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginTop: '8px',
          marginLeft: '2px',
          fontSize: '13px',
          color: theme.palette.colors['Grayscale-Content-3'],
          '&.error': {
            fontSize: '12px',
            fontWeight: 400,
            marginTop: '4px',
            marginLeft: 0,
            color: theme.palette.allColors.RED,
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: 'auto',
          maxHeight: 'auto',
          minHeight: 'auto',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
          textTransform: 'inherit',
          color: theme.palette.colors['Grayscale-Content-1'],
          padding: '8px 0 !important',
          '.MuiTouchRipple-root': {
            display: 'none',
          },
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '8px 16px',
          alignItems: 'center',

          '.MuiAlert-icon': {
            width: '20px',
            marginRight: '8px !important',
          },
          '.MuiAlert-message': {
            padding: 0,
            fontSize: '13px',
            lineHeight: '20px',
            fontWeight: 400,
            color: theme.palette.colors['Grayscale-Content-2'],
          },
          '.MuiAlert-action': {
            marginRight: '0 !important',
            marginBottom: 0,
            padding: 0,
            paddinLeft: '16px',
          },
        }),
      },
    },

    MuiSwipeableDrawer: {
      defaultProps: {
        sx: {
          zIndex: 9000,
        },
        ModalProps: {
          keepMounted: false,
        },
        BackdropProps: {
          sx: theme => ({
            backgroundColor: theme.palette.colors['Overlay-bg'],
          }),
        },
        PaperProps: {
          sx: theme => ({
            maxWidth: '318px',
            backgroundImage: 'none',
            minWidth: 'min(80vw, 318px)',
            padding: '16px',
            background: theme.palette.background.default,
          }),
        },
      },
    },

    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          height: 22,
          padding: '0',
          width: 36.19,
          marginRight: '9px',
          '& .MuiSwitch-switchBase': {
            margin: '1.35px 1px',
            padding: 0,
            transitionDuration: '300ms',
            '&.MuiSwitch-switchBase.Mui-checked': {
              right: '10px',
            },
            '&.Mui-checked': {
              transform: 'translateX(12px)',
              color: theme.palette.allColors.WHITE,
              '& + .MuiSwitch-track': {
                border: 0,
                opacity: 1,
                background: theme.palette.colors.Brand,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: theme.palette.colors['Grayscale-Border'],
            },
            '&.Mui-focusVisible.Mui-checked .MuiSwitch-thumb': {
              color: theme.palette.allColors.WHITE,
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: theme.palette.allColors.WHITE,
            },
          },
          '& .MuiSwitch-thumb': {
            width: 19.16,
            height: 19.16,
            boxSizing: 'border-box',
          },
          '& .MuiSwitch-track': {
            opacity: 1,
            borderRadius: '20px',
            backgroundColor: theme.palette.colors['Grayscale-Border'],
            transition: theme.transitions.create(['background-color'], {
              duration: 500,
            }),
          },
          '& .Mui-disabled+.MuiSwitch-track': {
            opacity: '0.5 !important',
          },
        }),
      },
    },
  },
})
