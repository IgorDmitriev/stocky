# @histories.each do |history|
#   json.set! history.created_at.strftime("%m/%d") do
#     json.set! :date, history.created_at.strftime("%m/%d")
#     json.set! :money, history.money
#   end
# end

json.array! @histories do |history|
  json.date history.created_at.strftime("%m/%d")
  json.money history.money
end
