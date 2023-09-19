import axios from 'axios';

export const fetchData = async () => {
  const res = await axios.get('http://test.vanillabridge.com/test_data');
  return res.data;
};
