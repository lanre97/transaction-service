import { Type } from 'class-transformer';
import { IsNumber, IsUUID } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID()
  accountExternalIdDebit: string;
  @IsUUID()
  accountExternalIdCredit: string;
  @IsNumber()
  @Type(() => Number)
  transferenceTypeId: number;
  @IsNumber()
  @Type(() => Number)
  value: number;
}
