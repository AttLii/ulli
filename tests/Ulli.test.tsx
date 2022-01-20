import { render } from '@testing-library/react';
import React from "react"

import { Ulli } from '../src/index';

test("doesn't crash", () => {
  render(<Ulli />);
});

test("doesn't render anything without list-prop", () => {
  const { container } = render(<Ulli />)
  expect(container.firstChild).toMatchSnapshot();
});

test("doesn't render anything with empty list-prop", () => {
  const { container } = render(<Ulli list={[]} />)
  expect(container.firstChild).toMatchSnapshot();
});

test("renders only ul > li without itemFn-prop", () => {
  const { container } = render(<Ulli list={["item1", "item2"]} />)
  expect(container.firstChild).toMatchSnapshot();
});

test("renders itemFunc's result as each <li> elements children", () => {
  const itemFunc = () => "hi"

  const { container } = render(
    <Ulli
      list={["item1", "item2"]}
      itemFunc={itemFunc}
    />
  )
  expect(container.firstChild).toMatchSnapshot();
});

test("itemFunc has access to each item and current index", () => {
  const { container } = render(
    <Ulli
      list={["item1", "item2"]}
      itemFunc={(item, i) => <div>{item} {i}</div>}
    />
  )
  expect(container.firstChild).toMatchSnapshot();
});

test("component accepts className and itemClassName prop, that is applied to elements", () => {
  const { container } = render(
    <Ulli
      className="app__list"
      itemClassName="app__list-item"
      list={["item1", "item2"]}
      itemFunc={(item, i) => <div>{item} {i}</div>}
    />
  )
  expect(container.firstChild).toMatchSnapshot();
});

test("component accepts ListElement and ItemElement prop, that can be a react component", () => {
  const { container } = render(
    <Ulli
      list={["item1", "item2"]}
      ListElement={({ children, ...rest }) => <div {...rest}>{children}</div>}
      ItemElement={({ children, ...rest }) => <button {...rest}>{children}</button>}
    />
  )
  expect(container.firstChild).toMatchSnapshot();
});

test("component accepts ListElement and ItemElement prop, that can be a string of html element", () => {
  const { container } = render(
    <Ulli
      list={["item1", "item2"]}
      ListElement="div"
      ItemElement="button"
    />
  )
  expect(container.firstChild).toMatchSnapshot();
});