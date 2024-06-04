import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { CreateTransactionDto } from 'src/infraestructure/dtos/create-transaction.dto';
import { CreateTransactionAdapter } from 'src/infraestructure/adapters/create-transaction.adapter';
import { FindTransactionAdapter } from 'src/infraestructure/adapters/find-transaction.adapter';

@Controller('transactions')
export class TransactionsController {
  private readonly logger: Logger;
  constructor(
    private readonly createTransactionAdapter: CreateTransactionAdapter,
    private readonly findTransactionAdapter: FindTransactionAdapter,
  ) {
    this.logger = new Logger(TransactionsController.name);
  }

  @Post('/')
  async createTransaction(@Body() payload: CreateTransactionDto) {
    const transactionCreated =
      await this.createTransactionAdapter.execute(payload);
    this.logger.log(
      `Transaction ${transactionCreated.transactionExternalId} created`,
    );
    return transactionCreated;
  }

  @Get('/:transactionExternalId')
  async findTransactionById(
    @Param('transactionExternalId') transactionExternalId: string,
  ) {
    return this.findTransactionAdapter.execute(transactionExternalId);
  }
}
