import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import {
  IAPIErrorResponse,
  IAPIResponse,
  IBasicFields,
} from "./request.contract";

const DEFAULT_MESSAGE = "Something went wrong";

const handleRequestAuthorization = (
  req: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
//   const { token } = parseCookies();
//   if (!token) return req;
//   req.headers.setAuthorization(`Bearer ${token}`);
  return req;
};

export abstract class RequestService {
  private readonly http: AxiosInstance;

  private cache: Record<string, { signal: AbortController; date: Date }> = {};

  protected constructor(protected readonly baseURL: string) {
    this.http = axios.create({
      baseURL,
      withCredentials: true,
    });

    this.http.interceptors.request.use((req) => {
      req = handleRequestAuthorization(req);
      const controller = new AbortController();
      if (req.url) {
        req.signal = controller.signal;
        if (this.cache[req.url]) this.cache[req.url].signal?.abort();
        this.cache[req.url] = { signal: controller, date: new Date() };
      }
      return req;
    });
    this.http.interceptors.response.use((res) => {
      if (res.config.url) delete this.cache[res.config.url];
      return res;
    });
  }

  protected handleResponse<T>(
    response: AxiosResponse<T & IBasicFields>
  ): IAPIResponse<T> {
    return response.data;
  }

  protected handleError(error: AxiosError<IAPIErrorResponse>) {
    if (error.name === "AxiosError") {
      let description = "";
      if (Array.isArray(error.response?.data?.message))
        description = error.response?.data?.message.join(", \r\n") ?? "";
      if (typeof error.response?.data?.message === "string") {
        description = error.response?.data.message;
      }
    //   notification.error({
    //     message: "Error",
    //     description: description || DEFAULT_MESSAGE,
    //   });
      return Promise.reject(description || DEFAULT_MESSAGE);
    }
    return Promise.reject(error.message);
  }

  public fetcher = async <T>(
    url: string,
    data?: AxiosRequestConfig
  ): Promise<IAPIResponse<T>> => {
    return this.http
      .get(url, data)
      .then(this.handleResponse)
      .catch(this.handleError);
  };

  public poster = async <T, K>(
    url: string,
    data?: K
  ): Promise<IAPIResponse<T>> => {
    return this.http
      .post(url, data)
      .then(this.handleResponse)
      .catch(this.handleError);
  };

  public putter = async <T, K>(
    url: string,
    data?: K
  ): Promise<IAPIResponse<T>> => {
    return this.http
      .put(url, data)
      .then(this.handleResponse)
      .catch(this.handleError);
  };

  public deleter = async <T>(
    url: string,
    data?: AxiosRequestConfig
  ): Promise<IAPIResponse<T>> => {
    return this.http
      .delete(url, data)
      .then(this.handleResponse)
      .catch(this.handleError);
  };
}
