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
      showMore: false

    };
    this.showingMore = this.showingMore.bind(this);
  }

  componentDidMount() {
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
      showMore: !this.state.showMore
    });
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
          <Feed postInfo={this.state.postInfo} showingMore={this.showingMore} showMore={this.state.showMore}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
