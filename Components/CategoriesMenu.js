import React from 'react';
import { View, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import CategoriesData from '../assets/categoriesData';
import CategoryCard from './CategoryCard';
import ArgumentList from './ArgumentList'
import args from '../assets/argumentsData'


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
const TOP_BAR_HEIGHT = 50
const DEFAULT_BACKGROUND = "#EEF2F4"

class CategoriesMenu extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Browse by category...',
        };
    };

    constructor(props) {
        super(props)
        this.state = { inputBackgroundColor: DEFAULT_BACKGROUND,
            searchedText: "" }
        }

        _searchArguments = (pattern) => {
            return args.filter( item => item.argument.toLowerCase().includes(pattern.toLowerCase()))
        }
        onTextInputFocus() {
            this.setState({
                inputBackgroundColor: 'white'
            })
        }

        onTextInputBlur() {
            this.setState({
                inputBackgroundColor: DEFAULT_BACKGROUND
            })
        }

        _displayCategory = (category) => {
            this.props.navigation.navigate("Category", { category: category })
        }
        _searchTextInputChanged(text) {
            this.setState({ searchedText: text })
        }

        renderItem = ({ item, index }) => {
            if (item.empty === true) {
                return <View style={[styles.item, styles.itemInvisible]} />;
            }
            return (
                <CategoryCard category={item} displayCategory = {this._displayCategory}/>
                );
        };

        _wipeSearch(){
            this.textInput.clear()
            this.setState({searchedText: ""})
        }

        render() {
            const categories = <FlatList 
            data = {formatData(categoriesData, numColumns)}
            numColumns={numColumns}
            keyExtractor={(item) => item.name}
            renderItem = {this.renderItem}
            />;

            return (
                <View style={styles.main_container}>
                    <View style={styles.top_container}>
                        <View style={{flex:5}}>
                            <TextInput
                            blurOnSubmit
                            ref={input => { this.textInput = input }}
                            onChangeText={(text) => this._searchTextInputChanged(text)}
                            inlineImageLeft='search_icon'
                            style={[styles.textinput, {backgroundColor: this.state.inputBackgroundColor}]}
                            placeholder='search for an argument....'
                            underlineColorAndroid='black'
                            onBlur={ () => this.onTextInputBlur() }
                            onFocus={ () => this.onTextInputFocus() }
                            placeholderTextColor='#808080'/>
                            </View>
                            <View style={[styles.erase_button_view, {backgroundColor: this.state.inputBackgroundColor}]}>
                            <TouchableOpacity
                            onPress={() => this._wipeSearch()}
                            >
                            <Icon
                            name='eraser'
                            type='font-awesome'
                            size= {18}
                            reverse
                            />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.content_container}>
                        {this.state.searchedText.length > 0 ? <ArgumentList 
                            args={this._searchArguments(this.state.searchedText)}/>
                            : categories}
                    </View>
                    </View>
                    );
        }
    }

    const styles = StyleSheet.create({
        main_container: {
            flex: 1,
            backgroundColor: DEFAULT_BACKGROUND
        },
        top_container:{
            flex: 0,
            width:'100%',
            flexDirection: 'row'
        },
        erase_button_view: {
            flex:1, 
            height: TOP_BAR_HEIGHT
        },
        textinput: {
            height: TOP_BAR_HEIGHT,
            paddingLeft: 20
        },
        content_container:{
            flex: 1
        }
    });



    export default CategoriesMenu
