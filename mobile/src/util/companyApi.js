export const fetchAllCompanies = () => (
  fetch('http://localhost:3000/api/companies', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
);
