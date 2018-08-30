import React from 'react'
import args from '../assets/argumentsData'
import ArgumentList from './ArgumentList'

class Category extends React.Component {
      static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('category', 'unrecognized category'),
      };
    };

    _displayArgument = (arg) => {
      this.props.navigation.navigate("Argument", { argument: arg })
    }

  render() {
    return (
      <ArgumentList 
      displayArgument = {this._displayArgument}
      args={(this.props.navigation.getParam("category") === 'ALL') ? args :args.filter(elem => elem.category === this.props.navigation.getParam("category"))}/>
    );
  }
}

export default Category