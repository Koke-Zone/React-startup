const parent = React.createElement("div", { id: "main" }, [
  React.createElement("div", { id: "main-child1" }, [
    React.createElement("h1", { id: "heading" }, "Hi I am H1 Tag"),
    React.createElement("h2", { id: "heading2" }, "Hi I am H2 Tag"),
  ]),
  React.createElement("div", { id: "main-child2" }, [
    React.createElement("h1", { id: "heading" }, "Hi I am H1 Tag"),
    React.createElement("h2", { id: "heading2" }, "Hi I am H2 Tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
