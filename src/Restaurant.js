import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render() {
    const { name, user, votes, handleDeSelect, handleSelect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);
    return (
      <article className="Restaurant">
        <h3> {name} </h3>
        <ul
          className="list-group list-group-flush"
        >
          {votes && map(votes, (vote, key) =>
            <li
              className="list-group-item"
              key={key}
            >
              {vote}
            </li>)}
        </ul>
        {
          userHasSelected
            ?   
            <button
              className="destructive"
              onClick={handleDeSelect}
            >
            Sorry, never mind
          </button>
            :
          <button
            onClick={handleSelect}
          >
            Yes! I go there
          </button>
        }
        
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
