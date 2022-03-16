import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reservations.modules.css';
import deleteReservation from './reservationDeleteService';
import constants from '../../utils/constants';

const ReservationsTable = ({ reservation, roomType }) => {
  const [apiError, setApiError] = useState(false);
  return (
    <>
      <tr>
        <td className="tableCells">
          <Link to={`reservations/edit/${reservation.id}`}>
            <button type="button" className="Edit">
              Edit
            </button>
          </Link>
        </td>
        <td className="tableCells">
          <button
            type="button"
            className="Delete"
            onClick={() => deleteReservation(reservation, setApiError)}
          >
            Delete
          </button>
          {apiError && <p>{constants.API_ERROR}</p>}
        </td>
        <td className="tableCells">{reservation.user}</td>
        <td className="tableCells">{reservation.guestEmail}</td>
        <td className="tableCells">{reservation.checkInDate}</td>
        <td className="tableCells">{reservation.numberOfNights}</td>
        <td className="tableCells">{roomType}</td>
      </tr>
    </>
  );
};
export default ReservationsTable;
