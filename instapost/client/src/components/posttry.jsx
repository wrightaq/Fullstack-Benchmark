import React from "react";


const Post = (props) => {

  if (props.postInfo.length > 0) {

    var posts = props.postInfo.map((post) => {
      if (post.body.length > 144) {
        var some = post.body.slice(0, 145);
        return <div>
          {props.showMore ? <p>{post.body}</p> : <p>{some + '...'}</p>}
          <button onClick={props.showingMore}>{props.showMore ? 'Show Less' : 'Show More'}</button>
        </div>;
      } else {
        return <p>{post.body} </p>;
      }
    }

    );
  } else {
    var posts = 'Loading...';
  }
  return (
    <div className='post'>
      <div className='post__byline'>
        <div className='center'>
          <img
            className='avatar'
            src='https://www.w3schools.com/w3images/avatar6.png'
            alt='user avatar'
          />
          <span className='post__byline__user'>Awesome User</span>
        </div>
        14 hours ago
      </div>
      <div className='post__image'>
        <img src='https://loremflickr.com/320/320' />
      </div>
      <div className='post__actions'>
        <div className='post__likes'>Likes: 32</div>
        <div className='post__buttons'>
          <button onClick={props.addLikes(props.postInfo._id)}>Like</button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Post;

// {
//   if (props.postData.body.length > 144) {
//   var some = props.postData.body.slice(0, 145);
//   }
// props.showMore ? <p>{props.postData.body}</p> : <p>{some + '...'}</p>
// <button onClick={props.showingMore}>{props.showMore ? 'Show Less' : 'Show More'}</button>

// }
