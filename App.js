import React from "react";
import ReactDOM  from "react-dom/client";

const heading1 = React.createElement(
    "h1",
    {id: "heading1"},
    "I am heading1"
);

const heading2 = React.createElement(
    "h2",
    {id: "heading2"},
    "I am heading2"
);

const child1 = React.createElement(
    "div",
    {id:"child1"},
    [heading1, heading2]
);

const child2 = React.createElement(
    "div",
    {id:"child2"},
    [heading1, heading2]
);

const parent = React.createElement(
    "div",
    {id:"parent"},
    [child1, child2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);