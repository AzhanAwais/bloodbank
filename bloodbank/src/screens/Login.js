import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

const Login = ({navigation, route})=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState();
    const [arrData, setArr] = useState();
    const {data} = route.params;
    const sentAllData = route.params;

    useEffect(() => {
      const arr = []
      firebase.database().ref('users').on("value",snapshot=>{
          snapshot.forEach((snap)=>{
          arr.push(snap.val());
        })
        setArr(arr);
      })  
    },[])

    function isUserExist(name,password){
        let obj = {};
        for(let i=0;i<arrData.length;i++){
            if(arrData[i].name==name && arrData[i].password==password){
                var {group, name} = arrData[i];
                obj = {
                    group,
                    name,
                    bool : true 
                }
                return obj;
            }else{
                obj = {
                    group,
                    name,
                    bool : false 
                }
            }
            return obj;
        }
    }

    function userLogin(){
       let obj = isUserExist(name,password) ;
       if(obj.bool==false){
            console.log("Invalid username or password")
       }
       else{
            let name = obj.name;
            let group = obj.group;
            navigation.navigate('DonarOrAcceptor',{name,group,sentAllData})
       }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>LOGIN</Text>
            <TextInput value={name} onChangeText={(e)=>setName(e)} style={styles.inputs} placeholder="Enter your name"></TextInput>
            <TextInput value={password} onChangeText={(e)=>setPassword(e)} style={styles.inputs} secureTextEntry={true} placeholder="Enter your password"></TextInput>
            <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={()=>userLogin()}>
                <Text style={styles.btnText}>LOGIN</Text>
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

export default Login; 