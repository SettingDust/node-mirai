const axios = require('axios');

const release = async (host, sessionKey, qq) => {
  const { data } = await axios.post(`${host}/release`, {
    sessionKey, qq,
  });
  return data;
};

module.exports = release;