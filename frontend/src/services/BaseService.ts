import { api } from '../api/api';

class BaseService {
  serviceUrl: string = '';

  constructor(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  async getAll() {
    const response = await api.get(this.serviceUrl);
    return response.data;
  }

  async get(id: number) {
    const response = await api.get(this.serviceUrl + '/' + id);
    return response.data;
  }

  async post(data: any) {
    const response = await api.post(this.serviceUrl, data);
    return response.data;
  }

  async put(id: number, data: any) {
    const response = await api.put(this.serviceUrl + '/' + id, data);
    return response.data;
  }

  async patch(id: number, data: FormData) {
    const response = await api.patch(this.serviceUrl + '/' + id, data);
    return response.data;
  }

  async delete(id: number) {
    const response = await api.delete(this.serviceUrl + '/' + id);
    return response.data;
  }
}

export default BaseService;
