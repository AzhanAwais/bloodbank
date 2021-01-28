import React from 'react';
import icons from '../../assets/icons.png';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const DonarOrAcceptor = ({route, navigation})=>{
  const {name, group, sentAllData} = route.params;

  return (
        <View style={styles.container}>
            <Image style={styles.logo} source={icons} />
            <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('FindDonar',{
              name,
              group,
              sentAllData
            })}>
                <Text style={styles.text}>FIND A DONAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('DonateBlood',{
              name,
              group,
              sentAllData
            })}>
                <Text style={styles.text}>DONATE BLOOD</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
      width:'100%',
      height:100,
      resizeMode:'contain',
      marginBottom:20
  },
  btnLogin:{
    backgroundColor:"gray",
    paddingVertical:15,
    paddingHorizontal:20,
    width:"50%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },
  btnRegister:{
    backgroundColor:"#F94A73",
    paddingVertical:15,
    paddingHorizontal:20,
    width:"50%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
      color:"white",
      fontWeight:"bold"
  }

});

export default DonarOrAcceptor; 