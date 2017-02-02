import { AsyncStorage } from 'react-native';

async function getToken() {
  try {
    const value = await AsyncStorage.getItem('sessionToken');
    if (value !== null){
      return value;
    } else {
      console.warn('No session token');
    }
  } catch (error) {
    console.warn('Error when getting session token');
  }
}

export const login = (data) => (
  fetch(
    'http://localhost:3000/api/login',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fbAuth: data
      })
    }
  )
)

export const logout = () => (
  getToken()
    .then(token => (
      fetch(
        'http://localhost:3000/api/logout',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'sessionToken': token
          }
        }
      )
    ))
);

export const fetchAllCompanies = (searchText) => (
  getToken()
    .then(token => (
      fetch(
        'http://localhost:3000/api/companies',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'sessionToken': token
          }
        }
      )
    ))
);

export const fetchCompany = (id) => (
  getToken()
    .then(token => (
      fetch(
        `http://localhost:3000/api/companies/${id}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'sessionToken': token
          }
        }
      )
    ))
);
