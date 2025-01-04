import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createProductDto: Prisma.ProductCreateInput) {
    return await this.databaseService.product.create({
      data: createProductDto,
    });
  }

  async findAll() {
    return await this.databaseService.product.findMany({});
  }

  async findOne(id: number) {
    return await this.databaseService.product.findUnique({
      where: { id },
      include: {
        description: true,
        _count: {
          select: { reviews: true, tags: true },
        },
        reviews: true,
        tags: true,
      },
    });
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    try {
      const product = await this.databaseService.product.findUnique({
        where: { id },
      });
      if (!product) {
        throw new Error('Product not found');
      }
      return await this.databaseService.product.update({
        where: {
          id,
        },
        data: updateProductDto,
      });
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async remove(id: number) {
    const product = await this.databaseService.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new Error('Product not found');
    }
    return this.databaseService.product.delete({ where: { id } });
  }
}
