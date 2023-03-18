import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Params {
  [key: string]: string | number | undefined;
}

const apiURL = process.env.REACT_APP_API_URL as string;

export class ApiService {
  API_URL: string;

  constructor() {
    this.API_URL = apiURL;
  }

  public get = async (
    url: string,
    params: Params = {}
  ): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig = {
      url,
      params,
      method: 'GET',
      baseURL: apiURL,
    };

    return axios(config);
  };

  public post = async (
    url: string,
    data: unknown = {},
    params: Params = {}
  ): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig = {
      url,
      data,
      params,
      method: 'POST',
      baseURL: apiURL,
    };

    return axios(config);
  };

  public patch = async (
    url: string,
    data: unknown = {},
    params: Params = {}
  ): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig = {
      url,
      data,
      params,
      method: 'PUT',
      baseURL: apiURL,
    };

    return axios(config);
  };

  public delete = async (
    url: string,
    params: Params = {}
  ): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig = {
      url,
      params,
      method: 'DELETE',
      baseURL: apiURL,
    };

    return axios(config);
  };
}
