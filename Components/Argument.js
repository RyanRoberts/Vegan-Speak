import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import Toast from 'react-native-root-toast';


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
    const argIndex = this.props.favoriteArgs.findIndex(item => item === argId)
    if(argIndex !== -1){
        const action = { type: "REMOVE_FAVORITE", value: argId}
        this.props.dispatch(action)
        let toast = Toast.show('Argument removed from favorites', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        });
        if(this.props.navigation.getParam('inFavorites', false)){
          this.props.navigation.goBack()
        }
    }
    else{
        const action = { type: "ADD_FAVORITE", value: argId}
        this.props.dispatch(action)
        let toast = Toast.show('Argument added to favorites', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        });
    }
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
          style={styles.favorite_container}
          size={32}
          onPress={() => this._toggleFavorites(this.arg.id)} 
        />
      );
  }
  _displayShortAnswer(){
    if(this.arg.tldr !== ""){
      return(
          <View>
            <Text style={styles.sectionTitle}>{"short answer: "}</Text>
            <Text style={styles.tldr}>{this.arg.tldr}</Text>
            <Text style={styles.sectionTitle}>{"long answer: "}</Text>
          </View>
      );
    }
  }
	render(){
		return(
			<View style={styles.main_container}>
        {this._displayFavoriteIcon()}
        {this._displayShortAnswer()}
        <ScrollView style={styles.longAnswer}>
				<HTMLView
					value={this.arg.answer}
          stylesheet={HTMLstyles}
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
    padding: 15
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

const HTMLstyles = StyleSheet.create({
    a: {
        color: 'grey',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    }
});


const mapStateToProps = (state) => {
  return {
  		favoriteArgs: state.favoriteArgs,
      favoriteRemoved: state.favoriteRemoved
  }
}


export default connect(mapStateToProps)(Argument)