import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';

const MainButton = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.8}>
            <View style={{...styles.btn, ...props.style}}>
                <Text style={{ ...defaultStyles.bodyText, ...styles.btnText }}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 27,
        borderRadius: 25
    },
    btnText: {
        color: "white",
        textAlign: 'center'
    }

});

export default MainButton;