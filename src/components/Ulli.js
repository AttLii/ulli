import PropTypes from "prop-types"

export const Ulli = ({ list, itemFunc }) =>
  list.length > 0 ? (
    <ul>
      {list.map((item, i) => (
        <li key={i}>
          {itemFunc(item, i)}
        </li>
      ))}
    </ul>
  ) : null

Ulli.defaultProps = {
  list: [],
  itemFunc: () => {}
}

Ulli.propTypes = {
  list: PropTypes.array,
  itemFunc: PropTypes.func
}