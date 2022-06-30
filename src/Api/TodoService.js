import axios from "axios";

export class TodoService {
  static async getAll(limit = 12, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );

    return response;
  }
}
