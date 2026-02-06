import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SeedService {
  constructor(private prisma: PrismaService) {}

  async run() {}
}
