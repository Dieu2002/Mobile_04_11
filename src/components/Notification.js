import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
const Notify = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Notify}>
        <Image
          style={styles.logo}
          source={require('./image/be.png')}
        />
        <View style={styles.title}>
          <Text style={styles.title_main}>Welcome to the Bee Store  </Text>
          <Text style={styles.title_main}>Thông tin sản phẩm </Text>
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.item}>
          <View style={styles.iconLeft}>
          <Image
              source={require('./image/notificaion.png')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Đơn hàng đã xuất kho</Text>
          </View>
        </View>
        <View style={styles.item}>
        <View style={styles.iconLeft}>
          <Image
              source={require('./image/notificaion.png')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Người gửi đang chuẩn bị hàng</Text>
          </View>
        
        </View>
        <View style={styles.item}>
        <View style={styles.iconLeft}>
          <Image
              source={require('./image/notificaion.png')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>My đã thêm áo khoác bomber vào giỏ hàng của cô ấy.</Text>
          </View>
         
        </View>
        <View style={styles.item}>
        <View style={styles.iconLeft}>
          <Image
              source={require('./image/notificaion.png')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Đơn hàng đã đến kho 36-DNG Son Tra 02 LM Hub</Text>
          </View>
         
        </View>
        <View style={styles.item}>
        <View style={styles.iconLeft}>
          <Image
              source={require('./image/notificaion.png')}
              style={{width: 26, height: 30, }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Lấy hàng thành công</Text>
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
  Notify: {
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  iconLeft: {
    margin:10,
  },
  infoContent: {
    flex: 1,
  },
  items:{
    marginTop: 30,
  }
});

export default Notify;