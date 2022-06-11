import React from "react";

import Post from "./Post.jsx";

const Feed = (props) => {
  return (
    <div className='feed'>
      {/* section for post form */}

      {/* section for all posts */}
      <Post postInfo={props.postInfo} />
    </div>
  );
}

export default Feed;

//the fix for "expected a function expression" https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md