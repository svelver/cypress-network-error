import APIAbstract from "./api-abstract";

export default class DemoAPI extends APIAbstract {
  static basePathSuffix = "/demo";

  static async list(): Promise<string> {
    return this.call("/").then((data) => {
      return "LIST success, data: " + data;
    });
  }

  static async get(id: string): Promise<string> {
    return this.call(`/${id}`).then((data) => {
      return "GET success, data: " + data;
    });
  }
}
