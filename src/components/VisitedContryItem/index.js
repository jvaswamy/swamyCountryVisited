import './index.css'

const VisitedContryItem = props => {
  const {visitedContryDetails, onRemoveCountry} = props
  const {imageUrl, name, id} = visitedContryDetails
  const onClickRemove = () => {
    onRemoveCountry(id)
  }
  return (
    <li className="visited-list-Item">
      <img src={imageUrl} alt="thumbnail" className="flag-logo" />

      <div className="flag-details-container">
        <p className="country">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedContryItem
