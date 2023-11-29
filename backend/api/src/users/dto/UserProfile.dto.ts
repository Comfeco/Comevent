import { Event } from '@db/entities';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, MaxLength } from 'class-validator';

export class UserProfileDTO {
  @ApiProperty({
    description: 'Username of the user',
    example: 'johndoe',
    type: 'string',
  })
  @IsString()
  @MaxLength(50)
  username!: string;

  @ApiPropertyOptional({
    description: 'Avatar URL of the user',
    example: 'https://example.com/avatar.jpg',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiPropertyOptional({
    description: 'Description of the user',
    example: 'Experienced web developer...',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Areas of expertise of the user',
    example: 'Web Development, JavaScript',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  userAreas?: string[];

  @ApiPropertyOptional({
    description: 'Social networks of the user',
    type: 'array',
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  socialNetworks?: string[];

  @ApiPropertyOptional({
    description: 'Events the user has participated in',
    example: ['Tech Conference 2023', 'Webinar on JavaScript'],
    type: 'array',
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  events?: Event[];
}
