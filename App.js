import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1" , {
    id:"heading"
} , "Hi it is React.");


console.log(heading);//it is a react obj.

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

{/* <div id="parent">

<div id="child">
<h1>Hello</h1>
        <h2>Bye</h2>
        </div>
    </div> */}
    // code for this
    
    const element = React.createElement(
        "div" , {id:"parent"},
        React.createElement("div",{id:"child"}, 
        [
            React.createElement("h1",{},"Heading1"),
            React.createElement("h2",{},"Heading2"),
        ]
        ) //if multiple element then array else single element
        )
        console.log(element);
        root.render(element);
