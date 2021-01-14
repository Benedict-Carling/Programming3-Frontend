import Login from "../components/Login/Components/LoginForm";
import React from "react";
import { mount } from "enzyme";

describe("Home Component", () => {
  it("Home component renders successfully and has styled title of React 2", () => {
    const wrapper = mount(<Login />);
    console.log(wrapper);
    expect(
      wrapper.contains(
        <label className="Label" htmlFor="login-email">
          Email
        </label>
      )
    ).toBe(true);
  });
});