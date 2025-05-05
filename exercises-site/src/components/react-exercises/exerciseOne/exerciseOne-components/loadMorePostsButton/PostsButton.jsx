import "./postButton.css"

export const PostsButton = (props)=>{
    return (
      <button className="postsButton" onClick={props.callback} >
        {props.text}
      </button>
    )
}