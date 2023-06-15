import React from "react";
import ReactDOM from "react-dom";

function Child2({optionhandler}){
return(
    <div className="Child2">
        <h3>Child Component 2</h3>
        <button onClick={()=>optionhandler("Option 2")}>Option 2</button>
    </div>
);
}

export default Child2;