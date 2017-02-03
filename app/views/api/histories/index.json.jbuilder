@histories.each do |history|
  json.set! history.created_at do
    json.set! date: history.created_at
    json.set! money: history.money
  end
end
