import Home from "../components/Home/home";
import React from "react";
import { shallow } from "enzyme";

describe("Home Component", () => {
  it("Home component renders successfully and has styled title of React 2", () => {
    const wrapper = shallow(<Home />);
    expect(
      wrapper.contains(
        <header className="Home-MainTitle">
          <h1>REACT 2</h1>
        </header>
      )
    ).toBe(true);
  });
});

