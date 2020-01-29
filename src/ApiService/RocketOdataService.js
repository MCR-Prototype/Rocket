import axios from "axios";

export default class RocketOdataService {
  constructor(url) {
    this.apiUrl = url;
    this.Odata = axios.create({
      baseURL: url
    });
  }

  getEntrys(entryList, config) {
    let params = {};
    if (config != undefined) {
      params = {
        $skip: config.skip,
        $count: config.count,
        $top: config.top
      };
    }
    return this.Odata.get(entryList, params)
      .then(response => {
        this.loading = false;
        console.log("getEntrys: ", response.data);
        return response.data;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

  getEntry(entryList, Id) {
    let params = {
      Id: Id
    };
    return axios
      .get(entryList, params)
      .then(response => {
        console.log("getEntrys: ", response.data);
        return response.data;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
}
