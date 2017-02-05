@histories.each do |history|
  json.set! history.created_at.strftime("%m/%d") do
    json.set! :date, history.created_at.strftime("%m/%d")
    json.set! :money, history.money
  end
end
