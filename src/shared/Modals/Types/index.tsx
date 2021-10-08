import { NavigationProp, RouteProp } from "@react-navigation/core";
export interface GenericNavigation {
    navigation?: NavigationProp<any>;
    route?: RouteProp<any, any>;
  }
export interface WalletState {
  email?:string
  password?:string
  username?:string
  isDarkMode?:boolean
  filePath?:string
}