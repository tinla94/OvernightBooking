// Auth action types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = AUTH_ERROR;

// User action types
export const GET_USER = 'GET_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const CLEAR_USER = 'CLEAR_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_REPOS = 'GET_REPOS';
export const USER_PROFILE_ERROR = 'PROFILE_ERROR';

// Alert action types
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

// Rentals action types
export const FETCH_RENTALS = 'FETCH_RENTALS';
export const FETCH_RENTALS_SUCCESS = 'FETCH_RENTALS_SUCCESS';
export const FETCH_RENTALS_INIT = 'FETCH_RENTALS_INIT';
export const FETCH_RENTALS_FAIL = 'FETCH_RENTALS_FAIL';

// Single rental actions
export const FETCH_RENTAL_BY_ID_INIT = 'FETCH_RENTAL_BY_ID_INIT';
export const FETCH_RENTAL_BY_ID_SUCCESS = 'FETCH_RENTAL_BY_ID_SUCCESS';

// Bookings action types
export const FETCH_USER_BOOKINGS_INIT = 'FETCH_USER_BOOKINGS_INIT';
export const FETCH_USER_BOOKINGS_SUCCESS = 'FETCH_USER_BOOKINGS_SUCCESS';
export const FETCH_USER_BOOKINGS_FAIL = 'FETCH_USER_BOOKINGS_FAIL';


export const UPDATE_RENTAL_SUCCESS = 'UPDATE_RENTAL_SUCCESS';
export const UPDATE_RENTAL_FAIL = 'UPDATE_RENTAL_FAIL';
export const RESET_RENTAL_ERRORS = 'RESET_RENTAL_ERRORS';

export const RELOAD_MAP = 'RELOAD_MAP';
export const RELOAD_MAP_FINISH = 'RELOAD_MAP_FINISH';
