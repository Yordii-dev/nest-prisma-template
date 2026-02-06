import { Injectable } from '@nestjs/common';
import { AuthTokenPayload } from '@utils/interfaces/jwt/auth-token';
import { PrismaService } from '@utils/prisma/prisma.service';

@Injectable()
export class TestsService {
  constructor(private readonly prismaService: PrismaService) {}

  async get() {
    return 'test';
  }
}
