import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK) // HTTP response code to be returned by route handler.
  @Post('login')
  async signIn(@Body() signInDto: SignInDto, @Res() response: Response) {
    const access_token = await this.authService.signIn(signInDto);

    // Send JWT in HttpOnly Cookie:
    if (access_token) {
      // Store token in cookie instead of sending it in the response body
      response.cookie('auth_token', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
      });
      return response
        .status(HttpStatus.OK)
        .send({ status: 'success', message: 'Logged in successfully' });
    } else {
      return response
        .status(HttpStatus.UNAUTHORIZED)
        .send({ status: 'error', message: 'Invalid credentials' });
    }
  }

  @Post('register')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Get('logout')
  @HttpCode(HttpStatus.OK)
  async(@Res() response: Response) {
    response.clearCookie('auth_token');
    return response
      .status(HttpStatus.OK)
      .send({ status: 'success', message: 'Logged out successfully' });
  }
}
