import axios from 'axios';

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error('Axios error:', error);
      return Promise.reject(error);
    }
  );
  return instance;
};

 const axiosInstance = createAxiosInstance();

export default axiosInstance;