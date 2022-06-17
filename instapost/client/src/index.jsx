import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Feed from './components/Feed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postInfo: [],
      showMore: false,
      bigger: false

    };
    this.showingMore = this.showingMore.bind(this);
    this.addLikes = this.addLikes.bind(this);
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  load() {
    axios.get('/api/posts')
      .then((body) => {
        this.setState({
          postInfo: body.data
        });
        console.log('state', this.state.postInfo);
      })
      .catch((error) => {
        console.log('error from axios call:', error);
      });
  }

  showingMore() {
    this.setState({
      showMore: !this.state.showMore,
      bigger: true
    });
  }

  addLikes(id) {
    axios.patch(`/api/posts/${id}`); //colon only needed express side
    this.load();

  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="nav__logo" >
            Instapost
          </span>
        </div>
        <div className="main">
          { <Feed postInfo={this.state.postInfo} bigger={this.state.bigger} showingMore={this.showingMore} showMore={this.state.showMore} addLikes={this.addLikes} load={this.load}/>}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
