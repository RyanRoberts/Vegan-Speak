import React from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import CategoriesData from '../assets/categoriesData';
import CategoryCard from './CategoryCard';


const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
const defaultBackground = "#EEF2F4"

class CategoriesMenu extends React.Component {

    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Browse categories...',
      };
    };
    constructor(props) {
      super(props)
      this.state = { inputBackgroundColor: defaultBackground }
    }

    onTextInputFocus() {
      this.setState({
          inputBackgroundColor: 'white'
      })
    }

    onTextInputBlur() {
      this.setState({
        inputBackgroundColor: defaultBackground
      })
    }

    _displayCategory = (category) => {
      this.props.navigation.navigate("Category", { category: category })
    }
    renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <CategoryCard category={item} displayCategory = {this._displayCategory}/>
        );
      };
    render() {
        return (
          <View style={styles.main_container}>
          <TextInput
            blurOnSubmit
            inlineImageLeft='search_icon'
            style={[styles.textinput, {backgroundColor: this.state.inputBackgroundColor}]}
            placeholder='search an argument....'
            underlineColorAndroid='black'
            onBlur={ () => this.onTextInputBlur() }
            onFocus={ () => this.onTextInputFocus() }
            placeholderTextColor='#808080'/>
            <FlatList 
              data = {formatData(categoriesData, numColumns)}
              numColumns={numColumns}
              keyExtractor={(item) => item.name}
              renderItem = {this.renderItem}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: defaultBackground
    },
    textinput: {
      height: 50,
      paddingLeft: 20
  },
});

export default CategoriesMenu
