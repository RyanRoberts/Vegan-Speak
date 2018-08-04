// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text,FlatList } from 'react-native'
import args from '../assets/argumentsData'
class Arguments extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Button style={{ height: 50 }} title='Rechercher' onPress={() => {}}/>
        <FlatList 
          data = {args}
          keyExtractor={(item) => item.id.toString()}
          renderItem = {({item}) => <Text>{item.argument}</Text>}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Arguments