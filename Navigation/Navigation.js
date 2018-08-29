import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import CategoriesMenu from '../Components/CategoriesMenu'
import ArgumentList from '../Components/ArgumentList'
import Argument from '../Components/Argument'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator(
  {
    Home: CategoriesMenu,
    ArgumentList: ArgumentList,
    Argument:Argument,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const MainTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator
  },
  Favorites: {
    screen: Favorites
  }
})

export default MainTabNavigator
