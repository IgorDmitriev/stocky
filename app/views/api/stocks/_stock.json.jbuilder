json.extract! stock, :id, :shares
json.set! :userId, stock.user_id
json.set! :companyId, stock.company_id
json.set! :companyName, stock.company.name
json.set! :companySymbol, stock.company.symbol
json.set! :companyPrice, stock.company.price
json.set! :companyPercentChange, stock.company.price_percent_change
