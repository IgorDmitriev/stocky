json.fullName @user.full_name
json.sessionToken @user.session_token
json.totalWorth @user.stock_worth + @user.money
json.money @user.money.to_i
json.stockWorth @user.stock_worth.to_i
