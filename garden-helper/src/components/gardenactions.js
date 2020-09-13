import axios from 'axios';
const baseurl = 'http://127.0.0.1:3009';

const gardenActions = {
    createNewGarden: (gardenName) => {

        let url = `${baseurl}/api/garden/add`;

        return axios.post(url, {
            name: gardenName,
            userid: sessionStorage.getItem('userid')
        });
    },
    createNewPlot: (plotInfo) => {
        let url = `${baseurl}/api/plot/add`;
        plotInfo.userid = sessionStorage.getItem('userid');
        plotInfo.gardenid = sessionStorage.getItem('gardenid');

        return axios.post(url, plotInfo);
    },

    getGarden: () => {
        let url = `${baseurl}/api/garden/${sessionStorage.getItem('gardenid')}`;
        return axios.get(url);
    }

    

}

export default gardenActions;