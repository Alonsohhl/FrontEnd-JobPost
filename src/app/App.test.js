import React from "react";
import App from "./App";
// import TestRenderer  from "react-test-renderer";
import { shallow } from "enzyme";

describe("Name of the group", () => {
  it("Link changes the class when hovered", () => {
    const component = shallow(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(true).toBe(true);
  });
});
