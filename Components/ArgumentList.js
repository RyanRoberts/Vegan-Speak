import React from 'react'
import { StyleSheet, View, TextInput, Button, Text,FlatList } from 'react-native'
import args from '../assets/argumentsData'
import {ListItem} from 'react-native-elements'

class ArgumentList extends React.Component {
    renderItem = ({item, key}) => {
      return(
        <ListItem 
          badge={{ value: item.id, containerStyle: {margin: 3}}}
          title={item.argument}
          containerStyle={styles.listItem}
          hideChevron
          wrapperStyle={{flexDirection: 'row-reverse'}} 
          leftIcon={{ name: "chevron-right"}}/>//this icon is actually on the right! I inverted flex for the badge to be on the left 
        );
    };
    static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('category', 'unrecognized category'),
    };
  };
  render() {
    return (
      <View style={styles.main_container}>
        <FlatList 
          data = {args}
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