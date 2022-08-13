import axios from 'axios'
export function getCountries(){
    return function (dispatch){
        axios.get("http://localhost:3001/countries").then(res=>{
            return dispatch({
                type:"GET_C", payload:res.data
            })
        })
    }
}
export function getActivities(){
    return function (dispatch){
        axios.get("http://localhost:3001/activity").then(res=>{
            return dispatch({
                type:"GET_ACT", payload:res.data
            })
        })
    }
}
export function getDetail(id){
    return async function (dispatch){
        let json= await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type:"GET_DETAIL", payload:json.data
              })

            }
}
export function postAct(payload){
    return function(dispatch){
        axios.post("http://localhost:3001/activity", payload).then(res=>{
            return dispatch({
                type:"POST_ACT", payload:res.data
            })
        });
    }
}

export function barSearch(name){
    return async function(dispatch){
        let json= await axios.get(`http://localhost:3001/countries?name=${name}`);
        return dispatch({
            type: "BAR_SEARCH", payload:json.data
        })
    }
    
} 
export let filterAct=(payload)=>{
    return async (dispatch)=>{
        try{
            return dispatch({
                type: "FILTER_ACTIVITY", payload:payload
            })

        }
        catch (err){
            console.log(err, "no anda fiter activity, actions")

        }
    }
}
export function orderReg(payload){
    return function (dispatch){
        dispatch({
            type:"FILTER_REG", payload:payload})
    }
}
export function orderName(payload){
    return async(dispatch)=>{
        try {
            dispatch({
                type: "SORT_NAME",
                payload:payload
            })
            
        } catch (error) {
            console.log(error,"error order name")
            
        }
    }
}
export function orderPop(payload){
    return async (dispatch)=>{
        try {
            dispatch({
                type: "SORT_POP",
                payload:payload
            })
            
        } catch (error) {
            console.log (error, "error order population")
            
        }
    }
}
