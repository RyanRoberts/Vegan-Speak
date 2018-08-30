import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import CategoriesMenu from '../Components/CategoriesMenu'
import Category from '../Components/Category'
import Argument from '../Components/Argument'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator(
  {
    Home: CategoriesMenu,
    Category: Category,
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

const FavoriteStackNavigator = createStackNavigator(
  {
    Home: Favorites,
    Argument: Argument,
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
    screen: FavoriteStackNavigator
  }
})

export default MainTabNavigator
