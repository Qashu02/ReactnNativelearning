import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./AppError";

function AppFormPicker({ items, name, placeholder , noOfColoumns, PickerItemComponent}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        noOfColoumns={noOfColoumns}
        selectItem={values[name]} // Pass the selected value
        onSelectItem={(item) => setFieldValue(name, item)} // Update Formik value
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
