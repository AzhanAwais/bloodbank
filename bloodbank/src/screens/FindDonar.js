import React from 'react';
import {View, Text,Image, StyleSheet, ScrollView} from 'react-native';
import firebase from 'firebase';
import phone from '../../assets/phone.png';

const FindDonar =  ({route, navigation})=>{
    const {name, group, sentAllData} = route.params;
    const {data} = sentAllData;
    const arr = [];

    const setBloodGroup = (group)=>{
        switch(group) {
            case 'A+':
                for(let i=0;i<data.length;i++){
                    if((data[i].group=='A+' || data[i].group=='A-'|| data[i].group=='O+'|| data[i].group=='O-') && data[i].name !=name){
                        let name = data[i].name;
                        let group = data[i].group;
                        arr.push({
                            name,group
                        })
                    }
                }
                break;
            case 'O+':
                for(let i=0;i<data.length;i++){
                    if((data[i].group=='O+'|| data[i].group=='O-') && data[i].name !=name){
                        let name = data[i].name;
                        let group = data[i].group;
                        arr.push({
                            name,group
                        })
                    }
                }
                break;
            case 'B+':
                for(let i=0;i<data.length;i++){
                    if((data[i].group=='B+' || data[i].group=='B-'|| data[i].group=='O+'|| data[i].group=='O-') && data[i].name !=name){
                        let name = data[i].name;
                        let group = data[i].group;
                        arr.push({
                            name,group
                        })
                    }
                }
                break;
            case 'AB+':
                for(let i=0;i<data.length;i++){
                    if((data[i].group=='A+' || data[i].group=='O+' || data[i].group=='O-' || data[i].group=='B+'|| data[i].group=='AB+'|| data[i].group=='A-' || data[i].group=='B-' || data[i].group=='AB-') && data[i].name !=name){
                        let name = data[i].name;
                        let group = data[i].group;
                        arr.push({
                            name,group
                        })
                    }
                }
                break;
            case 'A-':
                for(let i=0;i<data.length;i++){
                    if((data[i].group=='A-' || data[i].group=='O-') && data[i].name !=name){
                        let name = data[i].name;
                        let group = data[i].group;
                        arr.push({
                            name,group
                        })
                    }
                }
                break;
            case 'O-':
                for(let i=0;i<data.length;i++){
                    if((data[i].group=='O-') && data[i].name !=name){
                        let name = data[i].name;
                        let group = data[i].group;
                        arr.push({
                            name,group
                        })
                    }
                }
                break;
            case 'B-':
                for(let i=0;i<data.length;i++){
                    if((data[i].group=='B-'|| data[i].group=='O-') && data[i].name !=name){
                        let name = data[i].name;
                        let group = data[i].group;
                        arr.push({
                            name,group
                        })
                    }
                }
                break;
            case 'AB-':
                for(let i=0;i<data.length;i++){
                    if((data[i].group=='AB-' || data[i].group=='B-'|| data[i].group=='A-'|| data[i].group=='O-') && data[i].name !=name){
                        let name = data[i].name;
                        let group = data[i].group;
                        arr.push({
                            name,group
                        })
                    }
                }
                break;
          }
    }

    setBloodGroup(group)
    return (
        <ScrollView>
            {arr.map((v,i)=>{
            return(
                <View key={i} style={styles.card}>
                    <Text style={styles.textGroup}>{v.group}</Text>
                    <Text style={styles.textName}>{v.name}</Text>
                    <Image style={styles.phone} source={phone} />
                </View>
            )  
        })}
        </ScrollView>
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
    card:{
        width:"100%",
        height:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        display:'flex',
        flexDirection:'row',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textGroup:{
        backgroundColor:"#F94A73",
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:4,
        textAlign:'center',
        width: 100,
        height:'100%',
        lineHeight:100,
        position:'absolute',
        left:0,
    },
    phone:{
        position:'absolute',
        right:15,
        marginHorizontal:10
    },  
    textName:{
        marginLeft:20,
        width:150,
        fontSize:18,
    }
})



export default FindDonar;