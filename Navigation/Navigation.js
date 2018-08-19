import { createStackNavigator } from 'react-navigation'
import CategoriesMenu from '../Components/CategoriesMenu'
import ArgumentList from '../Components/ArgumentList'

const MainStackNavigator = createStackNavigator({
	CategoriesMenu: {
		screen: CategoriesMenu,
		navigationOptions:{
			title: 'Browse by category...'
		}
	},
	ArgumentList: {
		screen: ArgumentList
	}
})

export default MainStackNavigator
