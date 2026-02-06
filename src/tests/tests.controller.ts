import { Controller, Get, UseGuards } from '@nestjs/common';
import { TestsService } from './tests.service';
import { AuthTokenGuard } from '@utils/guards/auth-login/auth-token.guard';
import type { AuthTokenPayload } from '@utils/interfaces/jwt/auth-token';
import { AuthToken } from '@utils/decorators/auth-token.decorator';

@Controller('tests')
export class TestsController {
  constructor(private readonly testService: TestsService) {}

  @Get()
  @UseGuards(AuthTokenGuard)
  async get(@AuthToken() userAuth: AuthTokenPayload) {
    const test = await this.testService.get();
    return test;
  }
}
