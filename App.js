import React from 'react'
import MainStackNavigator from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import NavigationService from './Services/NavigationService'

const Navigator = MainStackNavigator

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={Store}>
      <Navigator
        ref={navigatorRef => {
          NavigationService.setContainer(navigatorRef);
        }}
      />
      </Provider>
    )
  }
}