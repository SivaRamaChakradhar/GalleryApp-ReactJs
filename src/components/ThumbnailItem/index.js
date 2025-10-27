import './index.css'

const ThumbnailItem = props => {
  const {thumbnailImage, updateImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailImage
  const changeImage = () => {
    updateImage(id)
  }
  const activeClassName = isActive ? 'active-image' : ''

  return (
    <li className="gallery-item" onClick={changeImage}>
      <button className="btn" type="button">
        <img
          className={`image ${activeClassName}`}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
