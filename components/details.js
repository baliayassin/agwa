import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NumericInput from 'react-native-numeric-input'
import { connect } from "react-redux"
import { addVeg } from './redux/index'


function Details({ navigation, route }) {

    const [quantity, setQuantity] = useState()
    const plant = route.params;
    //console.log(plant.name)
    const url = `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plant.imageId}@3x.jpg`
    const [cartQuntity, setCartQuantity] = useState(false)

const insert = (plant) =>{

  console.log(plant.name)

    fetch('http://192.168.1.112:5000/api/plants/insert', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: plant.name,
    image: url
  })

});

}

 
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={style.header}>
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
                <Icon name="shopping-cart" size={28} color='gray' />

            </View>

            {quantity > 0 && cartQuntity == true ?

                <View style={{ width: 20, height: 20, backgroundColor:'red', opacity: 1, borderRadius: 10, position: 'absolute', top: 35, left: 360 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', zIndex: 1 }}>{quantity}</Text>
                    </View>

                </View> : null
            }
            <View style={style.imageContainer}>
                <Image source={{ uri: url }} style={{ width: 100, height: 100, flex: 1, marginBottom: -50 }} />
            </View>
            <ScrollView>
                <View style={style.detailsContainer}>
                    <View style={{
                        margin: 20, flexDirection: 'row', alignItems: 'flex-end'
                    }}>

                        <View style={{
                            marginLeft: 20, marginTop: 20, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'
                        }}>

                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{plant.name}</Text>

                        </View>

                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Description</Text>
                        <Text style={{ color: 'gray', fontSize: 16, lineHeight: 22, marginTop: 20 }}>{plant.description}</Text>
                        <View style={{
                            marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'
                        }}>

                            <NumericInput
                                totalWidth={100}
                                totalHeight={50}
                                iconSize={20}
                                step={1}
                                minValue={0}
                                valueType='real'
                                rounded
                                textColor='gray'
                                iconStyle={{ color: 'green' }}
                                rightButtonBackgroundColor='#f9f9f9'
                                leftButtonBackgroundColor='#f9f9f9'
                                onChange={(value) => {
                                    // setCartItem(value)
                                    setQuantity(value)
                                    setCartQuantity(true)
                                    insert(plant)
                                }}
                            />

                            <View style={style.buyBtn}>
                                <TouchableOpacity onPress={(plant) =>{ 
                                     
                                    navigation.navigate("Home", { plant, quantity })}} >
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

const mapStateToProps = state => {

    return {
        quantity: state.quantity
    }
}

const mapDispatchToProps = dispatch => {

    //console.log('')
    return {

        addVeg: () => dispatch(addVeg(quantity))
    }
}

const style = StyleSheet.create({

    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 300


    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: '#F1F1F1',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 100,
        paddingTop: 30,

    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: '#000',
        marginBottom: 5,
        marginRight: 3,
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
    },
    borderBtnText: { fontWeight: 'bold', fontSize: 28 },
    buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: '#00B761',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    priceTag: {
        backgroundColor: '#00B761',
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
})


export default (connect(mapStateToProps, mapDispatchToProps)(Details))

/*               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>-</Text>
                            </View>
                            <Text style={{marginHorizontal:10,fontSize:20,fontWeight:'bold'}}>1</Text>

                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>+</Text>
                            </View>

                        </View>*/