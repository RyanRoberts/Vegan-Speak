import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
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

class CategoriesMenu extends React.Component {

    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Browse categories...',
      };
    };

    _displayArguments = (category) => {
      this.props.navigation.navigate("ArgumentList", { category: category })
    }
    renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <CategoryCard category={item} displayArguments = {this._displayArguments}/>
        );
      };
    render() {
        return (
            <FlatList 
            style={styles.container}
              data = {formatData(categoriesData, numColumns)}
              numColumns={numColumns}
              keyExtractor={(item) => item.name}
              renderItem = {this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CategoriesMenu
