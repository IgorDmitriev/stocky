json.set! @transaction.id do
  json.partial! 'api/transactions/transaction', transaction: @transaction
end
