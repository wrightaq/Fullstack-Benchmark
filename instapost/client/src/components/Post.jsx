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
      {posts}
      <div className='post__actions'>
        <div className='post__likes'>Likes: 32</div>
        <div className='post__buttons'>
          <button>Like</button>
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