import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet,View, Image} from 'react-native';


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
    showsUserLocation={true}
     zoomControlEnabled={true}
     zoomEnabled={true}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude:  16.06002610205977,
        longitude:  108.2435661667845,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
 
      <Marker
        coordinate={{
          latitude:  16.015911,
          longitude: 108.203203
        }}
        
        title={"Bee store"}
      
         
       
      />
        
    </MapView>

    
  </View>
);