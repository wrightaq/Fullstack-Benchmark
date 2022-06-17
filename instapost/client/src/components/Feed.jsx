import React from 'react';
import Create from './Create.jsx';
import Post from './Post.jsx';

const Feed = (props) => {
  const posts = props.postInfo.map((post) =>
    <Post postData={post} showingMore={props.showingMore} showMore={props.showMore} addLikes={props.addLikes}/>
  );
  return (
    <div className='feed'>
      {/* section for post form */}
      <Create load={props.load} bigger={props.bigger}/>
      {/* section for all posts */}
      {posts}
    </div>
  );
};

export default Feed;

//the fix for "expected a function expression" https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md