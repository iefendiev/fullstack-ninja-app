import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/signIn.dto';

const SALT_ROUNDS = 5;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(loginDto: SignInDto) {
    const { email, password } = loginDto;
    const foundUser = await this.usersService.findOne(email);

    // compare hashed password with password from request
    // if they match, return access token
    // if they don't match, throw error
    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    // Generate a JWT which stores user ID and return it here
    const tokenPayload = { id: foundUser.id };
    const access_token = await this.jwtService.signAsync(tokenPayload, {
      expiresIn: '1h',
    });

    return access_token;
  }

  // Sign up
  // 1 . see if email is already in use
  // 2 . hash password
  // 3 . save user to db
  // 4 . return user
  async signUp(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const user = await this.usersService.findOne(email);

    if (user) {
      throw new Error('Email already in use');
    }

    // 2.
    // - generate salt
    // - hash password with salt
    const hash = await bcrypt.hashSync(password, SALT_ROUNDS);
    const hashedUser = { email, password: hash };
    // - save salt and hashed password to db
    return this.usersService.create(hashedUser);
  }
}
