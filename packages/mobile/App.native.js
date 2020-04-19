import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store, { persistor } from 'commons/src/state/store';
import { PersistGate } from 'redux-persist/integration/react';
import {Home} from "commons/src/views/Home/Home";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: 'Home',
  },
);


// Combining all navigators
// we are using switch navigator
const MobileNav = createAppContainer(createSwitchNavigator(
  {
    Main: MainNavigator
  },
  {
    initialRouteName: 'Main'
  }
));


export default App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          {/*<StatusBar barStyle='light-content' />*/}
          <MobileNav />
      </PersistGate>
    </Provider>
  );
};
