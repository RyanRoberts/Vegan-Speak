import React from 'react'
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'
import {ListItem} from 'react-native-elements'
import { connect } from 'react-redux'
import NavigationService from '../Services/NavigationService'


const filterArg = (arg) => {
  return {
      id: arg.id,
      argument: arg.argument
    }
}


class ArgumentList extends React.Component {

    _displayArgument = (id) => {
      NavigationService.navigate("Argument", { argument: this.props.args.find(item => item.id === id), inFavorites: this.props.inFavorites})
    }

  render() {
  	const { args } = this.props
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={require('../assets/img/veganspeak-banner.png')}/>
        <FlatList
         containerStyle = {styles.list}
          data = {args.map(item => filterArg(item))}
          extraData={this.props.favoriteArgs}
          keyExtractor={(item) => item.id.toString()}
          renderItem = {({item}) => (
            <TouchableOpacity
               activeOpacity = {0.6}
               onPress = {() => this._displayArgument(item.id)}>
            <ListItem 
              badge={{ value: item.id, containerStyle: {margin: 3}}}
              title={item.argument}
              leftIcon={{ name: "chevron-left"}}
              containerStyle={styles.listItem}
              hideChevron
              subtitle={(this.props.favoriteArgs.findIndex(elem => item.id === elem) !== -1)? 'favorited' : null}
              subtitleStyle= {styles.subtitle}
              wrapperStyle={{flexDirection: 'row-reverse'}} 
              leftIcon={{ name: "chevron-right"}}
            />
            </TouchableOpacity> 
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
  list: {
    backgroundColor : "red"
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
