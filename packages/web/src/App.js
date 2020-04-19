/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Suspense } from "react";
import { StyleSheet } from "react-native";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RoutesDefinitions from "./RoutesDefinitions";
import { Provider } from "react-redux";
import { Platform } from "react-native-web";
import store, { persistor } from "commons/src/state/store";
import { PersistGate } from "redux-persist/integration/react";

const RootComponent = () => {
  return <Suspense fallback={""}>
    <Switch>
      {RoutesDefinitions.map((route, idx) => {
        return route.component ? (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={props => <route.component {...props} />}
          />
        ) : null;
      })}
      <Redirect exact path="/" to="/home" />
      <Route
        path="*"
        name="Not Found"
        render={props => <h1>Not Found</h1>}
      />
    </Switch>
  </Suspense>
}
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          {Platform.OS === "web" ? (
            <style type="text/css">{`
                      @font-face {
                        font-family: 'SoleilBold';
                        src: url(${require("commons/fonts/soleil-bold.ttf")}) format('truetype');
                      }
                      @font-face {
                        font-family: 'SoleilLight';
                        src: url(${require("commons/fonts/soleil-light.ttf")}) format('truetype');
                      }
                      @font-face {
                        font-family: 'SoleilRegular';
                        src: url(${require("commons/fonts/soleil-regular.ttf")}) format('truetype');
                      }
                    `}</style>
          ) : null}
          <>
            <BrowserRouter>
              <RootComponent />
            </BrowserRouter>
          </>
      </PersistGate>
    </Provider>
  );
};


export default App;
