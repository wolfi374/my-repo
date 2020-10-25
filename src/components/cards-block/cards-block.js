/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../ui-kit/user-card';

const apiUrl = 'https://randomuser.me/api/?nat=us&results=20';

const CardsBlock = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getCardsData();
  }, []);

  const getCardsData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data.results);
    } catch (error) {
      console.error('Error from cards-block.js - getCardsData', error);
    }
  }

  return (
    <div>
      {users.map((userData) => (
        <UserCard
          userData={userData}
        />
      ))}
    </div>
  );
}

export default CardsBlock;
