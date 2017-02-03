json.extract! stock, :id, :shares
json.set! :userId, stock.user_id
json.set! :companyId, stock.company_id
json.set! :companyName, stock.company.name
