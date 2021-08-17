import PropTypes from "prop-types"

export const Ulli = ({ className, itemClassName, itemFunc, list }) =>
  list.length > 0 ? (
    <ul className={className}>
      {list.map((item, i) => (
        <li key={i} className={itemClassName}>
          {itemFunc(item, i)}
        </li>
      ))}
    </ul>
  ) : null

Ulli.defaultProps = {
  className: undefined,
  itemFunc: () => {},
  itemClassName: undefined,
  list: []
}

Ulli.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  itemFunc: PropTypes.func,
  list: PropTypes.array
}