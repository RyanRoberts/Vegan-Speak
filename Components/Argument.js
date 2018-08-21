import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Argument extends React.Component{
	static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('argument', 'unrecognized category').argument,
      };
    };
	constructor(props){
		super(props)
		this.arg = this.props.navigation.getParam('argument')
	}
	render(){
		return(
			<View style={styles.main_container}>
				<Text style={styles.tldr}>{this.arg.tldr}</Text>
				<Text>{this.arg.answer}</Text>
			</View>
		);
	};

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  tldr: {
    color: '#a5a19d',
    fontSize: 24,
  }
})

export default Argument