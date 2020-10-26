import React from 'react';
import moment from 'moment';
import './user-card.scss';

const UserCard = ({ userData }) => {
  const getFormattedRegistrationDate = () => {
    const date = new Date(userData.registered.date);
    return moment(date).format('DD.MM.YYYY');
  }

  return (
    <div className="user-card-container">
      <img
        className="user-photo"
        src={userData.picture.large}
        alt="user avatar"
      />
      <div className="user-info-block">
        <span className="user-name">{userData.name.first} {userData.name.last}</span>
        <dl className="user-info-fields">
          <dt>Возраст:</dt>
          <dd> {userData.dob.age} лет</dd>
          <br />
          <dt>Пол:</dt>
          <dd> {userData.gender}</dd>
          <br />
          <dt>Адрес:</dt>
          <dd> {userData.location.country}, {userData.location.city}
          </dd>
          <br />
          <dt>Дата регистрации:</dt>
          <dd> {getFormattedRegistrationDate()}</dd>
        </dl>
      </div>
    </div>
  );
}

export default UserCard;
