import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 5295996d862a92dfcfb3b520105b09cad65dee305eda8a0f246229d6ac2850ff"
      }
});