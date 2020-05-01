import React from 'react';
import Fonts from '../constants/fonts'
import { Text, StyleSheet } from 'react-native';

const BodyText = props => <Text style={styles.body}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontFamily: Fonts.primary
    }
});

export default BodyText;