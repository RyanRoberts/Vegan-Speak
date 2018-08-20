import { createStackNavigator } from 'react-navigation'
import CategoriesMenu from '../Components/CategoriesMenu'
import ArgumentList from '../Components/ArgumentList'
import Argument from '../Components/Argument'

const MainStackNavigator = createStackNavigator({
	CategoriesMenu: {
		screen: CategoriesMenu,
		navigationOptions:{
			title: 'Browse by category...'
		}
	},
	ArgumentList: {
		screen: ArgumentList
	},
	Argument: {
		screen: Argument
	}
})

export default MainStackNavigator
