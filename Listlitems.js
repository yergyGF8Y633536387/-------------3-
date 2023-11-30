Vimport React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, Text} from 'react-native';

export default function Header({ el }) {
    return (
        <TouchableHighlight>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableHighlight>
    );
    }
   
const styles = StyleSheet.create({
  
});
