export const login = (data) => (
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fbAuth: data
    })
  })
);

// export const logout = () => (
//
// );
