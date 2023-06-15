import React from "react";
import ReactDOM from "react-dom";

function Child2({selectedOptionHandler}){
return(
    <div className="Child2">
        <h3>Child Component 2</h3>
        <button onClick={()=>selectedOptionHandler("Option 2")}>Option 2</button>
    </div>
);
}

export default Child2;