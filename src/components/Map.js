import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet,View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default () => (
  <View style={styles.container}>
    <MapView
     zoomControlEnabled={true}
     zoomEnabled={true}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude:  16.015911,
        longitude: 108.203203,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >

      <Marker
        coordinate={{
          latitude:  16.015911,
          longitude: 108.203203
        }}
        title={"Bee store shop"}
        description={"256 Ông Ích Đ., Khuê Trung, Cẩm Lệ, Đà Nẵng 550000, Vietnam"}
      />
    </MapView>

    
  </View>
);