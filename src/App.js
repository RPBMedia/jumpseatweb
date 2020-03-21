// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import * as firebase from 'firebase';
// import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
// import config from './config';
// import 'firebase/auth';

// import Home from './views/Home';
// import UserForm from './components/UserForm';

// const firebaseApp = firebase.initializeApp(config.firebaseConfig);

// const FormWrapper = ({ children }) =>
//   <>
//     {children}
//     <hr />
//   </>;

// const App = ({
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signInWithGoogle,
//   signInWithFacebook,
//   signInWithGithub,
//   signInWithTwitter,
//   signInAnonymously,
//   signOut,
//   setError,
//   user,
//   error,
//   loading,
// }) => (
//   <>
//     <FormWrapper>
//       <h1>create user</h1>
//       <UserForm onSubmit={createUserWithEmailAndPassword} />
//     </FormWrapper>

//     <FormWrapper>
//       <h1>sign in</h1>
//       <UserForm onSubmit={signInWithEmailAndPassword} />
//     </FormWrapper>

//     <FormWrapper>
//       <h1>sign in anonymously</h1>
//       <button onClick={signInAnonymously}>sign in anonymously</button>
//     </FormWrapper>

//     <FormWrapper>
//       <h1>sign in with google</h1>
//       <button onClick={signInWithGoogle}>sign in with google</button>
//     </FormWrapper>

//     <FormWrapper>
//       <h1>sign in with github (disabled but good to see error message)</h1>
//       <button onClick={signInWithGithub}>sign in with github</button>
//     </FormWrapper>

//     <FormWrapper>
//       <h1>sign out</h1>
//       <button onClick={signOut}>sign out</button>
//     </FormWrapper>

//     <FormWrapper>
//       <h1>user data</h1>
//       <textarea value={JSON.stringify(user)} />
//     </FormWrapper>

//     <FormWrapper>
//       <h1>error data</h1>
//       <textarea value={JSON.stringify(error)} />
//     </FormWrapper>

//     <FormWrapper>
//       <h1>clear error</h1>
//       <button onClick={() => setError(null)}>clear error</button>
//     </FormWrapper>x
//   </>
// );

// const firebaseAppAuth = firebaseApp.auth();

// /** See the signature above to find out the available providers */
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };
// /** providers can be customised as per the Firebase documentation on auth providers **/
// providers.googleProvider.setCustomParameters({hd:"mycompany.com"});

// /** Wrap it */
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';


const App = () => {debugger; return(
  <Router>
    <div>ola</div>
  </Router>
)};

export default App;