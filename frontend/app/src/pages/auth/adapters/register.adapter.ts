import { BaseResponse } from '@types';
import { managerError } from '@utils';
import { IUserResponse } from '../types';

export const RegisterAdapter = (
  resp: BaseResponse<IUserResponse | undefined>
): BaseResponse<IUserResponse | undefined> => {
  const { data, response } = resp;

  const { code, message, status, success } = response;

  if (!success) {
    return managerError(resp);
  }

  const { id, email, username } = data as IUserResponse;

  return {
    data: {
      id,
      email,
      username,
    },
    response: {
      status,
      success,
      code,
      message,
    },
  };
};
