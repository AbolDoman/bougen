import React, {useContext, useReducer} from 'react'

const StateContext = React.createContext(undefined);
const DispatchContext = React.createContext(undefined);

function netReducer(state,action) {
    switch (action.type) {
        case "SET_NET_NAME" :
            return {...state,name : action.payload};
        case "SET_NET_LNAME" :
            return {...state,lname : action.payload};

        default :
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
function ContextProvider({children}) {
    const [state,dispatch] = useReducer(netReducer,{
        lname : '',
        name : '',

    });
    return(
    <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
            {children}
        </DispatchContext.Provider>
    </StateContext.Provider>
    )
}
function useNetState() {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error("useTweetState must be used within a TweetProvider");
    }
    return context;
}
function useNetDispatch() {
    const context = useContext(DispatchContext);
    if (context === undefined) {
        throw new Error("useTweetDispatch must be used within a TweetProvider");
    }
    return context;
}


export {ContextProvider, useNetState,useNetDispatch
    ,setName,setlName}


function setName(dispatch, name) {
    dispatch({
        type: "SET_NET_NAME",
        payload: name
    });
}
function setlName(dispatch, name) {
    dispatch({
        type: "SET_NET_LNAME",
        payload: name
    });
}
