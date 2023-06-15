import React, { useState } from "react";
import ReactDOM from "react-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";
function Parent() {
    let [selectedOption, setSelectedOption] = useState("");

    function selectedOptionHandler(option){
        setSelectedOption(option);
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child2 optionhandler = {selectedOptionHandler}/>
            <Child1 optionhandler = {selectedOptionHandler}/>
            <p>Selected Option: {selectedOption}</p>
        </div>
    );
}

export default Parent;