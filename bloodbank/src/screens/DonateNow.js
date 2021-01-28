import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

const DonateNow = ({navigation, route})=>{
    const {name, group, receiverName, receiverGroup} = route.params;
    console.log(name, group, receiverName, receiverGroup)


    return (
        <View style={styles.container}>
            <Text style={styles.text}>DONATE NOW</Text>
            <Text>Reciver Name : </Text>
            <TextInput editable={false} value={receiverName} style={styles.inputs}></TextInput>
            <Text>Reciver Blood Group : </Text>
            <TextInput editable={false} value={receiverGroup} style={styles.inputs}></TextInput>
            <Text>Your Name : </Text>
            <TextInput editable={false} value={name} style={styles.inputs}></TextInput>
            <Text>Your Blood Group : </Text>
            <TextInput editable={false} value={group} style={styles.inputs}></TextInput>
            <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={() => navigation.navigate('DonateBlood')} >
                <Text style={styles.btnText}>DONATE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  inputs:{
      width:'90%',
      borderColor:"gray",
      borderWidth:1,
      padding:10,
      marginBottom:10
  },
  text:{
      marginBottom:20,
      fontSize:25,
      fontWeight:"bold"
  },
  btn:{
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight:"bold",
        backgroundColor:"#F94A73",
        color:"white",
        width:"40%",
        paddingVertical:12,
        marginTop:10,
        borderRadius:20
  },
  btnText:{
      fontSize:16,
      fontWeight:"bold",
      color:"white"
  }

});

export default DonateNow; 