/* eslint-disable no-unused-vars */
import { BREAKPOINTS, COLORS, DARK_COLORS, LIGHT_COLORS } from '@/constants/css'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
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
  logo: React.CSSProperties
  heading: React.CSSProperties
  text: React.CSSProperties
  subText: React.CSSProperties
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    apply: true
    contained: true
  }

  interface IconButtonOwnProps {
    radius?: string | number
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'one-id': true
    map: true
    account: true
    filter: true
  }
}
declare module '@mui/material/InputBase' {
  interface InputPropsVariantOverrides {
    color: true
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants extends TypographyProps {}
  interface TypographyVariantsOptions extends TypographyProps {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    logo: true
    text: true
    subText: true
    heading: true
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
        primary: COLORS.BLACK,
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
  breakpoints: BREAKPOINTS,
  shape: {
    borderRadius: 8,
  },
  typography: theme => ({
    fontFamily: '"Onest", sans-serif',
    color: theme.allColors.BLACK,
    lineHeight: 1.4,
    title: {
      fontSize: '14px',
      fontWeight: 700,
    },
    logo: {
      fontSize: '28px',
      fontWeight: 'bolder',
      color: '#019e5f',
      fontFamily: '"Madimi One", sans-serif; !important',
    },
    heading: {
      fontSize: '20px',
      fontWeight: 700,
    },
    text: {
      fontSize: '14px',
      color: theme.allColors.BLACK,
      fontWeight: 500,
    },
    subText: {
      fontSize: '13px',
      fweight: 400,
      lineHeight: 1,
      color: theme.allColors.GREY10,
    },
  }),
  components: {
    MuiCssBaseline: {
      styleOverrides: theme => ({
        '&.MuiPickersPopper-root': {
          zIndex: '10000 !important',
        },
      }),
    },

    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'none',
          borderWidth: '1px',
          borderRadius: '8px',
          borderStyle: 'solid',
          borderColor: theme.palette.allColors.GREY20,
          '::before': {
            height: 0,
          },
          '&.Mui-expanded': {
            margin: 0,
            overflow: 'hidden',
            position: 'relative',
            borderColor: theme.palette.allColors.BRAND,
            boxShadow: '0px 0px 1px 0px #0c1a4b3d, 0px 3px 8px -1px #3232470d',
            '::after': {
              top: 0,
              left: 0,
              width: '3px',
              content: '""',
              height: '100%',
              position: 'absolute',
              background: theme.palette.allColors.BRAND,
            },
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 20px 17px',
        },
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: <KeyboardArrowDownRoundedIcon />,
      },
      styleOverrides: {
        root: {
          padding: '0 20px',
          '&.Mui-expanded': {
            minHeight: '60px',
          },
        },
        content: {
          margin: '17px 0',
          '&.Mui-expanded': {
            margin: '17px 0',
          },
        },
        expandIconWrapper: ({ theme }) => ({
          '&.Mui-expanded': {
            svg: {
              path: {
                stroke: theme.palette.allColors.BRAND,
              },
            },
          },
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.radius && {
            padding: 0,
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
          props: { color: 'apply' },
          style: ({ theme }) => ({
            color: theme.palette.allColors.WHITE,
            backgroundColor: theme.palette.allColors.BRAND,
            '&:hover': {
              backgroundColor: theme.palette.allColors.BRAND,
            },
          }),
        },
      ],
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        sizeLarge: {
          height: 60,
          fontSize: '20px',
          letterSpacing: '-0.8px',
          padding: '0 20px',
        },
        sizeMedium: {
          height: 50,
          fontSize: '18px',
          letterSpacing: '-0.6px',
        },
        sizeSmall: {
          height: 40,
          gap: '6px',
        },

        root: ({ theme }) => ({
          fontWeight: 500,
          fontSize: '16px',
          boxShadow: 'none',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          borderRadius: '10px',
          textTransform: 'inherit',
          padding: '0 16px',
          gap: '10px',
          ':hover': {
            boxShadow: 'none',
          },
        }),
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: ({ theme }) => ({
            background: theme.palette.allColors.BRANDGRADIENT,
            '&.MuiLoadingButton-loading.Mui-disabled': {
              background: `${theme.palette.allColors.BRANDGRADIENT} !important`,
              '.MuiLoadingButton-loadingIndicator': {
                color: `${theme.palette.allColors.WHITE}`,
              },
              '.MuiButton-icon': {
                display: 'none',
              },
            },
          }),
        },
        {
          props: { variant: 'one-id' },
          style: ({ theme }) => ({
            color: theme.palette.allColors.WHITE,
            background: theme.palette.allColors.PURPLE,
          }),
        },
        {
          props: { variant: 'map' },
          style: ({ theme }) => ({
            color: theme.palette.allColors.BLACK,
            background: theme.palette.allColors.WHITE,
            border: 0,
            borderRadius: '10px',
            boxShadow: '0px 0px 1px 0px #0c1a4b3d, 0px 3px 8px -1px #3232470d',
            padding: 0,
            minWidth: '36px',
            minHeight: '36px',
            '&:hover': {
              background: theme.palette.allColors.WHITE,
            },
          }),
        },
        {
          props: { variant: 'filter' },
          style: ({ theme }) => ({
            color: theme.palette.allColors.WHITE,
            background: theme.palette.allColors.BRANDGRADIENT,
            // border: `1px solid ${theme.palette.allColors.GREY}`,
            borderRadius: '6px',
            '&.MuiLoadingButton-loading.Mui-disabled': {
              background: `${theme.palette.allColors.BRANDGRADIENT} !important`,
              '.MuiLoadingButton-loadingIndicator': {
                color: `${theme.palette.allColors.WHITE}`,
              },
            },
            '&:hover': {
              background: `${theme.palette.allColors.BRANDGRADIENT} !important`,
            },
          }),
        },
        {
          props: { variant: 'outlined' },
          style: ({ theme }) => ({
            borderColor: `${theme.palette.allColors.GREY20} !important`,
            '&.MuiLoadingButton-loading.Mui-disabled': {
              background: `${theme.palette.allColors.TRANSPARENT} !important`,
              '.MuiLoadingButton-loadingIndicator': {
                color: `${theme.palette.allColors.BRAND}`,
              },
            },
          }),
        },
      ],
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          ':has(label.MuiInputLabel-root)': {
            marginTop: '25px  !important',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 42,
          borderRadius: '8px !important',
          backgroundColor: theme.palette.allColors.GREY,
          '&.white': {
            backgroundColor: theme.palette.allColors.WHITE,
          },
          '&.MuiInputBase-sizeSmall': {
            height: 26,
          },
          'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active':
            {
              fontWeight: 500,
              fontSize: '14px',
              borderRadius: '0 8px 8px 0',
              WebkitTextFillColor: `${theme.palette.allColors.BLACK} !important`,
              WebkitBoxShadow: `0 0 0 30px ${theme.palette.allColors.TRANSPARENT} inset !important`,
              boxShadow: `0 0 0 30px ${theme.palette.allColors.TRANSPARENT} inset !important`,
              backgroundColor: theme.palette.allColors.TRANSPARENT,
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
            height: 50,
            padding: '0 16px !important',
            fontSize: '14px',
            fontWeight: '400',
            color: `${theme.palette.allColors.BLACK} !important`,
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          transform: 'translate(0, -25px) scale(1)',
          fontSize: '14px',
          color: theme.palette.allColors.BLACK,
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginLeft: 0,
          fontSize: '12px',
          fontWeight: 400,
          color: theme.palette.allColors.RED,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '8px',
          '&.MuiInputBase-sizeSmall': {
            borderRadius: '5px',
          },
          '& fieldset': {
            top: 0,
            borderWidth: '1px',
            borderColor: theme.palette.allColors.GREY,
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.allColors.BRAND} !important`,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: `${theme.palette.allColors.BRAND} !important`,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: `${theme.palette.allColors.RED} !important`,
          },
        }),
      },
    },

    MuiSelect: {
      defaultProps: {
        MenuProps: {
          style: { zIndex: 9500 },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          marginTop: '8px',
          borderRadius: '9px',
          background: theme.palette.allColors.WHITE,
          border: `1px solid ${theme.palette.allColors.GREY}`,
          boxShadow: '0px 0px 1px 0px #0c1a4b3d, 0px 3px 8px -1px #3232470d',
          maxHeight: '700px !important',
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 500,
          fontSize: '14px',
          padding: '8px 14px',
          lineHeight: 'normal',
          color: theme.palette.allColors.BLACK,
          '.description': {
            opacity: 0.75,
            fontWeight: 400,
          },
        }),
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },

    MuiSwipeableDrawer: {
      defaultProps: {
        sx: {
          zIndex: 9000,
          '&.small': {
            '.MuiPaper-root': {
              maxWidth: '400px',
              backgroundImage: 'none',
              minWidth: 'min(40vw, 400px)',
            },
          },
          '&.normal': {
            '.MuiPaper-root': {
              maxWidth: '490px',
              backgroundImage: 'none',
              minWidth: 'min(40vw, 480px)',
              '@media (max-width: 600px)': {
                maxWidth: '100%',
                minWidth: 'min(100vw, 100%)',
                'table *, .MuiTypography-root': {
                  fontSize: '10px',
                },
              },
            },
          },
        },
        ModalProps: {
          keepMounted: false,
        },
        BackdropProps: {
          sx: theme => ({
            backgroundColor: theme.palette.allColors.BLACK20,
          }),
        },
        PaperProps: {
          sx: theme => ({
            backgroundImage: 'none',
            boxShadow: 'none',
            '&.MuiDrawer-paperAnchorBottom': {
              backgroundColor: theme.palette.allColors.TRANSPARENT,
              paddingTop: '14px',
            },
            '.content': {
              width: '100%',
              overflowY: 'auto',
              mt: '48px',
              mb: '8px',
              padding: '0 24px 32px',
              height: 'calc(100% - 32px)',
            },
          }),
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        root: {
          zIndex: 9000,
        },
      },
      defaultProps: {
        PaperProps: {
          sx: () => ({
            borderRadius: '24px',
            backgroundImage: 'none',
            boxShadow: 'none',
          }),
        },
        BackdropProps: {
          sx: theme => ({
            backgroundColor: theme.palette.allColors.BLACK20,
          }),
        },
      },
    },
  },
})
