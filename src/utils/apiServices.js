import axios from "axios";

const BASE_URL = "https://sipjatan.com/hasura/api/rest/";

const TIMEOUT = 30000;

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

class ApiService {
  constructor(baseURL = BASE_URL, timeout = TIMEOUT, headers = HEADERS) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);

    client.interceptors.request.use(this.interceptToken);

    this.client = client;
  }

  handleSuccess(response) {
    return Promise.resolve(response);
  }

  handleError(error) {
    return Promise.resolve(error);
  }

  get(path, params = {}) {
    return this.client.get(path, { params }).then(({ data }) => data);
  }
}

export default ApiService;
