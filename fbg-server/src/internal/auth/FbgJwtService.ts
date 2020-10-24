import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './definitions';

@Injectable()
export class FbgJwtService {
  constructor(private readonly jwtService: JwtService) {}

  getToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }
}
