import { Area } from '@db/entities';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards';
import { AreaService } from './area.service';

@ApiTags('user')
@Controller('user')
@UseGuards(JwtAuthGuard)
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Get()
  async findByIds(@Query('ids') ids: string): Promise<Area[]> {
    const parsedIds = ids.split(',').map((id) => +id); // Convertir la cadena "1,2,3" a [1, 2, 3]
    return this.areaService.findByIds(parsedIds);
  }

  @Get('list')
  async findAll(): Promise<Area[]> {
    return this.areaService.findAll();
  }
}
