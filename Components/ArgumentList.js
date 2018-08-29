import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import args from '../assets/argumentsData'
import {ListItem, Icon} from 'react-native-elements'
import { connect } from 'react-redux'

class ArgumentList extends React.Component {
      static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('category', 'unrecognized category'),
      };
    };
    _displayArgument = (arg) => {
      this.props.navigation.navigate("Argument", { argument: arg })
    }
    _displaySubtitle(index){
    var subtitle = null
    if (this.props.favoriteArgs.findIndex(item => index === item) !== -1){
      subtitle = 'favorited!'
    }
    return subtitle
  }
    renderItem = ({item, key}) => {
      return(
        <ListItem 
          badge={{ value: item.id, containerStyle: {margin: 3}}}
          title={item.argument}
          leftIcon={{ name: "chevron-left"}}
          containerStyle={styles.listItem}
          hideChevron
          subtitle={this._displaySubtitle(item.id)}
          onPress = {() => this._displayArgument(item)}
          wrapperStyle={{flexDirection: 'row-reverse'}} 
          leftIcon={{ name: "chevron-right"}}/>//this icon is actually on the right! I inverted flex for the badge to be on the left 
        );
    };
  render() {
    return (
      <View style={styles.main_container}>
        <FlatList 
          data = {(this.props.navigation.getParam("category") === 'ALL') ? args :args.filter(elem => elem.category === this.props.navigation.getParam("category"))}
          keyExtractor={(item) => item.id.toString()}
          renderItem = {this.renderItem}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#ffffff'
  }
})

const mapStateToProps = (state) => {
  return {
      favoriteArgs: state.favoriteArgs
  }
}


export default connect(mapStateToProps)(ArgumentList)
