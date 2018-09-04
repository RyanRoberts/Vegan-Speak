import React from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native'
import {ListItem} from 'react-native-elements'
import { connect } from 'react-redux'
import NavigationService from '../Services/NavigationService'

class ArgumentList extends React.Component {

    _displayArgument = (arg) => {
      NavigationService.navigate("Argument", { argument: arg })
    }

  render() {
  	const { args } = this.props
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={require('../assets/img/veganspeak-banner.png')}/>
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
              subtitle={(this.props.favoriteArgs.findIndex(elem => item.id === elem) !== -1)? 'favorited' : null}
              subtitleStyle= {styles.subtitle}
              onPress = {() => this._displayArgument(item)}
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
  image: {
    flex: 1,
    resizeMode: Image.resizeMode.contain,
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: .2
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
