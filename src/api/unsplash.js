import axios from 'axios';

export const unsplashApi = {
  baseUrl: 'https://api.unsplash.com',
  defaultParams: {
    client_id:
      'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
  },
  fetchRandomPhotos(params = { count: 1 }) {
    return axios.get(`${this.baseUrl}/photos/random`, {
      params: { ...this.defaultParams, ...params },
    });
  },
};
