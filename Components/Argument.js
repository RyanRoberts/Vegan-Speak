import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux'

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
				<HTMLView
					value={this.arg.answer}
				/>
			</View>
		);
	};

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  tldr: {
    color: '#878C8F',
    fontSize: 16,
    textAlign: 'right',
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingRight: 5
  }
})

const mapStateToProps = (state) => {
  return {
  		favoriteArgs: state.favoriteArgs
  }
}

export default connect(mapStateToProps)(Argument)