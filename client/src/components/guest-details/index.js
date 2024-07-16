import React from 'react';
import './index.css';

const bookings = [
    { cid: '11401001930', roomId: 2, checkIn: '2023-09-13', checkOut: '2023-09-15', people: 2, name: 'John Doe', phone: '123-456-7890', status: 'Refund' },
    { cid: '11401001930', roomId: 2, checkIn: '2023-07-17', checkOut: '2023-07-20', people: 2, name: 'Jane Smith', phone: '123-456-7890', status: 'Confirmed' },
    { cid: '1140100430', roomId: 3, checkIn: '2023-05-23', checkOut: '2023-05-25', people: 3, name: 'Alice Brown', phone: '123-456-7890', status: 'Pending' },
    { cid: '11401001930', roomId: 3, checkIn: '2023-04-11', checkOut: '2023-04-15', people: 2, name: 'Bob White', phone: '123-456-7890', status: 'Pending' },
    { cid: '11401001930', roomId: 1, checkIn: '2023-10-24', checkOut: '2023-10-27', people: 1, name: 'Charlie Green', phone: '123-456-7890', status: 'Pending' },
    { cid: '11401001930', roomId: 0, checkIn: '2024-02-11', checkOut: '2024-02-15', people: 2, name: 'David Blue', phone: '123-456-7890', status: 'Pending' },
];

const BookingTable = () => {
    const handleDelete = (cid) => {
        console.log('Delete booking with CID:', cid);
    };

    return (
        <div className="booking-table-container">
        <h2>Edit / Cancel Your Booking</h2>
        <div className="booking-check">
            <input type="text" placeholder="Enter CID" />
            <button>Check</button>
        </div>
            <table className="booking-table">
                <thead>
                    <tr>
                        <th>CID</th>
                        <th>Room ID</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>No. of People</th>
                        <th>Customer's Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.cid}</td>
                            <td>{booking.roomId}</td>
                            <td>{booking.checkIn}</td>
                            <td>{booking.checkOut}</td>
                            <td>{booking.people}</td>
                            <td>{booking.name}</td>
                            <td>{booking.phone}</td>
                            <td>{booking.status}</td>
                            <td>
                                <button className="delete-button" onClick={() => handleDelete(booking.cid)}>
                                    <i className="fas fa-trash"></i> Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="edit-details-container">
                <button className="edit-details-button">
                    <i className="fas fa-edit"></i> Edit your details
                </button>
            </div>
        </div>
    );
};

export default BookingTable;
