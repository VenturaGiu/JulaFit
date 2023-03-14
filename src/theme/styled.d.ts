import 'styled-components';
import theme from './index';

declare module 'style-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType { }
};