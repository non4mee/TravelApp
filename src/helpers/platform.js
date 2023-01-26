import { Platform, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = undefined
const isIphoneX =
  platform === 'ios' &&
  ((deviceHeight === 812 || deviceWidth === 812)
    || (deviceHeight === 844 || deviceWidth === 844)
    || (deviceHeight === 896 || deviceWidth === 896)
    || (deviceHeight === 926 || deviceWidth === 926))

export default {
  platformStyle,
  platform,

  // Color
  primary: '#7C2BDE',
  success: '#18E1C9',
  disabledText: '#615D61',
  dark: '#707070',
  white: '#FFFFFF',
  grey: '#BCBCBE',
  light_grey: '#948F94',
  light_black: '#4C4357',
  black: '#000000',
  red: '#FD3C21',
  defaultBackgroundColor: '#F2F2F2',

  // Font
  fontRegular: 'Metropolis-Regular',
  fontMedium: 'Metropolis-Medium',
  fontSemiBold: 'Metropolis-SemiBold',
  fontBold: 'Metropolis-Bold',

  deviceWidth,
  deviceHeight,
  isIphoneX,
  topSpace: isIphoneX ? 44 : 30,
  bottomSpace: isIphoneX ? 34 : 0,

  shadow: platform === 'ios' ? {
    shadowColor: opacify('#000000', 0.3),
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1
  } : {
    elevation: 1
  }
}

export function opacify(color = '#ffffff', opacity = 1) {
  const o = Math.round(opacity * 256)
  const hexOpacity = o.toString(16)
  return color.concat(hexOpacity)
}
