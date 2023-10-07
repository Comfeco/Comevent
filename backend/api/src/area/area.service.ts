import { Area } from '@db/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private areaRepository: Repository<Area>
  ) {}

  async findByIds(ids: number[]): Promise<Area[]> {
    return await this.areaRepository.findBy({ id: In(ids) });
  }

  async findAll(): Promise<Area[]> {
    return await this.areaRepository.find();
  }
}
