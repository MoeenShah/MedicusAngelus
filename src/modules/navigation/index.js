import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import OpenStackNavigator from './OpenStackNavigator';
import SplashScreen from '../../SplashScreen';
import DashboardDrawerNavigator from './DashboardDrawerNavigator';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: OpenStackNavigator,
    Loading: SplashScreen,
    App: DashboardDrawerNavigator,
  },
  {
    initialRouteName: 'Loading',
    backBehavior: 'none',
  },
);

export default createAppContainer(SwitchNavigator);
