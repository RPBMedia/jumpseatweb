import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import firebase from "firebase";
import { compose } from 'recompose';
import DatePicker from "react-datepicker";
import FileUploader from "react-firebase-file-uploader";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { postJumpseatUser } from '../../api';


const OnboardingPage = () => (
  <div>
    <h1>SignUp</h1>
    <OnboardingForm />
  </div>
);

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  phoneNumber: '',
  gender: 0,
  birthDate: '',
  profileImage: [],
  userUid: '',
  error: null,
  avatar: '',
  isUploading: false,
  progress: 0,
  avatarURL: ''
};

class OnboardingFormBase extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      gender,
      birthDate,
      avatarURL,
    } = this.state;   
    try {
      //setup the image URL
      const uid = this.props.firebase.auth.currentUser.uid;

      const userData = {
        firstName,
        lastName,
        username,
        email,
        phoneNumber,
        gender,
        birthDate,
        profileImagerUrl: this.state.avatarURL,
        userUid: uid,
      };
      const newUser = await postJumpseatUser(userData);
      debugger;
      if(newUser.status === 201){
      
        console.log('New user created. Heading to home page...');
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      }

    } catch(error) {
      this.setState({ error });
    };
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setBirthDate = (date) => {
    this.setState({
      birthDate: date
    });
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      gender,
      birthDate,
      profileImagerUrl,
      error,
    } = this.state;

    const isInvalid =
      firstName === '' ||
      lastName === '' ||
      phoneNumber === '' ||
      gender === '' ||
      birthDate === '' ||
      profileImagerUrl === [] ||
      email === '' ||
      username === '';

    const formStyles = {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      alignItems: 'center',
    }

    return (
      <form onSubmit={this.onSubmit} style={formStyles}>
        <input
          name="firstName"
          value={firstName}
          onChange={this.onChange}
          type="text"
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={lastName}
          onChange={this.onChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Jumpseat username"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="phoneNumber"
          value={phoneNumber}
          onChange={this.onChange}
          type="text"
          placeholder="Phone number"
        />
        <label>
          Gender:
          <select value={gender} onChange={this.onChange}>
            <option value="0">Male</option>
            <option value="1">Female</option>
            <option value="2">Non specified</option>
          </select>
        </label>
        <DatePicker
          selected={birthDate}
          onChange={date => this.setBirthDate(date)}
          placeholderText="Birth date"
        />
        <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        <hr />
        <button disabled={isInvalid} type="submit">
          Create user
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const OnboardingForm = compose(
  withRouter,
  withFirebase,
)(OnboardingFormBase);

export default OnboardingForm;