import axios from 'axios';

const getJumpseatHeaders = (firebaseIdTokenParam = null) => {
  const firebaseIdToken = firebaseIdTokenParam || localStorage.getItem('userFirebaseIdToken');
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
    console.log(res);
    return res;
  } catch(err) {
    return err.response;
  }
}

/* User data model
{
  "firstName": "string",
  "lastName": "string",
  "username": "string",
  "email": "string",
  "phoneNumber": "string",
  "gender": 0,
  "birthDate": "2020-05-31T13:57:05.420Z",
  "profileImageUrl": "string",
  "deviceToken": "string",
  "userType": 0,
  "userUId": "string"
}
*/
export const postJumpseatUser = async (userData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/user`;
    const headers = getJumpseatHeaders();
    const res = await axios.post(url, userData, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

export const updateJumpseatUser = async (userId, userData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/user/${userId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.put(url, userData, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

export const deleteJumpseatUser = async (userId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/user/${userId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.delete(url, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}


export const getJumpseatUserPaymentInfo = async (userId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/user/${userId}/getuserpaymentinfo`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

export const disableJumpseatUser = async (userId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/user/${userId}/disableuser`;
    const headers = getJumpseatHeaders();
    const res = await axios.put(url, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

export const updateJumpseatDriver = async (userId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/user/${userId}/updateuserasdriver`;
    const headers = getJumpseatHeaders();
    const res = await axios.put(url, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

export const getJumpseatUserReview = async (reviewId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/userReview/${reviewId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

/* Review data model: 
{
  "reviewedUserUId": "string",
  "reviewerUsername": "string",
  "reviewerImageUrl": "string",
  "userRating": 0,
  "review": "string",
  "userUId": "string"
}
*/
export const postJumpseatUserReview = async (reviewData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/userReview`;
    const headers = getJumpseatHeaders();
    const res = await axios.post(url, reviewData, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

export const updateJumpseatUserReview = async (reviewId, reviewData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/userReview/${reviewId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.put(url, reviewData, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

/*
Ask kutlay why do we need the userUId in this request body
*/
export const deleteJumpseatUserReview = async (reviewId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/userReview/${reviewId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.delete(url, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}

/*
  Request params
  {
    reviewerUserId: string,
    reviewedUserId: string,
    page: int,
    size: int,
  }
*/
export const getJumpseatUserReviews = async (reviewsCriteria) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/userReview/getUserReviews`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, reviewsCriteria, {headers});
    console.log(res);
    debugger;
    return res;
  } catch(err){
    return err.response;
  }
}



