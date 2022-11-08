import * as React from 'react';
import { View, ImageBackground, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Detail from './Detail';

const Banner = ({ navigation }) => {
  return (
    <View>
      <View style={styles.banner}>
        <ImageBackground source={require("./image/dp.jpg")} style={styles.image}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>Save extra on every order</Text>
            
          </View>
          {DATA.map((ele, index) => {
            return (
              <TouchableOpacity onPress={() => {
                navigation.navigate('Detail', { user: ele })
              }}
                key={index} style={styles.item}>
                <Image style={styles.picture} source={ele.img} />
                <Text style={styles.title}>{ele.title}</Text>
              </TouchableOpacity>
            );
          })}
        </ImageBackground>
      </View>

    </View>
  );
}
export default Banner;

const styles = StyleSheet.create({

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
  txtGroup: {
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
    fontFamily: 'Overpass'
  },
 
});


