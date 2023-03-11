import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { roomActions } from '../../store/room-slice'
import img1 from '../../image/img1.jpg'

function AdminViewCard(props) {
    const { _id } = props.item
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onEditHandler = () => {
        dispatch(roomActions.updatingRoom(_id))
        navigate('/editForm')
    }
    const onDeleteHandler = async () => {
        const cancelBooking = await axios.delete('http://localhost:3001/user/cancelBooking', {
            data: {
                _id
            }
        })
        alert(`Refund Amount is ${cancelBooking.data.refundedAmount }`)
         props.reload()

    }
    return (
        <div className="main">
            <div className="card">
                <div className="image">
                    <img src={img1} alt="" />
                </div>

                <div className="container">
                    <p>Email:{props.item.email}</p>
                    <p>Start Date:{props.item.startTime}</p>
                    <p>End Date:{props.item.endTime}</p>
                    <p>Amount:{props.item.amount}</p>
                    <p>Room No:{props.item.roomNo}</p>
                    <p>Room Type:{props.item.roomType}</p>
                    <button onClick={onEditHandler}>edit</button>
                    <button onClick={onDeleteHandler}>delete</button>
                    <hr />
                </div>
            </div>

        </div>
    )
}

export default AdminViewCard