import React,{ useState } from "react";

export default function useForm(initialFValues:any,validateOnChange:boolean=false,validate:any){
    const [values,setValues] = useState(initialFValues);
    const [errors,setErrors] = useState({fullName:"",id:"",email:"",mobile:"",city:" ",departmentId:""});

    const handleInputChange = (event:any):any=>{
        const {name,value} = event.target;
        setValues({
            ...values,
            [name] : value
        });
        if(validateOnChange){
            validate({[name]:value});
        };
    };

    const resetForm:any = (event:any):any=>{
        setValues(initialFValues);
        setErrors({fullName:"",id:"",email:"",mobile:"",city:"",departmentId:""});
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
};