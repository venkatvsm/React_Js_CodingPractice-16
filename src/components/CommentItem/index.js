// Write your code here

import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    listEl,
    deleteIconTiggered,
    likeButtontriggered,
    initialContainerBackgroundClassNames,
  } = props
  const {id, name, comment, isLike, date} = listEl
  const initial = name[0]
  const commentDate = formatDistanceToNow(date)
  const count = Math.ceil(
    Math.random() * initialContainerBackgroundClassNames.length,
  )
  const bgColor = initialContainerBackgroundClassNames[count]
  const onDelete = () => {
    deleteIconTiggered(id)
  }
  const onLikebutton = () => {
    likeButtontriggered(id)
  }
  const likeTestClassName = isLike ? 'btnEl2' : 'btnEl1'
  return (
    <li className="listContainer">
      <div className="itemsContainer">
        <p className={`intial  ${bgColor}`}>{initial.toUpperCase()}</p>
        <div>
          <h1 className="name">{name.toUpperCase()}</h1>
          <p className="comments">{comment}</p>
        </div>
        <p className="dateEl">{commentDate}</p>
      </div>
      <div className="imageConatiner">
        <div className="buttonElement">
          {isLike ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              className="likeIcon"
              alt="liked"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              className="likeIcon"
              alt="like"
            />
          )}
          <button
            className={likeTestClassName}
            type="button"
            onClick={onLikebutton}
          >
            Like
          </button>
        </div>
        <button
          className="deleteBtn"
          type="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="deleteimage"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
