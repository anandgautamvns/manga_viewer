import { shallow } from "enzyme";
import React from "react";

// import "src/setupTest";
import Page from ".";

describe("Page", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).toMatchSnapshot();
  });
});
