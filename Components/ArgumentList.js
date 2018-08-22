import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import args from '../assets/argumentsData'
import {ListItem} from 'react-native-elements'

class ArgumentList extends React.Component {
      static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('category', 'unrecognized category'),
      };
    };
    _displayArgument = (arg) => {
      this.props.navigation.navigate("Argument", { argument: arg })
    }
    renderItem = ({item, key}) => {
      return(
        <ListItem 
          badge={{ value: item.id, containerStyle: {margin: 3}}}
          title={item.argument}
          containerStyle={styles.listItem}
          hideChevron
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

export default ArgumentList