//import axios module
//axios module used to make the asynchronous calls
import axios from 'axios';

/******************************ALLEMPLOYEES*********************************/
export const getEmployees = ():any => {
    return (dispatch:any)=>{
        return axios.get("http://localhost:8080/employees").then((posRes)=>{
            dispatch(employees(posRes.data));
        },(errRes:any)=>{
            console.log(errRes);
        })
    }
};

export const employees = (records:any)=>{
    //connecting to reducer
    return {type:"ALL_EMPLOYEES", value:records};
};

/*************************************END*************************************/

/**********************************ADDEMPLOYEE********************************/
export const addEmployee = (employee : any):any=>{
    //employee will come from UI (Component)
    return (dispatch:any)=>{
        return axios.post("http://localhost:8080/newemployee",employee).then((posRes)=>{
            posRes.data.newemployee = employee;
            dispatch(addEmployeeDispatch(posRes))
        },(errRes:any)=>{
            console.log(errRes);
        });
    };
};

export const addEmployeeDispatch = (result:any)=>{
    //connecting to reducer
    return {type:"ADD_EMPLOYEE",value:result};
};

/*************************************END*************************************/

/**********************************UPATEEMPLOYEE********************************/
export const updateEmployee = (employee : any):any=>{
    //employee will come from UI (Component)
    return (dispatch:any)=>{
        return axios.put("http://localhost:8080/updateemployee",employee).then((posRes)=>{
            posRes.data.updateemployee = employee;
            dispatch(updateEmployeeDispatch(posRes))
        },(errRes:any)=>{
            console.log(errRes);
        });
    };
};

export const updateEmployeeDispatch = (result:any)=>{
    //connecting to reducer
    return {type:"UPDATE_EMPLOYEE",value:result};
};

/*************************************END*************************************/

/**********************************DELETEEMPLOYEE********************************/
export const deleteEmployee = (employee : any):any=>{
    //employee will come from UI (Component)
    return (dispatch:any)=>{
        return axios.delete("http://localhost:8080/deleteemployee",{data : employee}).then((posRes)=>{
            posRes.data.deleteemployee = employee;
            dispatch(deleteEmployeeDispatch(posRes))
        },(errRes:any)=>{
            console.log(errRes);
        });
    };
};

export const deleteEmployeeDispatch = (result:any)=>{
    //connecting to reducer
    return {type:"DELETE_EMPLOYEE",value:result};
};

/*************************************END*************************************/
