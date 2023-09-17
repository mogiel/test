import { Injectable } from '@nestjs/common';
import { DataSource } from "typeorm";

@Injectable()
export class ProductsService {  constructor(private readonly dataSource: DataSource) {}
  async getHello() {
    return await this.dataSource.query('select * from public.products p;');
  }}
