import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import music_data from './music_data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';

export default function App() {

  const [list, setList] = useState(music_data)

  const renderItem=({item})=><SongCard song={item}/>
  const itemSeperator=()=> <View style={styles.seperator}></View>

  const handleSearch=(text)=>{ 
    const filteredList= music_data.filter(song=>{
      return song.title.toLowerCase().indexOf(text.toLowerCase()) > -1 ;

    })
    setList(filteredList);

  }
  

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item=>item.id}
      ItemSeparatorComponent={itemSeperator}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  seperator:{
    borderWidth:1,
    borderColor:"#ececec"
  }
});
