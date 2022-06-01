import React from 'react';
import {setlName, setName, useNetDispatch, useNetState} from "./context2/NetContext";
import {getStudent} from "./api/api_tweets";

const Admin = () => {
    const dispatch = useNetDispatch();
    const {name} = useNetState();
    const {lname} = useNetState();
    const ChangeHandler = (e) =>{
        setName(dispatch,e.target.value)
    };
    const lChangeHandler = (e) =>{
        setlName(dispatch,e.target.value)
    };
    const Click = (e) =>{
        getStudent({name,lname},(isOk,data)=>{
            if(!isOk)
                alert(data);
            else{
                document.writeln(data);
            }
        })
    };
    return (
        <div>
            <input onChange={(e)=>ChangeHandler(e)} type={"text"} id={"name"} value={name}/>
            <input onChange={(e)=>lChangeHandler(e)} type={"text"} id={"last"} value={lname}/>
            <button type={"button"} onClick={(e)=>Click(e)} >Click</button>
        </div>
    );
};

export default Admin;