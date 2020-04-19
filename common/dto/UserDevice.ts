export interface UserDevice {
  token?: string;
}

export interface NewDeviceResponse {
  result: NewDeviceResponseStatus;
  token: string;
}

export enum NewDeviceResponseStatus {
  Success = 'success',
  Exception = 'exception',
  // NicknameInUse = 'nicknameinuse',  // TODO(JasonHarrison) are we checking for dups?
}
