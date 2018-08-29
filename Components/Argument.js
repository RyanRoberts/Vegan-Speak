import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { Icon } from 'react-native-elements'
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

  _toggleFavorites(argId){
    const action = { type: "TOGGLE_FAVORITE", value: argId}
    this.props.dispatch(action)
  }

  _displayFavoriteIcon(){
    var iconName = 'heart-o'
    if (this.props.favoriteArgs.findIndex(item => this.arg.id === item) !== -1){
      iconName = 'heart'
    }
    return (
        <Icon
          name={iconName}
          type='font-awesome'
          onPress={() => this._toggleFavorites(this.arg.id)} 
        />
      );
  }
	render(){
		return(
			<View style={styles.main_container}>
        <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => this._toggleFavorite}>
              {this._displayFavoriteIcon()}
          </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  favorite_container: {
    alignItems: 'center',
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