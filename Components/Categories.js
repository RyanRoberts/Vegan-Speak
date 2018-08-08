import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Card, Button, Icon, Dimensions } from 'react-native-elements'
import CategoriesData from '../assets/categoriesData'



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

class Categories extends React.Component {
    renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <View style={styles.item}>
              <Card
              containerStyle={styles.categoryCard}
            title={item.name}>
                <Icon name={item.icon} type="font-awesome"></Icon>
            </Card> 
          </View>
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
        marginVertical: 20,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1
    },
    categoryCard: {
      width: '100%'
    }
});

export default Categories
