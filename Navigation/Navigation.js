import { createStackNavigator } from 'react-navigation'
import CategoriesMenu from '../Components/CategoriesMenu'
import ArgumentList from '../Components/ArgumentList'
import Argument from '../Components/Argument'

const MainStackNavigator = createStackNavigator(
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

export default MainStackNavigator
