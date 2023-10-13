import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

it("has a text area and a button", () => {
  const wrapper = mount(<CommentBox />);
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

it("has a text area that users can type in", () => {
  wrapper.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapper.update();
  expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
});
