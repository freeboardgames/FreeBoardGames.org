export interface CheckinResponse {
  result: CheckinResponseStatus;
  credential?: string;
}

export enum CheckinResponseStatus {
  Success = 'success',
  badNickname = 'badnickname',
  // NicknameInUse = 'nicknameinuse',  // TODO(JasonHarrison) are we checking for dups?
}
