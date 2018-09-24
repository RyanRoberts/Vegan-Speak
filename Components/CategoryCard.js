import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Card, Icon, } from 'react-native-elements'

class CategoryCard extends React.Component{
	render(){
		return(
			<TouchableOpacity style={styles.item}
			onPress = {() => this.props.displayCategory(this.props.category.name)}>
				<Card
				containerStyle={styles.categoryCard}
				title={this.props.category.label}>
					<Icon name={this.props.category.icon.name} type={this.props.category.icon.type}></Icon>
				</Card> 
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		margin: 5,
	},
	categoryCard: {
		width: '100%'
	}
})
export default CategoryCard