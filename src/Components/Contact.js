import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContacts } from "../redux/contactSlice"
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const { data } = useSelector(state => state.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let length = data.length;
    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch, length]);

    return (

        <div>
            <button onClick={() => {
                navigate('/post')

            }} className="post_contact">Add New Contact</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map(({ id, name, phone, email }) => {
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td className="delete">{<DeleteIcon onClick={() => {
                                    dispatch(deleteContacts({ id }));
                                }} />}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )

}

export default Contact;
