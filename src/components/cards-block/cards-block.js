/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../ui-kit/user-card';
import './cards-block.scss';

const apiUrl = 'https://randomuser.me/api/?nat=us&results=20';

const CardsBlock = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getCardsData();
  }, []);

  const getCardsData = async () => {
    try {
      setErrorMessage('');
      const response = await axios.get(apiUrl);
      setUsers(response.data.results);
    } catch (error) {
      setErrorMessage('Не удалось загрузить пользователей!');
      console.error('Error from cards-block.js - getCardsData', error);
    }
  }

  return (
    <div className="cards-container">
      {!errorMessage && users.map((userData) => (
        <UserCard
          key={userData.id.value}
          userData={userData}
        />
      ))}
      {errorMessage &&
        <div>{errorMessage}</div>
      }
    </div>
  );
}

export default CardsBlock;
