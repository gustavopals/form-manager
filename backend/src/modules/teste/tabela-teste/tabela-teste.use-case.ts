import { PrismaService } from 'src/shared/services/prisma.service';

export class TabelaTesteUseCase {
  prisma = new PrismaService();
  constructor() {}

  async index(filter, order, page: number = 1, pageSize: number = 10) {
    const result = await this.prisma.tabelaTeste.findMany({
      where: {
        deleted: false,
      },
      orderBy: {
        id: 'asc',
      },
      skip: (page - 1) * pageSize,
      take: +pageSize,
    });
    return result;
  }

  async show(id: number) {
    const result = await this.prisma.tabelaTeste.findUnique({
      where: {
        id,
      },
    });
    return result;
  }

  async storeOrUpdate(data) {
    const { id, ...rest } = data;
    if (id) {
      const result = await this.prisma.tabelaTeste.update({
        where: {
          id,
        },
        data: rest,
      });
      return result;
    }
    const result = await this.prisma.tabelaTeste.create({
      data: rest,
    });
    return result;
  }

  async delete(id) {
    const result = await this.prisma.tabelaTeste.update({
      where: {
        id,
      },
      data: {
        deleted: true,
      },
    });
    return result;
  }
}
