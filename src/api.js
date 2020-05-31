import axios from 'axios';

/*
  Helper Methods
 */

const getJumpseatHeaders = (firebaseIdTokenParam = null) => {
  const firebaseIdToken = firebaseIdTokenParam || localStorage.getItem('userFirebaseIdToken');
  return {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${firebaseIdToken}`,
  };
}

/*

  USERS

 */

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

export const getUserById = async (userId, firebaseIdToken) => {
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

export const postUser = async (userData) => {
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

export const updateUser = async (userId, userData) => {
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

export const deleteUser = async (userId) => {
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


export const getUserPaymentInfo = async (userId) => {
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

export const disableUser = async (userId) => {
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

/*

  USER REVIEWS

 */

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

export const updateDriver = async (userId) => {
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

export const getUserReview = async (reviewId) => {
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

export const postUserReview = async (reviewData) => {
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

export const updateUserReview = async (reviewId, reviewData) => {
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
export const deleteUserReview = async (reviewId) => {
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
export const getUserReviews = async (reviewsCriteria) => {
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

/*

  RIDES

 */

 /* Ride Data modal
 {
  "rideId": "string",
  "driverId": "string",
  "departureTime": "2020-05-31T14:54:49.856Z",
  "vehicleId": "string",
  "pickUpLocationLongitude": 0,
  "pickUpLocationLatitude": 0,
  "pickUpLocationGeoHash": "string",
  "destinationLocationLongitude": 0,
  "destinationLocationLatitude": 0,
  "destinationLocationGeoHash": "string",
  "route": "string",
  "distance": "string",
  "distanceValue": 0,
  "duration": "string",
  "durationValue": 0,
  "pickupName": "string",
  "destinationName": "string",
  "availableSeatCount": 0,
  "amount": 0,
  "currencyName": "string",
  "currencyId": 0,
  "rideStatus": 0,
  "gender": 0
}
  */
export const getRide = async (rideId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/${rideId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const updateRide = async (rideId, rideData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/${rideId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.put(url, rideData, {headers});
    return res; 
  } catch(err){
    return err.response;
  }
}

export const deleteRide = async (rideId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/${rideId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.put(url, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const getRides = async (rideIds) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/getrides`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, rideIds  , {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

/*
  RideCriteria object:
  {
    rideStatus: integer,
    pageNumber: integer,
    pageSize: integer,

  }
*/
export const getDriverRides = async (rideCriteria) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/getdriverrides`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, { rideCriteria }, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const getRidesByStatus = async (rideStatus) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/getridesByStatus?status=${rideStatus}`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

/*
  Search criteria obj:
  {
    dlae: number,
    dlas: number,
    dloe: number,
    dlos: number,
    plae: number,
    plas: number,
    ploe: number,
    plos: number, 
  }
*/
export const searchRides = async (searchCriteria) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/searchrides`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, {searchCriteria}, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const postRide = async (rideData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride`;
    const headers = getJumpseatHeaders();
    const res = await axios.post(url, rideData, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const buySeats = async (rideId, numberofSeats) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/${rideId}/buyseat`;
    const headers = getJumpseatHeaders();
    const res = await axios.post(url, {count: numberofSeats}, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const startRide = async (rideId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/${rideId}/startRide`;
    const headers = getJumpseatHeaders();
    const res = await axios.put(url, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const endRide = async (rideId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/ride/${rideId}/endRide`;
    const headers = getJumpseatHeaders();
    const res = await axios.put(url, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}



 /*

  VEHICLES

 */

/*
  Vehicle data model:
{
  "companyId": "string",
  "driverId": "string",
  "displayName": "string",
  "brand": "string",
  "modelName": "string",
  "modelYear": "string",
  "baggageAllowance": 0,
  "isSurfBoardAllowed": true,
  "isSmokingAvailable": true,
  "hasAirConditioning": true,
  "isPetsAllowed": true,
  "hasDisabledAccess": true,
  "maxSeatCount": 0,
  "imageUrl": "string",
  "plateNumber": "string"
}
 */
export const getVehicle = async (vehicleId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/vehicle/${vehicleId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const updateVehicle = async (vehicleId, vehicleData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/vehicle/${vehicleId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, vehicleData, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const deleteVehicle = async (vehicleId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/vehicle/${vehicleId}`;
    const headers = getJumpseatHeaders();
    const res = await axios.delete(url, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const getVehicles = async (vehicleId) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/vehicle/getvehicles`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}

export const postVehicle = async (vehicleData) => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_JUMPSEAT_BASE_URL}/vehicle`;
    const headers = getJumpseatHeaders();
    const res = await axios.get(url, vehicleData, {headers});
    return res;
  } catch(err){
    return err.response;
  }
}



