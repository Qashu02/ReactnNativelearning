import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
  AppFormImage,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryItemComponent from "../components/CategoryItemComponent";
import useLocation from "../hooks/useLocation";


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1,"Please Select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    name: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    name: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    name: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    name: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    name: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    name: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    name: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    name: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    name: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
 const location=useLocation()
  return (
<Screen style={styles.container}>

  <Form
    initialValues={{
      title: "",
      price: "",
      description: "",
      category: null,
      images: [],
    }}
    onSubmit={(values) => console.log(location)}
    validationSchema={validationSchema}
  >
  <AppFormImage name='images'/>
    <FormField maxLength={255} name="title" placeholder="Title" />
    <FormField
      keyboardType="numeric"
      maxLength={8}
      name="price"
      placeholder="Price"
      width={120}
    />
    <Picker items={categories} name="category" placeholder="Category"  noOfColoumns={3} 
    PickerItemComponent={CategoryItemComponent
    } />
    <FormField
      maxLength={255}
      multiline
      name="description"
      numberOfLines={3}
      placeholder="Description"
    />
    <SubmitButton title="Post" />
  </Form>

</Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
