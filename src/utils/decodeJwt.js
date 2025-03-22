import { jwtDecode } from 'jwt-decode';
  const getDecodedJWT = () => {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded); 
        return decoded;
      } catch (error) {
        console.error("Invalid token", error);
        return null;
      }
    }
    return null;
  };
export default getDecodedJWT;