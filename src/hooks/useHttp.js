import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useHttp = (apiFn, params) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    apiFn(params)
      .then(res => setData(res))
      .catch(() => toast.error('Something went wrong!'));
  }, [apiFn, params]);
  return [data, setData];
};

// export const useHttp = (apiFn, params) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await apiFn(params);
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [apiFn, params]);

//   return data;
// };


