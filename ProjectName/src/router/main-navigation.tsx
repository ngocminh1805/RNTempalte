import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationContainerRefContext,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from './screen-name';
import {HomeScreen} from '../screens/HomeScreen';
import BottomTabNavigator from './bottom-tab-navigator';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenName.BOTTOM_TAB}>
        <Stack.Screen
          name={ScreenName.BOTTOM_TAB}
          component={BottomTabNavigator}
          options={{animation: 'default'}}
        />
        <Stack.Screen
          name={ScreenName.HOME_SCREEN}
          component={HomeScreen}
          options={{animation: 'default'}}
        />
        {/* <Stack.Screen
          name={ScreenName.REPORT_SCREEN}
          component={ReportScreen}
          options={{animation: 'slide_from_right'}}
        /> */}
        {/* <Stack.Screen
          name="SeatBooking"
          component={SeatBookingScreen}
          options={{animation: 'slide_from_bottom'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
