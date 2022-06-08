import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {buyMob} from "./redux/mob/action";

const MobContainerWithHooks = () => {
    const num = useSelector(state => state.counterMob);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                counter is: {num}
            </div>
            <button type = { "button" } onClick = {() => dispatch(buyMob()) }> Click </button>
        </div>
    );
};

export default MobContainerWithHooks;