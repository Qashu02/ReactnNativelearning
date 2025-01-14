import React, { useRef } from 'react';
import { View,StyleSheet,ScrollView } from 'react-native';
import ImageInput from './ImageInput';
function ImageInputList({imageUris=[], onRemoveImage, onAddImage}) {
    const Scroll=useRef()
    return (
        <View>

        <ScrollView horizontal ref={Scroll} onContentSizeChange={()=>Scroll.current.scrollToEnd()} >

  <View style={styles.container}>
    {imageUris.map(uri=> <ImageInput imageUri={uri}
    key={uri}
     onChangeImage={()=>onRemoveImage(uri)}/>)}
    <ImageInput onChangeImage={(uri)=>onAddImage(uri)}/>
     </View>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
flexDirection:'row',
marginRight:10
    }
})
export default ImageInputList;