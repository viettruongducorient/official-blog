import RequestHelper from "../helper/request.helper.jsx";
import { appConfig } from "../config/app.config";

export default class Api {
  static getBlogList() {
    return RequestHelper.get(`${appConfig.apiUrl}/blogs`);
  }
}
