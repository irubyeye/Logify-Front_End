import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );

    return response;
  }

  static async getPostById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return response;
  }

  static async getComments(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return response;
  }

  static async login(email, password) {
    const response = await axios.post(
      `http://localhost:7171/logify/v1/user/login`,
      { email, password }
    );

    return response;
  }

  static async register(data) {
    const response = await axios.post(
      `http://localhost:7171/logify/v1/user/register`,
      data
    );
    return response;
  }

  static async getAllCargos(limit, page, query = null, fields) {
    const response = await axios.get(
      `http://localhost:7171/logify/v1/cargos/`,
      {
        params: { limit, page, query, fields },
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );

    return response;
  }

  static async getCargoById(id) {
    const response = await axios.get(
      `http://localhost:7171/logify/v1/cargos/${id}`,
      { headers: { "Cache-Control": "no-cache" } }
    );
    return response;
  }

  static async getAllTrucks(limit, page, query = null, fields) {
    const response = await axios.get(`http://localhost:7171/logify/v1/trucks`, {
      params: {
        limit,
        page,
        query,
        fields,
      },
    });
    return response;
  }

  static async getActiveDeliveries() {
    const response = await axios.get(
      `http://localhost:7171/logify/v1/companies/active-deliveries`,
      { headers: { "Cache-Control": "no-cache" } }
    );

    return response;
  }
}
