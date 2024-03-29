import React from "react";
import ReactDOM from "react-dom";


// normal react element
// const heading = React.createElement("h1" , {
//     id:"heading"
// } , "Hi it is React.");


// console.log(heading);//it is a react obj.

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

{/* <div id="parent">

<div id="child">
<h1>Hello</h1>
        <h2>Bye</h2>
        </div>
    </div> */}
    // code for this
    
    // const element = React.createElement(
    //     "div" , {id:"parent"},
    //     React.createElement("div",{id:"child"}, 
    //     [
    //         React.createElement("h1",{},"Heading1"),
    //         React.createElement("h2",{},"Heading2"),
    //     ]
    //     ) //if multiple element then array else single element
    //     )
    //     console.log(element);
    //     root.render(element);


    // jsx element 

    // jsx element => babel transpiles to react element

        // const jsxHeading = (
        //     <h1 className="heading" tabIndex="5">
        //         It is react JSX heading
        //     </h1>
        // )
        // console.log(jsxHeading);
        // root.render(jsxHeading);


        // functional componeny


        const Title = () => <h1>Title of Namaste React</h1>

        const HeadingComponent = () => (
            <div className="heading">
                <Title/>
                <h1>Namaste React</h1>
            </div>
        );
        root.render(<HeadingComponent/>)