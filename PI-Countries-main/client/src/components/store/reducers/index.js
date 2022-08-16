// [GET_C ; GET_ACT;GET_DETAIL;POST_ACT;BAR_SEARCH;FILTER_ACTIVITY;FILTER_REG;SORT_POP;SORT_NAME]

const initialSTate ={
    countries:[],
    activity:[],
    filterCountries:[],
    detail:{}
}

function rootReducer(state=initialSTate,action){
    switch(action.type){
        case "GET_C":return{
            ...state,
            countries: action.payload, filterCountries:action.payload
        }
        case"GET_DETAIL":return{
            ...state,
            detail: action.payload
        }
        default:return{
            ...state
        }
        case "BAR_SEARCH":return{
            ...state,
            countries: action.payload
        }
        case "GET_ACT":return{
            ...state,
            activity:action.payload
        }
        case "POST_ACT":return{
            ...state,
            activity:action.payload
        }
        case "SORT_NAME":
            const todos=[...state.countries]
            let Names=action.payload==="Ascendent"? state.countries.slice().sort(
                function (a,b){
                    if(a.name>b.name){
                        return 1;
                    }if(b.name>a.name){
                        return -1
                    }
                    return 0;
                }
            ):action.payload==="Decrescent"? state.countries.slice().sort(
                function (a,b){
                    if(a.name>b.name){
                        return -1
                    }
                    if(b.name>a.name){
                        return 1
                    }
                    return 0;
                }
            ): todos 
            console.log(Names);
            return{
                ...state,
                countries: Names
            }

        
    }
}