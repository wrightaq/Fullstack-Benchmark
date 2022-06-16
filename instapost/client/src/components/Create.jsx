import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      imageUrl: '',
      body: ''
    };
  }
  render() {
    return (
      <div>
        <h2>Add a Post!</h2>
        <input placeholder='Username'></input>
        <input placeholder='Image URL'></input>
        <textarea placeholder='Here goes your post content'></textarea>
        <button>Send</button>
      </div>
    );
  }
}

export default Create;

