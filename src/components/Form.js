import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/actions';

class Form extends Component {

  _onClick = () => {
    let user = this.input.value;
    this.props.addUser(user);

    this.input.value = '';
  }

  render() {
    let {users} = this.props;

    return (
      <div>

        <input
          type='text'
          ref={ input => this.input = input } />

        <button
          onClick={ this._onClick }>
          Add user
        </button>

        <br />
        <ul>
          {users.map( (user, i) => {
              return <li key={ i }>{ user }</li>
          })}
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {addUser})(Form)
