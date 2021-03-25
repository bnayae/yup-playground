import { Gender } from './Gender';

export interface IPerson {
  nickName: string;
  email: string;

  givenName?: string;
  surName?: string;

  gender: Gender;
  birthDate?: Date;
  score?: number;
}
