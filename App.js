import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import music_data from './music_data.json';
import SongCard from './components/SongCard/SongCard';

export default function App() {
  const renderItem=({item})=><SongCard song={item}/>
  const itemSeperator=()=> <View style={styles.seperator}></View>
  

  return (
    <View style={styles.container}>
      <FlatList
      data={music_data}
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
