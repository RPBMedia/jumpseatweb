import axios from 'axios';

const getJumpseatHeaders = (firebaseIdToken) => {
  return {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${firebaseIdToken}`,
  };
}

export const getJumpseatUserById = async (userId, firebaseIdToken) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/user/${userId}`;
    const headers = getJumpseatHeaders(firebaseIdToken);
    const res = await axios.get(url, {headers});
    console.log(res)
    return res;
  } catch(err) {
    return err.response;
  }
}

export const postJumpseatUser = async (userData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/user`;
    const firebaseIdToken = localStorage.getItem('userFirebaseIdToken');
    const headers = getJumpseatHeaders(firebaseIdToken);
    const res = await axios.post(url, userData, {headers});
    console.log(res)
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

