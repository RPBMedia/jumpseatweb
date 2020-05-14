import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { getJumpseatUserById } from '../../api';

import ACTIONS from "../../modules/app/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    try {
      debugger;
      const signInRes = await this.props.firebase
        .doSignInWithEmailAndPassword(email, password);

      const userFirebaseIdToken = await signInRes.user.getIdToken();
      localStorage.setItem('userFirebaseIdToken', userFirebaseIdToken);
      const userId = signInRes.user.uid;
      const jumpseatUser = await getJumpseatUserById(userId, userFirebaseIdToken);
      debugger;
      if(jumpseatUser.data && jumpseatUser.status !== 404){
        //Go to homepage
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      }
      else if(jumpseatUser.status === 404){
        debugger;
        console.log('New user. Heading to onboarding...');
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ONBOARDING);

      } else if(jumpseatUser.status === 500){
        console.log('Internal server error')
      } else {
        console.log('Unknown error') 
      }
      
    } catch(error) {
      this.setState({ error });
    };
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    const formStyles = {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      alignItems: 'center',
    }

    return (
      <form onSubmit={this.onSubmit} style={formStyles}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };