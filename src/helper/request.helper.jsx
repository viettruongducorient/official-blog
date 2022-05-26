import axios from "axios";

const instance = axios.create({
  timeout: 10000
});

const header = {
  accept: "application/json",
  contentType: "application/json",
};

export default class RequestHelper {
  static async get(apiUrl, params) {
    return instance
      .get(apiUrl, {
        headers: header,
        params
      })
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        throw e;
      });
  }
}
