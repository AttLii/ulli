import { render } from '@testing-library/react';
import renderer from "react-test-renderer"
import React from "react"

import { Ulli } from './Ulli';

test("doesn't crash", () => {
  render(<Ulli />);
});

test("doesn't render anything without list-prop", () => {
  const tree = renderer
    .create(<Ulli />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("doesn't render anything with empty list-prop", () => {
  const tree = renderer
    .create(<Ulli list={[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders only ul > li without itemFn-prop", () => {
  const tree = renderer
    .create(<Ulli list={["item1", "item2"]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders itemFunc's result as each <li> elements children", () => {
  const itemFunc = () => "hi"
  
  const tree = renderer
    .create(
      <Ulli
        list={["item1", "item2"]}
        itemFunc={itemFunc}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("itemFunc has access to each item and current index", () => {
  const itemFunc = (item, i) => <div>{item} {i}</div>

  const tree = renderer
    .create(
      <Ulli
        list={["item1", "item2"]}
        itemFunc={itemFunc}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("component accepts className and itemClassName prop, that is applied to elements", () => {
  const itemFunc = (item, i) => <div>{item} {i}</div>

  const tree = renderer
    .create(
      <Ulli
        className="app__list"
        itemClassName="app__list-item"
        list={["item1", "item2"]}
        itemFunc={itemFunc}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("component accepts ListElement and ItemElement prop, that can be a react component", () => {
  const MyDiv = ({ children, ...rest }) => <div {...rest}>{children}</div>
  const MyButton = ({ children, ...rest }) => <button {...rest}>{children}</button>

  const tree = renderer
    .create(
      <Ulli
        list={["item1", "item2"]}
        ListElement={MyDiv}
        ItemElement={MyButton}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("component accepts ListElement and ItemElement prop, that can be a string of html element", () => {
  const tree = renderer
    .create(
      <Ulli
        list={["item1", "item2"]}
        ListElement="div"
        ItemElement="button"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


test("this should fail", () => {
  expect(true).toBeFalsy();
});

