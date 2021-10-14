import React, {useState} from 'react';
import {View, Text,StyleSheet, Button , Image} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


const App =  () => {


  const [image,setImage] = useState(null);
  const handleClick = () => {
    const options = {
      title:'Select image'
    };
    
  launchImageLibrary(options,(res)=>{
    if(res.didCancel)
    {
      return console.log("Cancel")
    }
    console.log(res.assets[0].uri);
    setImage(res.assets[0].uri);
  })
  };
  
return(
<View style={styles.main}>
 {
   image ? <Image style={{width:100,height:100}} source = {{uri :image}} /> :  <Button title="Gallery" onPress={handleClick} />
 }


</View>


)}
const styles = StyleSheet.create({
  main : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  txt : {
    color:'black'
  }
})



export default App;