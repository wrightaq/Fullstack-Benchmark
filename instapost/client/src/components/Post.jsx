import React from 'react';
import moment from 'moment';


const Post = (props) => {
  if (props.postData.body.length > 144) {
    var some = props.postData.body.slice(0, 145) + '...';
    var bigger = true;
  } else {
    var some = props.postData.body;
    var bigger = false;
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
          <span className='post__byline__user'>{props.postData.username}</span>
        </div>
        {moment(props.postData.createdAt).fromNow()}
      </div>
      <div className='post__image'>
        <img src={props.postData.imageUrl} />
      </div>
      {props.showMore ? <p>{props.postData.body}</p> : <p>{some}</p> }
      {bigger ? <button onClick={props.showingMore}>{props.showMore ? 'Show Less' : 'Show More'}</button> : null}
      <div className='post__actions'>
        <div className='post__likes'>Likes: {props.postData.likes}</div>
        <div className='post__buttons'>
          <button onClick={() => props.addLikes(props.postData._id)}>Like</button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Post;


{/* This component displays a hard-coded post, intended to show you the
        desired layout of the Post component. You should refactor this component
        so it dynamically renders posts from the data passed down as props. You
        should be leveraging the data from the database. In order to make this
        look a little more like our eventual posts, here are a few more
        paragraphs of lorem ipsum filler text.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
        aliquet nec, vulputate eget, arcu.
      </p>
      <p>
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
        dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      </p> */}