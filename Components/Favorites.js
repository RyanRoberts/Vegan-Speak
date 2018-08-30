import React from 'react'
import { StyleSheet, Text } from 'react-native'
import ArgumentList from './ArgumentList'
import args from '../assets/argumentsData'
import { connect } from 'react-redux'

class Favorites extends React.Component {
	static navigationOptions = ({ navigation }) => {
      return {
        title: 'Your favorite arguments',
      };
    };

    _displayArgument = (arg) => {
      this.props.navigation.navigate("Argument", { argument: arg })
    }
  render() {
  	const favoriteArgs =  this.props.favoriteArgs.map(item => args[item-1])
    return (
      <ArgumentList 
      displayArgument = {this._displayArgument}
      args={favoriteArgs}/>
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
  return {
    favoriteArgs: state.favoriteArgs
  }
}

export default connect(mapStateToProps)(Favorites)