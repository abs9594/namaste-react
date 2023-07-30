import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => <h1 id="title">title component</h1>

const Heading = () => <h1 id="heading">heading component</h1>;

const Container = () => (
    <div id="container">
        {/* following 3 titles in JSX are rendered exactly same */}
        {Title()}
        <Title></Title>
        <Title/>
        <Heading/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container/>);
