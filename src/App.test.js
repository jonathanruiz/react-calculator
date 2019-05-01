import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button from "./components/Button";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`renders the "+" button`, () => {
  const component = renderer.create(<Button name="+" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
