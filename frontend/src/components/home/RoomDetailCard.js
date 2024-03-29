import React from 'react'
import { useDispatch } from 'react-redux'
import { roomActions } from '../../store/room-slice';
import { useNavigate } from 'react-router-dom'
import './Layout.css';
import img1 from '../../image/img1.jpg'

function RoomDetailCard(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(roomActions.bookingRoom({
      roomType: props.item.roomType,
      roomNo: props.item.roomNo,
      price: props.item.price
    }))
    navigate('/booking')
  }

  return (
    <div className="main">
      <div className='card'>
      <div className="image">
            <img src={img1} alt="" />
          </div>
        <div className="container">
          <h1 style={{ fontSize: "15px", color: "black" ,fontFamily:"Sans-serif" }}>Room Type - {props.item.roomType}</h1>
          <h2 style={{ fontSize: "15px", color: "black" ,fontFamily:"Sans-serif"}}>Room No - {props.item.roomNo}</h2>
          <h3 style={{ fontSize: "15px", color: "black" ,fontFamily:"Sans-serif" }}>Price - {props.item.price}</h3>
          <button onClick={submitHandler}>Book Room</button>
        </div>
      </div>
    </div>

  )
}

export default RoomDetailCard