import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

class Argument extends React.Component{
	static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('argument', 'unrecognized argument').argument,
        headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 14
      },
      headerTitle: ({ style, children : title }) => {
        return (
          <Text style={style} numberOfLines={2}>{title}</Text>
        )
      },
    };
    };
	constructor(props){
		super(props)
    this.arg = this.props.navigation.getParam('argument')
	}

  _toggleFavorites = (argId) =>{
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
          type={'font-awesome'}
          size={32}
          onPress={() => this._toggleFavorites(this.arg.id)} 
        />
      );
  }
	render(){
		return(
			<View style={styles.main_container}>
        <Text style={styles.sectionTitle}>{"short answer: "}</Text>
        <Text style={styles.tldr}>{this.arg.tldr}</Text>
        <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => this._toggleFavorite}>
              {this._displayFavoriteIcon()}
          </TouchableOpacity>
        <Text style={styles.sectionTitle}>{"long answer: "}</Text>
        <ScrollView style={styles.longAnswer}>
				<HTMLView
					value={this.arg.answer}
				/>
        </ScrollView>
			</View>
		);
	};

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 2,
    backgroundColor: 'white',
  },
  favorite_container: {
    alignItems: 'center',
    margin: 15
  },
  tldr: {
    color: '#878C8F',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 5
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 5
  },
  longAnswer: {
    paddingLeft: 15,
    paddingRight: 5
  }
})

const mapStateToProps = (state) => {
  return {
  		favoriteArgs: state.favoriteArgs
  }
}


export default connect(mapStateToProps)(Argument)