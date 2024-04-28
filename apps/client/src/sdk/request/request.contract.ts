export type IBasicFields = {
  _id: string;
  _v?: number;
  createdAt: string;
  updatedAt: string;
};

export type IAPIResponse<T> = T;

export type IAPIErrorResponse = {
  error: string;
  message: string[];
  statusCode: number;
};
