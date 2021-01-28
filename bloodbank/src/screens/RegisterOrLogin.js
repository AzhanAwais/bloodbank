import React,{useState, useEffect} from 'react';
import logo from '../../assets/logo.png';
import {View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

const RegisterOrLogin = ({navigation})=>{

  const [data, setData] = useState();
    useEffect(() => {
      const arr = []
      firebase.database().ref('users').on("value",snapshot=>{
          snapshot.forEach((snap)=>{
          arr.push(snap.val());
        })
        setData(arr);
      })  
    },[])

  return (
      <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
          <TouchableOpacity activeOpacity={0.7} style={styles.btnLogin} onPress={() => navigation.navigate('Login',{data})}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity> 

          <TouchableOpacity activeOpacity={0.7} style={styles.btnRegister} onPress={() => navigation.navigate('Register',{data})}>
            <Text style={styles.text}>Register</Text>
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

export default RegisterOrLogin; 