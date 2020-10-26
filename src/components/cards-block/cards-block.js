/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../ui-kit/user-card';
import './cards-block.scss';

const apiUrl = 'https://randomuser.me/api/?nat=us&results=21';
let basicUserData = [];

const CardsBlock = ({ searchText, genderFilter }) => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getCardsData();
  }, []);

  useEffect(() => {
    findUsersByName();
  }, [searchText]);

  useEffect(() => {
    filterUsersByGender();
  }, [genderFilter]);

  const getCardsData = async () => {
    try {
      setErrorMessage('');

      const response = await axios.get(apiUrl);

      setUsers(response.data.results);
      basicUserData = response.data.results;
    } catch (error) {
      setErrorMessage('Не удалось загрузить пользователей!');
      console.error('Error from cards-block.js - getCardsData', error);
    }
  }

  const findUsersByName = () => {
    setErrorMessage('');

    if (searchText) {
      const sampleData = basicUserData.slice();
      const searchTextLowerCase = searchText.toLowerCase();
      let selectedUsers = [];

      if (genderFilter === 'all') {
        selectedUsers = sampleData.filter((user) =>
          (user.name.first.toLowerCase().includes(searchTextLowerCase) ||
            user.name.last.toLowerCase().includes(searchTextLowerCase))
        );
      } else {
        selectedUsers = sampleData.filter((user) =>
          ((user.name.first.toLowerCase().includes(searchTextLowerCase) ||
            user.name.last.toLowerCase().includes(searchTextLowerCase)) &&
            user.gender === genderFilter
          )
        );
      }

      setUsers(selectedUsers);

      if (selectedUsers.length === 0) setErrorMessage('Пользователь не найден');
    } else {
      filterUsersByGender();
    }
  }

  const filterUsersByGender = () => {
    let selectedUsers = [];
    const sampleData = basicUserData.slice();

    if (genderFilter === 'all') {
      setUsers(basicUserData);
    } else {
      selectedUsers = sampleData.filter((user) => user.gender === genderFilter);
      setUsers(selectedUsers);
    }

    if (searchText) {
      findUsersByName();
    }
  }

  return (
    <>
      {!errorMessage ?
        <div className="cards-container">
          {users.map((userData) => (
            <UserCard
              key={userData.id.value}
              userData={userData}
            />
          ))}
        </div>
        :
        <div>{errorMessage}</div>
      }
    </>
  );
}

export default CardsBlock;
