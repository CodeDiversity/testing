import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "components/app";
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("shows a comment box", () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });
  it("shows a comment list", () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
});
