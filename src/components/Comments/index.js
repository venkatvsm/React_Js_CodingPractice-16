import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialList = []

// Write your code here
class Comments extends Component {
  state = {initialListEl: initialList, name: '', comment: ''}

  nameInputTriggered = event => {
    this.setState({name: event.target.value})
  }

  commentInputTriggered = event => {
    this.setState({comment: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      date: new Date(),
    }
    this.setState(prevState => ({
      initialListEl: [...prevState.initialListEl, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteIconTiggered = id => {
    const {initialListEl} = this.state
    const result = initialListEl.filter(eachItem => eachItem.id !== id)
    this.setState({
      initialListEl: [...result],
    })
  }

  likeButtontriggered = id => {
    this.setState(prevState => ({
      initialListEl: prevState.initialListEl.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLike: !eachItem.isLike}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {initialListEl, name, comment} = this.state
    console.log(initialListEl)
    return (
      <div className="bg_container">
        <h1 className="heading-comment">Comments</h1>
        <div className="headContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
          <p className="para_tech">Say Something about 4.0 Technologies</p>
          <form className="textContainer">
            <input
              type="text"
              className="nameText"
              placeholder="Your Name"
              value={name}
              onChange={this.nameInputTriggered}
            />
            <textarea
              type="text"
              className="commentText"
              placeholder="Your Comment"
              value={comment}
              onChange={this.commentInputTriggered}
            ></textarea>
            <button type="submit" className="btnEl" onClick={this.submitForm}>
              Add Comment
            </button>
          </form>
        </div>
        <hr />
        <p className="comments_para">
          <span className="span1">{initialListEl.length}</span> comments
        </p>
        <ul className="listContainer">
          {initialListEl.map(eachItem => (
            <CommentItem
              listEl={eachItem}
              key={eachItem.id}
              deleteIconTiggered={this.deleteIconTiggered}
              likeButtontriggered={this.likeButtontriggered}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
