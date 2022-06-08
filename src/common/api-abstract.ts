/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export enum APIMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export default interface RequestConfiguration {
  method: APIMethod;
  data?: any;
  parameters?: any;
}

/**
 * Defines the basic structure of API classes.
 */
export default abstract class APIAbstract {
  /// Defines the base path for the whole API, e.g. 'https://www.example.com/api/v2'.
  /// The basePath contains the default API URL for this app. Override if needed.
  /// IMPORTANT: Don't end URL with a trailing slash '/'.
  static basePath = "http://localhost:3838"; //process.env.VUE_APP_API_BASE_URL;

  /// Defines a specific suffix for a group of api calls, e.g. '/user'.
  /// IMPORTANT: Suffix needs to start with a '/'.
  /// Leave it empty if there is no suffix (don't set it to '/' in this case).
  static basePathSuffix = "";

  /**
   * Makes an API call to basePath + basePathSuffix + path.
   *
   * @param {string} path The path to the endpoint.
   * @param {RequestConfiguration} config Configuration for the request
   * @param {APIMethod} config.method HTTP request method.
   * @param {any} config.data Body data of request.
   * @param {any} config.parameters Query parameters of request.
   * @returns {Promise<any>} Reponse data from request in a promise.
   */
  static async call(
    path: string,
    { method, data, parameters }: RequestConfiguration = {
      method: APIMethod.GET,
    }
  ): Promise<any> {
    const response = await axios.request({
      url: path,
      baseURL: this.basePath + this.basePathSuffix,
      method,
      data,
      params: parameters,
    });
    return response.data;
  }
}

/**
 * Formats JSON object into a standardized request object.
 *
 * - Converts null or undefined values into empty strings
 * - Converts Date objects into strings of format yyyy-MM-dd
 * @param json JSON object to format
 * @returns Formatted JSON
 */
function formatJSON(json: any) {
  // Create a copy and store formatted values in the copy
  const result: any = {};

  for (const key in json) {
    if (json[key] === undefined || json[key] === null) {
      result[key] = "";
    } else if (typeof json[key] === "object")
      result[key] = formatJSON(json[key]);
  }
  return result;
}

axios.interceptors.request.use(
  (config) => {
    if (["get", "post", "put", "patch"].includes(config.method ?? "")) {
      if (config.params) {
        config.params = formatJSON(config.params);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
