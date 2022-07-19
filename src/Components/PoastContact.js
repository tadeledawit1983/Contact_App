import React, { useState } from 'react'
import { addNewContacts } from '../redux/contactSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const PoastContact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const id = Math.floor(Math.random() * Date.now()).toString()
    function handleClick(e) {
        e.preventDefault();
        dispatch(addNewContacts({
            id, name, phone, email
        }))
        setName('');
        setPhone('');
        setEmail('')
        navigate('/')
    }
    return (
        <form onSubmit={(e) => e.preventDefault()} className="post">
            <div>
                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <button onClick={handleClick} className="post_submit">Post Contact</button>
            </div>
        </form>
    )
}

export default PoastContact
