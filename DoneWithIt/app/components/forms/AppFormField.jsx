import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import AppError from './AppError';
function AppFormField({name,width,...otherprops}) {
    const {setFieldTouched,handleChange,errors,touched}=useFormikContext();
    return (<>
        <AppTextInput
        onBlur={()=>setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherprops}
/>
       <AppError visible={touched[name]} error={errors[name]}/>
    </>
    );
}

export default AppFormField;