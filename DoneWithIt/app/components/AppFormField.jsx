import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from './AppTextInput';
import AppError from './AppError';
function AppFormField({label,...otherprops}) {
    const {setFieldTouched,handleChange,errors,touched}=useFormikContext();
    return (<>
        <AppTextInput
        {...otherprops}
onBlur={()=>setFieldTouched(label)}
onChangeText={handleChange(label)}
/>
       <AppError visible={touched[label]} error={errors[label]}/>
    </>
    );
}

export default AppFormField;