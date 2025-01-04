import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createReviewDto: Prisma.ReviewCreateInput) {
    return await this.databaseService.review.create({
      data: createReviewDto,
    });
  }

  async findAll() {
    return await this.databaseService.review.findMany({});
  }

  async findOne(id: number) {
    return await this.databaseService.review.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateReviewDto: Prisma.ReviewUpdateInput) {
    try {
      const review = await this.databaseService.review.findUnique({
        where: { id },
      });
      if (!review) {
        throw new Error('Review not found');
      }
      return await this.databaseService.review.update({
        where: {
          id,
        },
        data: updateReviewDto,
      });
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async remove(id: number) {
    const review = await this.databaseService.review.findUnique({
      where: { id },
    });
    if (!review) {
      throw new Error('Review not found');
    }
    return this.databaseService.review.delete({ where: { id } });
  }
}
