import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import AppError from './AppError';
function AppFormField({name,...otherprops}) {
    const {setFieldTouched,handleChange,errors,touched}=useFormikContext();
    return (<>
        <AppTextInput
        {...otherprops}
onBlur={()=>setFieldTouched(name)}
onChangeText={handleChange(name)}
/>
       <AppError visible={touched[name]} error={errors[name]}/>
    </>
    );
}

export default AppFormField;