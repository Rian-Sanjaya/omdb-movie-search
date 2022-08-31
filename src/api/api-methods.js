import axios from 'axios';

export function getAPI(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'GET',
        url: url,
      });
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
