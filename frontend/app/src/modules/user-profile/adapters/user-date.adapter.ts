import { BaseResponse } from '@types';
import { managerError } from '@utils';
import { IUserProfile } from '../types';

export const DataUserAdapter = (
  resp: BaseResponse<IUserProfile | undefined>
): BaseResponse<IUserProfile | undefined> => {
  const { data, response } = resp;

  const { code, message, status, success } = response;

  if (!success) {
    return managerError(resp);
  }

  const { username, avatar, description, socialNetworks, userAreas, events } =
    data as IUserProfile;

  return {
    data: {
      username,
      avatar,
      description,
      socialNetworks,
      userAreas,
      events,
    },
    response: {
      status,
      success,
      code,
      message,
    },
  };
};
