import React from 'react';
import './user-card.scss';

const UserCard = ({ userData }) => {
  console.log(userData);

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
          <dd> {userData.location.country}, {userData.location.city}</dd>
          <br />
          <dt>Дата регистрации:</dt>
          <dd> {userData.registered.date}</dd>
        </dl>
      </div>
    </div>
  );
}

export default UserCard;
