import axios from 'axios';

const instance = axios.create({ baseURL: 'https://pixabay.com/api' });

export const searchImg = async (search, page) => {
  const { data } = await instance.get(
    `/?&image_type=photo&orientation=horizontal&per_page=12`,
    {
      params: {
        key: '27155167-60085c6995a1a3a14bfd0e86b',
        q: search,
        page,
      },
    }
  );
  return data;
};
