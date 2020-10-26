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
        <dl className="user-info-fields-container">
          <div className="user-info-field">
            <dt>Возраст:</dt>
            <dd> {userData.dob.age} лет</dd>
          </div>
          <div className="user-info-field">
            <dt>Пол:</dt>
            <dd> {userData.gender}</dd>
          </div>
          <div className="user-info-field">
            <dt>Адрес:</dt>
            <dd> {userData.location.country}, {userData.location.city}</dd>
          </div>
          <div className="user-info-field">
            <dt>Дата регистрации:</dt>
            <dd> {getFormattedRegistrationDate()}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default UserCard;
