import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlaylistItem = ({obj, deleteItem}) => {
  const {duration, name, imageUrl, genre, id} = obj
  return (
    <li className="play-list-item-main-container">
      <div className="img-title-genre-container">
        <img src={imageUrl} alt="track" />
        <div className="name-and-genre-container">
          <p>{name}</p>
          <p className="genre-para">{genre}</p>
        </div>
      </div>
      <div className="duration-and-delete-container">
        <p>{duration}</p>
        <button
          className="delete-btn"
          data-testid="delete"
          aria-label="delete"
          type="button"
          onClick={() => deleteItem(id)}
        >
          <AiOutlineDelete className="delete-btn-icon" />
        </button>
      </div>
    </li>
  )
}

export default PlaylistItem
