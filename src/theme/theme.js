import { createMuiTheme } from '@material-ui/core';
import { colors } from './colors';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 640,
      sm: 768,
      md: 1024,
      lg: 1500,
    },
  },
  palette: {
    common: {
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      grey: colors.grey,
      darkBlue: colors.darkBlue,
      offWhite: colors.offWhite,
      darkGray: colors.darkGray,
      lightGray: colors.lightGray,
      mediumGray: colors.mediumGray,
      lightGreen: colors.lightGreen,
      mediumGreen: colors.mediumGreen,
      darkGreen: colors.darkGreen,
      lightOrange: colors.lightOrange,
      orange: colors.orange,
      alertRed: colors.alertRed,
      salmonRed: colors.salmonRed,
      plum: colors.plum,
      lightBlue: colors.lightBlue,
      red: colors.red,
      green: colors.green,
      lightGrayishBlue: colors.lightGrayishBlue,
      lightRed: colors.lightRed,
      lightYellow: colors.lightYellow,
    },
  },
  typography: {
    fontFamily: ['Open Sans'],
    smallFontSize: '14px',
    formElementsFontSize: '16px',
  },
  overrides: {
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: colors.blue,
        fontWeight: 'bolder',
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: 'bolder',
      },
      body2: {
        fontWeight: 'bold',
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: colors.blue,
      },
    },
  },
});

export default theme;
