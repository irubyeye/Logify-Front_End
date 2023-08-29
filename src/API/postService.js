import axios, { AxiosHeaders } from "axios";

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

  static async createCargo(data) {
    const response = await axios.post(
      `http://localhost:7171/logify/v1/cargos/placecargo`,
      data
    );

    return response;
  }

  static async getCurrentUserCargos(limit, page, query = null, fields, token) {
    const userToken = token;

    const instance = axios.create({
      baseURL: "http://localhost:7171/logify/v1",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    const response = await instance.get(`/cargos/myCargos`, {
      params: { limit, page, query, fields },
      headers: {
        "Cache-Control": "no-cache",
      },
    });

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

  static async getMyData(id) {
    const response = await axios.get(
      `http://localhost:7171/logify/v1/user/${id}`,
      { headers: { "Cache-Control": "no-cache" } }
    );

    return response;
  }

  static async isAdmin(token) {
    const userToken = token;
    const instance = axios.create({
      baseURL: "http://localhost:7171/logify/v1",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    const response = await instance.get(`/user/isAdmin`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    return response;
  }

  static async hasCompany(userId) {
    const response = await axios.get(
      `http://localhost:7171/logify/v1/companies/has-company/${userId}`
    );

    return response;
  }

  static async companyData(companyId) {
    const response = await axios.get(
      `http://localhost:7171/logify/v1/companies/${companyId}`,
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );

    return response;
  }

  static async userDeliveries(userId) {
    const response = await axios.get(
      `http://localhost:7171/logify/v1/companies/my-deliveries/${userId}`,
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );

    return response;
  }

  static async createDelivery(companyId, data) {
    const response = await axios.post(
      `http://localhost:7171/logify/v1/companies/create-delivery/${companyId}`,
      data
    );

    return response;
  }
}
