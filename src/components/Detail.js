import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import { useEffect } from 'react';
const Detail = ({route,navigator}) => {

       const user = route.params.user;
       console.log("kdfjkdfjkdjfkd",user);
    
    
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '900', fontSize: 22, color: '#090F47'}}>
        Sugar Free Gold Low Calories{' '}
      </Text>
      <Text style={styles.captionTitle}> {user.title}</Text>
      <View style={styles.logo}>
        <Image
          style={styles.slideImage}
          source={user.img}
        />
      </View>
      <View style={styles.introDetail}>
        <View>
          <Text style={{fontWeight: '900', fontSize: 22, color: '#090F47'}}>
            $56
          </Text>
          <Text style={styles.addTitle}>Etiam mollis</Text>
        </View>
        <View>
          <Text style={styles.addCart}>Add to cart</Text>
        </View>
      </View>
      <View style={styles.productPackage}>
        <Text style={styles.titlePackage}>Package size</Text>
        <View style={styles.pricingModel}>
          <View style={styles.priceIndi}>
            <Text style={styles.priceFi}>$106</Text>
            <Text style={styles.titleFi}>50 pellets</Text>
          </View>
          <View style={styles.priceAva}>
            <Text style={styles.price}>$166</Text>
            <Text style={styles.title}>110 pellets</Text>
          </View>
          <View style={styles.priceAva}>
            <Text style={styles.price}>$252</Text>
            <Text style={styles.title}>300 pellets</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '300',
  },
  captionTitle: {
    color: '#090F47',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  slideImage: {},

  introDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCart: {
    marginLeft: 200,
    color: '#006AFF',
    fontSize: 22,
  },
  addTitle: {
    color: '#090F47',
  },
  productPackage: {
    marginTop: 30,
  },
  pricingModel: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  price: {
    fontSize: 19,
    fontWeight: '900',
    color: '#090F47',
  },
  title: {
    fontsize: 12,
  },
  priceFi:{
    fontSize: 19,
    fontWeight: '900',
    color: '#FFA41B',
  },
  titlePackage: {
    color: '#090F47',
    fontSize: 16,
  },
  titleFi:{
    fontsize: 12,
    color:'#FFA41B',
  },
  priceAva: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  priceIndi:{
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    borderWidth: 2,
    paddingVertical: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default Detail;