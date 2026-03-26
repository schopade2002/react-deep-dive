
/*
<div class="parent">
<div class="child">
<h1>h1 tage here<h1/>
<h2>h2 tag here</h2>
</div>
<div/>

*/


// const heading = React.createElement( //react.createElement is an object 
//     "h1",
//     {id:"heading" , abc:"xyz"}, //attribute 
//     "hello wolrd in react..!!")



const parent = React.createElement("div"
    , { id: "parent" },
  [  React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "h1 tag here")
        , React.createElement("h2", {}, "h2 tag here")]
    ),  React.createElement(
        "div",
        { id: "child2"},
        [React.createElement("h1", {}, "h1 tag here")
        , React.createElement("h2", {}, "h2 tag here")]
    )]
)


console.log(parent); // return object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)



