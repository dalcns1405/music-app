import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        padding:10,

    },
    image:{
        width:100,
        height:100,
        borderRadius:50,

    },
    inner_container:{
        padding:8,
        flex:1,
        justifyContent:"center"

    },
    title:{
        fontSize:25,
        fontWeight:"bold",
      

    },
    song_info:{
        flexDirection:"row",
        alignItems:"center",
       

    },
    artist:{
        fontSize:15,


    },
    year:{
        fontWeight:"bold",
        color:"gray",
        marginLeft: 10,
    
    },
    soldOut:{
        borderWidth:1,
        color:"red",
        borderColor:"red",
        borderRadius:5,
        fontSize:15

    },
    info_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadios:8
    }

})