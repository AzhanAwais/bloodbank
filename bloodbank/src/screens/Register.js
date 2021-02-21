import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import firebase from 'firebase';

const Register = ({ navigation, route })=>{
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState();
    const {data} =  route.params;

    const isUserRegistered = (name)=>{
        bool = false;
        for(let i=0;i<data.length;i++){
            if(data[i].name==name){
                bool = true;
                return bool;
            }
            else{
                bool = false;
            }
        }
        return bool;
    }

    const insertUser = ()=>{
        let found = isUserRegistered(name);
        if(found==true){
            console.log("User already registered")
        }
        else{
            firebase.database().ref('users').push({
                name,
                group,
                password
            })
            navigation.navigate('Login',{data})
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>SIGN UP</Text>
            <TextInput value={name} onChangeText={(e)=>setName(e)} style={styles.inputs} placeholder="Enter your name"></TextInput>
            <TextInput value={group} onChangeText={(e)=>setGroup(e)} style={styles.inputs} placeholder="Enter your Blood group"></TextInput>
            <TextInput value={password} onChangeText={(e)=>setPassword(e)} style={styles.inputs} secureTextEntry={true} placeholder="Enter your password"></TextInput>
            <Button style={styles.btn} title="REGISTER" onPress={() => insertUser()} />
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
      fontSize:14,
      fontWeight:"bold",
      paddingVertical:12,
      paddingHorizontal:25,
      backgroundColor:"#F94A73",
      color:"white",
      width:"50%",
      marginTop:10
  }

});

export default Register; 
