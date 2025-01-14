import React from 'react';
import { View,StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import AppError from './AppError'
import {useFormikContext} from 'formik'
const {setFieldTouched,handleChange,errors,touched,values}=useFormikContext();
function AppFormImage({name}) {
    const handleAdd=(uri)=>{
        setFieldTouched(name,[...imageUris,uri])
        }
          const  handleRemove= uri=>{
            setFieldTouched(name ,imageUris.filter(imageUri=>imageUri!==uri))
          }
    const imageUris=values[name]
    return (
        <>
 <ImageInputList imageUris={imageUris} onAddImage={handleRemove}/>
 <AppError visible={touched[name]} error={errors[name]}/>
        </>
    );
}
const styles = StyleSheet.create({
    container:{

    }
})
export default AppFormImage;