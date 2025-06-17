import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custome App</h1>
    </div>
  );
}
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google"
);
createRoot(document.getElementById("root")).render(<MyApp />);
