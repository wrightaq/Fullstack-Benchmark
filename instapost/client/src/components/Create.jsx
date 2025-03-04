import React from 'react';
import axios from 'axios';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      imageUrl: '',
      body: '',
      posted: false
    };
    this.formInput = this.formInput.bind(this);
    this.post = this.post.bind(this);
    this.reload = this.reload.bind(this);
  }

  formInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  post() {
    axios.post('/api/posts/', {username: this.state.username, imageUrl: this.state.imageUrl, body: this.state.body});
    this.setState({
      posted: !this.state.posted
    });
    this.reload();
    this.props.showingMore();
    this.props.load();
  }

  reload() {
    this.setState({
      username: '',
      imageUrl: '',
      body: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Post!</h2>
        <input onChange={this.formInput} value={this.state.username}name='username'placeholder='Username'></input>
        <input onChange={this.formInput} value={this.state.imageUrl} name='imageUrl' placeholder='Image URL'></input>
        <textarea onChange={this.formInput} value={this.state.body} name='body' placeholder='Here goes your post content'></textarea>
        <button onClick={this.post}>Send</button>
        <div>{this.state.posted ? 'post created' : null}</div>
      </div>
    );
  }
}

export default Create;

