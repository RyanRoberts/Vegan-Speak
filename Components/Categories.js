import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'

class Categories extends React.Component {
    render() {
        return (
            <Card
            title='HELLO WORLD'>
            <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
});

export default Categories
