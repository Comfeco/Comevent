import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserWithGoogleDTO {
  @ApiProperty({
    description: 'The Google ID of the user.',
    required: true,
    example: '12345678901234567890',
  })
  @IsNotEmpty()
  @IsString()
  googleId: string;

  @ApiProperty({
    description: 'The email of the user.',
    maxLength: 100,
    example: 'user@example.com',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'The username of the user.',
    maxLength: 50,
    example: 'username',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  username: string;

  @ApiProperty({
    description: 'The first name of the user.',
    maxLength: 50,
    example: 'John',
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  firstName: string;

  @ApiProperty({
    description: 'The last name of the user.',
    maxLength: 50,
    example: 'Doe',
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  lastName: string;

  @ApiProperty({
    description: 'The avatar URL of the user.',
    example: 'https://example.com/avatar.jpg',
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  avatar: string;
}
