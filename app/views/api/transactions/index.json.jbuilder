@transactions.each do |transaction|
  json.set! transaction.id do
    json.parial! 'api/transactions/transaction', transaction: transaction
  end
end
