import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth7683Navigator from '../features/EmailAuth7683/navigator';
import CalendarView7682Navigator from '../features/CalendarView7682/navigator';
import BlankScreen47681Navigator from '../features/BlankScreen47681/navigator';
import BlankScreen57680Navigator from '../features/BlankScreen57680/navigator';
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
EmailAuth7683: { screen: EmailAuth7683Navigator },
CalendarView7682: { screen: CalendarView7682Navigator },
BlankScreen47681: { screen: BlankScreen47681Navigator },
BlankScreen57680: { screen: BlankScreen57680Navigator },
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
