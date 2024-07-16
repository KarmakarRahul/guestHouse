import React, { useState } from 'react';
import './index.css';
import axios from 'axios';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        cid: '',
        comingFrom: '',
        goingTo: '',
        checkInDate: '',
        checkOutDate: '',
        noOfPeople: '',
        durationOfStay: '',
        bookingFor: '',
        totalAmount: '',
        transactionNo: '',
        termsAccepted: false,
        screenshot: null
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        // Handle form submission logic here
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(formData);
            // const formDataToSend = new FormData();
            // for (const key in formData) {
            //     formDataToSend.append(key, formData[key]);
            // }
            // formDataToSend.append('screenshot', formData.screenshot);
        
            try {
                const token = localStorage.getItem('token');
                console.log("hello token ",token);
                console.log(formData);
                const response = await axios.post('http://localhost:8000/api/bookings/create', formData, {
                    headers: {
                        'token': token,
                    },
                });
        
                if (response.status === 201) {
                    console.log('Booking successful', response.data);
                    // Handle success - perhaps redirect or show a success message
                } else {
                    console.error('Booking error', response.data);
                    // Handle error - show error message to user
                }
            } catch (error) {
                console.error('Error submitting form', error);
            }
        };

    const handleReset = () => {
        setFormData({
            cid: '',
            comingFrom: '',
            goingTo: '',
            checkInDate: '',
            checkOutDate: '',
            noOfPeople: '',
            durationOfStay: '',
            bookingFor: '',
            totalAmount: '',
            transactionNo: '',
            termsAccepted: false,
            screenshot: null
        });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Proceed Booking</h2>
            <div className="form-section">
                <div className="form-column">
                    <div className='inner-form'>
                        <label>CID</label>
                        <input type="text" name="cid" value={formData.cid} onChange={handleChange} />
                    </div>
                    <div className='inner-form'>
                        <label>Coming From</label>
                        <input type="text" name="comingFrom" value={formData.comingFrom} onChange={handleChange} />
                    </div>
                    <div className='inner-form'>
                        <label>Going to</label>
                        <input type="text" name="goingTo" value={formData.goingTo} onChange={handleChange} />
                    </div>
                    <div className='inner-form'>
                        <label>Check-in Date</label>
                        <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-column">
                    <div className='inner-form'>
                        <label>Check-out Date</label>
                        <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} />
                    </div>
                    <div className='inner-form'>
                        <label>No of People</label>
                        <select name="noOfPeople" value={formData.noOfPeople} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className='inner-form'>
                        <label>Duration of Stay</label>
                        <select name="durationOfStay" value={formData.durationOfStay} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="1">1 Day</option>
                            <option value="2">2 Days</option>
                            <option value="3">3 Days</option>
                            <option value="4">4 Days</option>
                            <option value="5">5 Days</option>
                            <option value="6">6 Days</option>
                            <option value="7">7 Days</option>
                            <option value="8">8 Days</option>
                            <option value="9">9 Days</option>
                            <option value="10">10 Days</option>
                        </select>
                    </div>
                    <div className='inner-form'>
                        <label>Booking for</label>
                        <select name="bookingFor" value={formData.bookingFor} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Personal">Personal</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>
                </div>
            </div>

            <h2>Payment Gateway</h2>
            <div className="payment-section">
                <div className="payment-column">
                    <div className='inner-form'>
                        <label>Total Amount of Customer</label>
                        <input type="number" name="totalAmount" value={formData.totalAmount} onChange={handleChange} />
                    </div>
                    <div className='inner-form'>
                        <label>Transaction No.</label>
                        <input type="text" name="transactionNo" value={formData.transactionNo} onChange={handleChange} />
                    </div>
                </div>
                <div className="payment-column">
                    <div className='inner-form'>
                        <label>Screenshot</label>
                        <input type="file" name="screenshot" onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div className="terms">
                <label>
                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
                    I agree with the terms & conditions
                </label>
            </div>

            <div className="buttons">
                <button type="submit"><i className="fas fa-check"></i> Confirm</button>
                <button type="button" onClick={handleReset}><i className="fas fa-redo"></i> Reset</button>
            </div>
        </form>
    );
};

export default BookingForm;
