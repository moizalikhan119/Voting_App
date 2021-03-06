import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import { database } from './firebase';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }


  handleSelect(key) {
    const currentUser = this.props.user;
    database.ref('/restaurant')
      .child(key)
      .child('votes')
      .child(currentUser.uid)
      .set(currentUser.displayName);
}

  handleDeSelect( key ) {
    const currentUser = this.props.user;
    database.ref('/restaurant')
      .child(key)
      .child('votes')
      .child(currentUser.uid)
      .remove();
  }

  render() {
    const { user, restaurants } = this.props;
    return (
      <section className="Restaurants">
        {
          map(restaurants, (restaurant, key) =>
            < Restaurant
              key={key}
              {...restaurant}
              user={user}
              handleSelect={() => this.handleSelect(key)}
              handleDeSelect={() => this.handleDeSelect(key)}
            />
          )
        }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;