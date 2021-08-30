// Constants.js
const prod = {
 url: {
  API_URL: 'https://my-demo.xyz/visa/api'
 }
};

const dev = {
 url: {
  API_URL: 'http://localhost/admin/api'
 }
};

export const config = prod;//process.env.NODE_ENV === 'development' ? dev : prod;