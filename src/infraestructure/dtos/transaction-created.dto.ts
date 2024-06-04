import { IsUUID, IsNumber } from 'class-validator';

export class TransactionCreatedDto {
  @IsUUID()
  transactionExternalId: string;
  @IsUUID()
  accountExternalIdDebit: string;
  @IsUUID()
  accountExternalIdCredit: string;
  @IsNumber()
  tranferTypeId: number;
  @IsNumber()
  value: number;

  constructor(init: Partial<TransactionCreatedDto>) {
    Object.assign(this, init);
  }
}
