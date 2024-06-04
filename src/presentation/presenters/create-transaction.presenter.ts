export default class CreateTransactionPresenter {
  transactionExternalId: string;
  accountExternalIdDebit: string;
  accountExternalIdCredit: string;
  value: number;
  transferenceTypeId: number;
  transactionStatus: string;
  createdAt: Date;
}
