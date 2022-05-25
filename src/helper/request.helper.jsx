// import axios from "axios";

// const instance = axios.create({
//   timeout: 10000,
// });

// const header = {
//   accept: "application/json",
//   contentType: "application/json",
// };

export default class RequestHelper {
  static async get(apiUrl) {
    fetch(apiUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        return data
      });
  }
}
