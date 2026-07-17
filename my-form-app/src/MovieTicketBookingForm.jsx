import React, { useState } from 'react'

const MovieTicketBookingForm = () => {

    const [obj, setObj] = useState({
        customerName: '',
        movieName: '',
        theatre: '',
        showDate: '',
        showTime: '',
        seatType: ''
    })

    const handleChange = (e) => {

        const { name, value } = e.target;

        setObj({
            ...obj,
            [name]: value
        })

    }

    const clearForm = () => {

        setObj({
            customerName: '',
            movieName: '',
            theatre: '',
            showDate: '',
            showTime: '',
            seatType: ''
        })

    }

    const handleForm = (e) => {

        e.preventDefault();

        console.log(obj);

        clearForm();

    }

    return (
        <div>

            <h2>Movie Ticket Booking Form</h2>

            <form onSubmit={handleForm}>

                Customer Name :
                <input
                    type="text"
                    name="customerName"
                    value={obj.customerName}
                    onChange={handleChange}
                />
                <br /><br />

                Movie Name :
                <input
                    type="text"
                    name="movieName"
                    value={obj.movieName}
                    onChange={handleChange}
                />
                <br /><br />

                Theatre :
                <select
                    name="theatre"
                    value={obj.theatre}
                    onChange={handleChange}
                >
                    <option value="">Select Theatre</option>
                    <option value="PVR">PVR</option>
                    <option value="INOX">INOX</option>
                    <option value="Cinepolis">Cinepolis</option>
                    <option value="Miraj">Miraj</option>
                </select>
                <br /><br />

                Show Date :
                <input
                    type="date"
                    name="showDate"
                    value={obj.showDate}
                    onChange={handleChange}
                />
                <br /><br />

                Show Time :
                <select
                    name="showTime"
                    value={obj.showTime}
                    onChange={handleChange}
                >
                    <option value="">Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                </select>
                <br /><br />

                Seat Type :
                <input
                    type="radio"
                    name="seatType"
                    value="Silver"
                    checked={obj.seatType === "Silver"}
                    onChange={handleChange}
                /> Silver

                <input
                    type="radio"
                    name="seatType"
                    value="Gold"
                    checked={obj.seatType === "Gold"}
                    onChange={handleChange}
                /> Gold

                <input
                    type="radio"
                    name="seatType"
                    value="Platinum"
                    checked={obj.seatType === "Platinum"}
                    onChange={handleChange}
                /> Platinum

                <br /><br />

                <button type="submit">Book Ticket</button>

            </form>

        </div>
    )
}

export default MovieTicketBookingForm