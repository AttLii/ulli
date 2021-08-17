import React from "react"
import PropTypes from "prop-types"

export const Ulli = ({
  list,
  itemFunc,
  className,
  itemClassName,
  ItemElement,
  ListElement
}) => (
  list.length > 0 ? (
    <ListElement className={className}>
      {list.map((item, i) => (
        <ItemElement key={i} className={itemClassName}>
          {itemFunc(item, i)}
        </ItemElement>
      ))}
    </ListElement>
  ) : null
)

Ulli.defaultProps = {
  list: [],
  itemFunc: () => {},
  className: undefined,
  itemClassName: undefined,
  ListElement: "ul",
  ItemElement: "li"
}

Ulli.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  itemFunc: PropTypes.func,
  list: PropTypes.array,
  ListElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  ItemElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
}