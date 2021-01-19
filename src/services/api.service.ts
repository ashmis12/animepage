import axios, { AxiosResponse } from 'axios';
import HttpStatus from 'http-status-codes';

function handleError(response: AxiosResponse) {
  let message = response.statusText;
  if (!message) {
    response.status === 401
      ? (message = 'You are not authorized. Please check your credentials')
      : (message = 'Unable to make the server call');
  }
  throw new Error(message);
}

const makeServerGet = async (
  requestUrl: any,
  header: any,
  queryParams: any
) => {
  const response = await axios({
    method: 'get',
    url: requestUrl,
    headers: header,
    params: queryParams,
  });
  if (response.status !== HttpStatus.OK) {
    return handleError(response);
  }
  return response.data;
};

export { makeServerGet };
