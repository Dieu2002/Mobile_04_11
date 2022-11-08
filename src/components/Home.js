import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,FlatList, ImageBackground, ScrollView, TouchableOpacity} from "react-native";


export default function Home({navigation}) {
  const [products, setProducts] = useState([
    {
      id:0,
      name:'Sugar Substitute',
      img:require('./image/01.jpg'),
      price:''
    },
    {
      id:1,
      name:'Juices & Vinegars',
      img:require('./image/03.jpg'),
      price:''
    },
    {
      id:2,
      name:'Vitamins Medicines',
      img: require('./image/08.jpeg'),
      price:''
    },
    {
      id:3,
      name:'Vitamins Medicines',
      img:require('./image/t1.jpg'),
      price:''
    }
  ]);
  const [listProducts, setListProducts] = useState([
    {
      id:0,
      name:'Áo hoodie nữ',
      img: require('./image/hdd1.jpg'),
      price:'112'
    },
    {
      id:1,
      name:'Quần jean nữ ống rộng ',
      img: require('./image/01.jpg'),
      price:'150'
    },
    {
      id:2,
      name:'Quần jean nữ ống đứng',
      img: require('./image/03.jpg'),
      price:'112'
    },
    {
      id:3,
      name:'áo khoác',
      img: require('./image/áo1.jpeg'),
      price:'150'
    }
  ]);
  return(
    <View style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground source={require("./image/be.png" )}  style={styles.image}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>Save extra on every order</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.product}>
        <Text style={styles.title}>
         Feature Products
        </Text>
        <ScrollView horizontal={true}>
        <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return <TouchableOpacity
          onPress={() => navigation.navigate('Detail',{item:item})}

          style={{
            width: 110,
            height: 162,
            backgroundColor: '#F5F7FA',
            borderRadius: 10,
            marginRight: 16
          }}
          
          >
            <Image
              style={{
                width: 110,
                height: 100,
              }}
              source={item.img}/>
            <Text
              style={{
                width: 30,
                fontSize: 13,
                fontWeight: '400',
                color: '#090F47',
                lineHeight: 18
              }}>{item.name}</Text>
          </TouchableOpacity>
        }}>
        </FlatList>
        </ScrollView>
      </View>
      <View style={styles.allProducts}>
        <Text style={styles.titlePro}>All Products</Text>
        <ScrollView>
          <FlatList
          numColumns={2}
          data={listProducts}
          keyExtractor={item => item.name}
          renderItem = {({item}) => {
            return <TouchableOpacity style={styles.bgListProducts}
            onPress={() => navigation.navigate('Detail',{item:item})}
            >
              <View style={{
                width: 110,
                height: 158,
                backgroundColor: '#F5F7FA'
              }}>
                <Image
                style={{
                  width: 100,
                  height: 90,
                }}
                source={item.img}
                />
              </View>
              <Text style={styles.proName}>{item.name}</Text>
              <Text style={styles.proPrice}>${item.price}</Text>
            </TouchableOpacity>
          }}>
          </FlatList>
        </ScrollView>
      </View>
    </View>
  );
}
const styles =  StyleSheet.create({
  container:{
    flex:1,
    paddingLeft: 25,
    paddingRight: 25
  },
  banner: {
    position: 'relative',
    marginTop: 45,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  txtGroup:{
    position: 'absolute',
  },
  text: {
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 6,
    width: 119,
    height: 42,
    fontSize: 18,
    color: '#1987FB',
    fontWeight: '700',
    lineHeight: 21,
    fontFamily:'Overpass'
  },
  txt:{
    width: 124,
    height: 32,
    marginBottom: 32,
    marginLeft: 23,
    fontSize: 12,
    fontWeight: '300',
    fontFamily:'Overpass',
    color: 'rgba(9, 15, 71, 0.65)',
  },
  product:{
    flex:1,
  },
  title:{
    marginTop: 19,
    marginBottom: 16,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  allProducts:{
    flex:2,
  },
  titlePro:{
    marginTop: 15,
    marginBottom: 24,
    color: '#090F47',
    fontSize:16,
    fontWeight: '600',
    lineHeight: 20
  },
  bgListProducts:{
    flex:1,
    flexDirection: 'column',
    width: 110,
    height: 158,
    backgroundColor: '#FFFFFF',
    marginRight: 14,
    marginBottom: 16
  },
  proName:{
    marginLeft: 16,
    // marginBottom: 8,
    width: 100,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  proPrice:{
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#090F47',
  },
  img:{
    margin: 20
  }
});