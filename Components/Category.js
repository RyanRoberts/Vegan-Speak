import React from 'react'
import args from '../assets/data/argumentsData'
import ArgumentList from './ArgumentList'

class Category extends React.Component {
      static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('categoryLabel', 'unrecognized category'),
      };
    };

  render() {
    return (
      <ArgumentList 
      args={(this.props.navigation.getParam("categoryName") === 'ALL') ? args :args.filter(elem => elem.category === this.props.navigation.getParam("categoryName"))}/>
    );
  }
}

export default Category