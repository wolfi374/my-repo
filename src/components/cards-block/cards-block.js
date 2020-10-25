import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      console.log(users);
    } catch (error) {
      console.error('Error from cards-block.js - getCardsData', error);
    }
  }

  return (
    <div>
      {users.map((userData) => <div>{userData.name.last}</div>)}
    </div>
  );
}

export default CardsBlock;
