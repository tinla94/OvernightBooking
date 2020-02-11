import axios from 'axios';
import axiosService from '../services/axios-service';
import {
    GET_USER,
    GET_USER_ERROR
} from './types';

// define axios 
const axiosInstance = axiosService.getInstance();


// Get User Info
export const getUser = () => {
    return axiosInstance.get('/users/profile').then(
        res => res.data, 
        err => Promise.reject(err.response.data.errors)
    )
}

// Edit user info
export const updateUser = (userData) => {
    return axiosInstance.patch('/profile/edit', userData).then(
        res => res.data,
        err => Promise.reject(err.response.data.errors)
    )
}


// Delete user
export const deleteUser = () => {
    return axiosInstance.delete('/profile/delete').then(
        res => res.data,
        err => Promise.reject(err.response.data.errors)
    )
}


// Get user rentals
export const getUserRentals = () => {
    return axiosInstance.get('/users/rentals-manage').then(
        res => res.data, 
        err => Promise.reject(err.response.data.errors)
    )
}


// Get user bookings
export const getUserBookings = () => {
    return axiosInstance.get('/users/bookings-manage').then(
        res => res.data, 
        err => Promise.reject(err.response.data.errors)
    )
}