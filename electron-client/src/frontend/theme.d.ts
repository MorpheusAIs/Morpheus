import 'styled-components';
import { ITheme } from './theme/theme';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends ITheme {}
}
