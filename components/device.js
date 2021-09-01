import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,FlatList,ActivityIndicator } from 'react-native';
import { connect } from "react-redux"
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {addVeg} from './redux/index'




function agwaFarm({ navigation}) {
  
  
  const [data,setData] = useState([])
  const [isLoading, setLoading] = useState(false);
 // const url = `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${data.image}@3x.jpg`



const geDeviceItems = async () =>{

  try {
    const response = await fetch('http://192.168.1.112:5000/api/plants');
    const json = await response.json();
    setData(json);
    console.log(data)
  } catch (error) {
    console.error(error);
  }finally {
    setLoading(false);
  }

}

  useEffect(() => {

    geDeviceItems()

  }, []);




  return (

    <View >
      <View style={{
        paddingHorizontal: 20,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />

        <View style={{ marginRight: 100 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>Agwa device</Text>
        </View>

        
      </View>


      

      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <View style={style.card}>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={{ uri: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/pac_choi_mei_qing_choi@3x.jpg' }}
              style={{ flex: 1, width: 100, height: 100 }}
            />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            bal
          </Text>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <MaterialCommunityIcons name="delete-forever" size={30} color="red" />
          </View>

         
        </View>
        
      </TouchableOpacity>

    </View>
  );
}

const mapStateToProps = state => {
 
  return{
    quantity: state.quantity
  }
}

const mapDispatchToProps = dispatch  =>{

  return{

    addVeg : ()=> dispatch(addVeg())
  }
}


const style = StyleSheet.create({

  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    marginRight: 150
  },
  card: {
    height: 200,
    backgroundColor: 'white',
    width: 200,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    borderWidth: 5,
    borderColor: '#F1F1F1',
    marginTop: 50,

  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(agwaFarm)