task log_users_worth: :environment do
  User.all.each do |user|
    History.create(user_id: user.id, money: user.total_worth)
  end
end
