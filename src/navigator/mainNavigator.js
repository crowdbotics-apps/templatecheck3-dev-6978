import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging7689Navigator from '../features/Messaging7689/navigator';
import EmailAuth7688Navigator from '../features/EmailAuth7688/navigator';
import CalendarView7687Navigator from '../features/CalendarView7687/navigator';
import BlankScreen47686Navigator from '../features/BlankScreen47686/navigator';
import BlankScreen57685Navigator from '../features/BlankScreen57685/navigator';
import BlankScreen47681Navigator from '../features/BlankScreen47681/navigator';
import BlankScreen47676Navigator from '../features/BlankScreen47676/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging7689: { screen: Messaging7689Navigator },
EmailAuth7688: { screen: EmailAuth7688Navigator },
CalendarView7687: { screen: CalendarView7687Navigator },
BlankScreen47686: { screen: BlankScreen47686Navigator },
BlankScreen57685: { screen: BlankScreen57685Navigator },
BlankScreen47681: { screen: BlankScreen47681Navigator },
BlankScreen47676: { screen: BlankScreen47676Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
