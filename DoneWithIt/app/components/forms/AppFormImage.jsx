import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInputList from '../ImageInputList'
import AppError from "./AppError";
import { useFormikContext } from "formik";

function AppFormImage({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <View style={styles.container}>
      <ImageInputList 
        imageUris={imageUris} 
        onAddImage={handleAdd} 
        onRemoveImage={handleRemove} 
      />
      <AppError visible={touched[name]} error={errors[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AppFormImage;
