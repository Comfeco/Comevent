import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    description: 'The Google ID of the user.',
    required: false,
    example: '12345678901234567890',
  })
  @IsOptional()
  @IsString()
  googleId?: string;

  @ApiProperty({
    description: 'The Facebook ID of the user.',
    required: false,
    example: '12345678901234567890',
  })
  @IsOptional()
  @IsString()
  facebookId?: string;

  @ApiProperty({
    description: 'The Discord ID of the user.',
    required: false,
    example: '12345678901234567890',
  })
  @IsOptional()
  @IsString()
  discordId?: string;

  @ApiProperty({
    description: 'The email of the user.',
    maxLength: 100,
    example: 'user@example.com',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  email!: string;

  @ApiProperty({
    description: 'The username of the user.',
    maxLength: 50,
    example: 'username',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  username!: string;

  @ApiProperty({
    description: 'IDs of areas of interest for the user.',
    required: false,
    type: [Number],
    example: [1, 3, 5],
  })
  @IsOptional()
  areasOfInterest?: number[];

  @ApiProperty({
    description: 'The password of the user.',
    maxLength: 100,
    example: 'password123',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  password!: string;
}
