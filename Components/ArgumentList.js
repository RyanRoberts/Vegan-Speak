import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import {ListItem} from 'react-native-elements'
import { connect } from 'react-redux'

class ArgumentList extends React.Component {

  render() {
  	const { args, displayArgument } = this.props
    return (
      <View style={styles.main_container}>
        <FlatList 
          data = {args}
          extraData={this.props.favoriteArgs}
          keyExtractor={(item) => item.id.toString()}
          renderItem = {({item}) => (
            <ListItem 
              badge={{ value: item.id, containerStyle: {margin: 3}}}
              title={item.argument}
              leftIcon={{ name: "chevron-left"}}
              containerStyle={styles.listItem}
              hideChevron
              subtitle={(this.props.favoriteArgs.findIndex(elem => item.id === elem) !== -1)? 'favorited !' : null}
              subtitleStyle= {styles.subtitle}
              onPress = {() => displayArgument(item)}
              wrapperStyle={{flexDirection: 'row-reverse'}} 
              leftIcon={{ name: "chevron-right"}}/>//this icon is actually on the right! I inverted flex for the badge to be on the left 
            )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  subtitle:{
    color: '#CD528A'
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
