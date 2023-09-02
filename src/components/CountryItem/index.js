import './index.css'

const CountryItem = props => {
  const {contryDetailes, onVisited} = props
  const {name, isVisited, id} = contryDetailes
  const onClickVisited = () => {
    onVisited(id)
  }
  return (
    <li className="country-list">
      <p className="country-name">{name}</p>

      {isVisited === true ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button className="visit-btn" type="button" onClick={onClickVisited}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
