import React from 'react';
import Fonts from '../constants/fonts'
import { Text, StyleSheet } from 'react-native';

const TitleText = props => <Text style={{...styles.title, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    title: {
        fontFamily: Fonts.primaryBold
    }
});

export default TitleText;