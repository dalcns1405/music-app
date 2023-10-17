import React from "react";
import styles from './SearchBar.styles';
import { TextInput, View } from "react-native";
//fonksiyon property olarak eklendi.

const SearchBar =(props)=>{
    return(
        <View style={styles.container}>
        <TextInput 
        placeholder="Ara.."
        onChangeText={props.onSearch}


        />
        </View>

    )
}
export default SearchBar;
