import React from "react";
import ReactDOM from "react-dom";

function Child1({selectedOptionHandler}){
return(
    <div className="Child1">
        <h3>Child Component 1</h3>
        <button onClick={()=>selectedOptionHandler("Option 1")}>Option 1</button>
    </div>
);
}

export default Child1;