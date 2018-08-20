import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Argument extends React.Component{
	render(){
		const arg = this.props.navigation.getParam('argument')
		return(
			<View>
				<Text>{arg.argument}</Text>
				<Text>{arg.tldr}</Text>
				<Text>{arg.answer}</Text>
			</View>
		);
	};

}

export default Argument