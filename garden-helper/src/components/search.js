import axios from 'axios';

const search = {
    search: async function search(query) {
       
        let url = "localhost:3009/api/search/" + query;
       
        let response = await axios.get(url);
        console.log(response);
        return response;
    }
}

export default search;