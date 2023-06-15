import React from "react";
import ReactDOM from "react-dom";

function Child1({optionhandler}){
return(
    <div className="Child1">
        <h3>Child Component 1</h3>
        <button onClick={()=>optionhandler("Option 1")}>Option 1</button>
    </div>
);
}

export default Child1;