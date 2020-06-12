import React from "react";
import { homeAppRouter } from "../../internal-router"
import { useHistory } from "react-router-dom";

const HomeApp = () => {
    let history = useHistory();
    return (<div onClick={() => {
        history.push(homeAppRouter.home())}}>home</div>);
};

export default HomeApp