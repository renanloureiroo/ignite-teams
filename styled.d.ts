import { ThemeType } from "@theme/index";
import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
