import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./SongCard.style"

const SongCard = ({ song }) => {
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{uri: song.imageUrl}} />
            <View style={styles.inner_container} >

                <Text style={styles.title}>{song.title}</Text>
                <View style ={styles.info_container}>
                    <View style={styles.song_info} >
                        <Text style={styles.artist}>{song.artist} </Text>
                        <Text style={styles.year}>{song.year} </Text>
                    </View>
                    <View>
                       {song.isSoldOut && <Text style={styles.soldOut}> Tükendi </Text>} 
                    </View>
                    
                    
                </View>

            </View>




        </View>


    )
}
export default SongCard;