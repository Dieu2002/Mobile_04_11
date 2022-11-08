import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.logo}
          source={require('./image/dp.jpg')}
        />
        <View style={styles.title}>
          <Text style={styles.title_main}>Diệu</Text>
          <Text style={styles.title_main}>Hoa hồng nào chả có gai</Text>
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.item}>
          <View style={styles.iconLeft}>
          <Image
              source={require('./image/pv.png')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>My Account</Text>
          </View>
        </View>
        <View style={styles.item}>
        <View style={styles.iconLeft}>
          <Image
              source={require('./image/ab.png')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>My Album</Text>
          </View>
        
        </View>
        <View style={styles.item}>
        <View style={styles.iconLeft}>
          <Image
              source={require('./image/strore.jpg')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>My Store</Text>
          </View>
         
        </View>
        <View style={styles.item}>
        <View style={styles.iconLeft}>
          <Image
              source={require('./image/vc1.jpg')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Kho Voucher</Text>
          </View>
         
        </View>
        <View style={styles.item}>
        <View style={styles.iconLeft}>
          <Image
              source={require('./image/DL.png')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Bee Strore Xu</Text>
          </View>
         
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    top: 30,
  },
  logo: {
    width: 95,
    height: 95,
    left: 23,
    borderRadius: 63,
    borderWidth: 4,
  },
  title: {
    marginLeft: 50,
    margin: 20,
  },
  profile: {
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  iconLeft: {
    flex: 1,
  },
  infoContent: {
    flex: 1,
  },
  items:{
    marginTop: 30,
  }
});

export default Profile;