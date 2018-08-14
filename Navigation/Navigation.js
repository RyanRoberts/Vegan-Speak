import { createStackNavigator } from 'react-navigation'
import Categories from '../Components/Categories'

const MainStackNavigator = createStackNavigator({
	Categories: {
		screen: Categories,
		navigationOptions:{
			title: 'Browse by category...'
		}
	}
})

export default MainStackNavigator
