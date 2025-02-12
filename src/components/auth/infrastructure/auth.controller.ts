import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../application/service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async regisrter(
    @Body()
    body: {
      name: string;
    },
  ) {
    const id = crypto.randomUUID();
    const apiKey = crypto.randomUUID();
    const createdAt = new Date();

    await this.authService.registerApp({
      id,
      apiKey,
      name: body.name,
      createdAt,
    });

    return { message: 'Event tracked successfully' };
  }
}
