export interface IAxiosResponse<T> {
  data: T | null;
  error: string | null;
}
