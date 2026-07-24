import React, { useEffect, useState } from 'react'
import { addUberUser, updateUberByID } from './uberdb';
import { updateById } from '../db';

const UberUserForm = ({ uberAdded, acceptUber }) => {

    const [form, setForm] = useState({
        id: '',
        name: '',
        pick: '',
        drop: '',
        dist: '',
        cab: 'auto',
        fare: ''
    })

    useEffect(() => {
        if (acceptUber) {
            setForm(acceptUber)
        }
    }, [acceptUber])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const calFare = (form.cab == 'auto') ? form.dist * 25 :
                        (form.cab == 'mini') ? form.dist * 50 : 
                        (form.cab == 'sedan') ? form.dist * 110 :  form.dist * 11000  ;
                       

        const newForm = {...form   , fare : calFare }

        console.log("onSubmit : " , newForm)

        if (acceptUber) {
            updateUberByID(acceptUber.id, newForm)
        } else {
            addUberUser(newForm)
        }
        uberAdded(1)
        setForm({
            id: '',
            name: '',
            pick: '',
            drop: '',
            dist: '',
            cab: '',
            fare: ''
        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <h2>Add Uber Form</h2>

                id : <input type="text" name='id' value={form.id} onChange={handleChange} required /><br /><br />
                name : <input type="text" name='name' value={form.name} onChange={handleChange} required /><br /><br />
                pick : <input type="text" name='pick' value={form.pick} onChange={handleChange} required /><br /><br />
                drop : <input type="text" name='drop' value={form.drop} onChange={handleChange} required /><br /><br />
                dist : <input type="text" name='dist' value={form.dist} onChange={handleChange} required /><br /><br />
                cab : <select name="cab" value={form.cab} onChange={handleChange}>
                    <option value="auto">Auto</option>
                    <option value="mini">Mini</option>
                    <option value="sedan">sedan</option>
                    <option value="helicopter">Helicopter</option>
                </select>
                <br /><br />
                {/* cab : <input type="text" name='cab' value={form.cab} onChange={handleChange} required /><br /><br /> */}
                {/* fare : <input type="text" name='fare' value={form.fare} onChange={handleChange} required /><br /><br /> */}

                <button>Add Uber User</button>
            </form>
        </div>
    )
}

export default UberUserForm
