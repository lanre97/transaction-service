export class TransferenceTypePresenter {
  name: string;
}

export class TransactionStatusPresenter {
  name: string;
}

export class FindTransactionPresenter {
  transactionExternalId: string;
  accountExternalIdDebit: string;
  accountExternalIdCredit: string;
  transferenceType: TransferenceTypePresenter;
  transactionStatus: TransactionStatusPresenter;
  value: number;
  createdAt: Date;
}
