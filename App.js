import React from 'react';
import {View, Text} from 'react-native';
import MapView,{Polygon, PROVIDER_GOOGLE, Circle} from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';


const App =  () => {
return(
  <View> 

<MapView
style = {{height:'100%'}}
  provider={PROVIDER_GOOGLE}
region = {{
  latitude:24.860966,
  longitude:66.990501,
  latitudeDelta:0.09,
  longitudeDelta:0.03,

}}>
  <Polygon
  coordinates={[
    { latitude:24.860966 , longitude:66.980501 },
    { latitude:24.810966 , longitude:66.970501 },
    { latitude:24.800966 , longitude:66.960501 },
    { latitude:24.790966,  longitude:66.940501 }
    ]}
      fillColor={'rgba(100,200,200,0.6)'}
   />
   <Circle
   center =  {{
    latitude:24.860966 , longitude:66.980501
   }}
   radius={1000}
   fillColor={'rgba(200,300,200,0.5)'}
   />
   
  <Marker
  coordinate=
  {{ latitude:24.860966,
    longitude:66.990501
  }}
  >
    <Callout>
      <Text style={{color:'red',backgroundColor:'yellow'}}>Karachi</Text>
    </Callout>

  </Marker>

</MapView>
</View>


)}



export default App;