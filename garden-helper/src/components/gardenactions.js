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
        let gardenid = sessionStorage.getItem('gardenid');
        if (gardenid) {
            let url = `${baseurl}/api/garden/${gardenid}`;
            return axios.get(url);
        }
    },

    getUserGardens: () => {
        let userid = sessionStorage.getItem('userid');
        if (userid) {
            let url = `${baseurl}/api/user/gardens/${userid}`;
            return axios.get(url);
        }
    },

    recordWatering: (plotid, date, quantity, note) => {
        let url = `${baseurl}/api/watering/add`;

        return axios.post(url, {
            date: date,
            quantity: quantity,
            note: note,
            plotid: plotid,
            gardenid: sessionStorage.getItem('gardenid')
        });
    },

    recordFertilization: (plotid, date, name, note) => {
        let url = `${baseurl}/api/fertilizer/add`;

        return axios.post(url, {
            date: date,
            name: name,
            note: note,
            plotid: plotid,
            gardenid: sessionStorage.getItem('gardenid')
        });
    },

    searchForPlant: (plantSearchTerm) => {
        let url = `${baseurl}/api/garden/plant/search/${plantSearchTerm}`;
        return axios.get(url);
    },

    addProfil: (name,location,image) => {
        let url = `${baseurl}/api/profile/add`;

        return axios.post(url,{
            name:name,
            location:location,
            image:image,
            gardenid: sessionStorage.getItem('gardenid')
        })
    }
}

export default gardenActions;