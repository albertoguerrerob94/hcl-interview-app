import React, { PureComponent } from 'react';
import { get } from 'axios';
import Info from './Info';
import Comments from './Comments';

export default class HomePage extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      date: '',
      location: '',
      state: '',
      people: [],
      comments: [],
      id: props.match.params.id
    };
  }

  componentDidMount() {
    const url = `https://aqueous-plains-25700.herokuapp.com/events/${this.state.id}`;
    get(url).then(({ data }) => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div className="homepage">
        <h1>{this.state.name}</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Info {...this.state} />
            </div>
            <div className="col-sm">
              <Comments eventId={this.state.id} comments={this.state.comments} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
