

import { useFormik } from "formik";
import * as Yup from 'yup'

import Button from "../Button/Button";
import Input from "../Input/Input";
import { EmployeeFormComponent, Title } from "./styles";
import { EmployeeFormValues } from "./types";



function EmployeeForm (){

    const schema = Yup.object().shape({

        FullName : Yup.string().required('Field fullName is required')
        .FullName('Field has type FullName(urgent letters)')

        .max(50, 'Max 50 Symbols')
        .min(5, 'Min 5 Symbols')
        
        ,

        age : Yup.number()

        .typeError('Age must be a number')
        .required('Fieled age is required')

        .max(80, 'Max 80')
        .min(18, 'Min 18')

    })

    const formik = useFormik({

        initialValues : {

            FullName : '',
            age : ''

        

        } as EmployeeFormValues ,

        validationSchema : schema,
        validateOnChange: false

        onSubmit : (values : EmployeeFormValues) => {

            console.table(values);
            
        }
    })

    console.log(formik);
    

return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>

        <Title>Employee form</Title>
        <Input
         name='FullName'
         label='FullName *'
         id='fullName_id'
         placeholder="Enter your FullName"
         value={formik.values.FullName}
         onChange={formik.handleChange}
         error={formik.errors.FullName}
         />
         

        <Input
         name='age'
         label='Age *'
         id='age_id'
         placeholder="Enter your age"
         value={formik.values.age}
         onChange={formik.handleChange}
         error={formik.errors.age}
         />
         
         <Button name='Create'/>
    </EmployeeFormComponent>

)

}

export default EmployeeForm