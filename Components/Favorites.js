import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ArgumentList from './ArgumentList'
import args from '../assets/argumentsData'
import { connect } from 'react-redux'

const defaultBackground = "#EEF2F4"
class Favorites extends React.Component {
	static navigationOptions = ({ navigation }) => {
      return {
        title: 'Your favorite arguments',
      };
    };

  render() {
  	const favoriteArgs =  this.props.favoriteArgs.map(item => args[item-1])
    return (
      <View style={styles.main_container}>
      <ArgumentList 
      args={favoriteArgs}
      inFavorites={true}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: defaultBackground
    },
});

const mapStateToProps = state => {
  return {
    favoriteArgs: state.favoriteArgs
  }
}

export default connect(mapStateToProps)(Favorites)