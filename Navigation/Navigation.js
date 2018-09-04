import { createStackNavigator, createMaterialTopTabNavigator  } from 'react-navigation'
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

const MainTabNavigator = createMaterialTopTabNavigator (
{
  Search: {
    screen: SearchStackNavigator
  },
  Favorites: {
    screen: FavoriteStackNavigator
  }
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    showIcon: false,
    tabStyle: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  style: {
    backgroundColor: 'black',
  },
    labelStyle: {
      fontSize: 14,
      fontWeight: 'bold',
  },
  indicatorStyle: {
    backgroundColor: 'white'
  }
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true
})

export default MainTabNavigator
