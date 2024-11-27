const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is h1 tag")
  )
);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     style: { fontSize: "24px", fontWeight: "bold", color: "red" },
//   },
//   "Hello world from React"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
