class Api::HistoriesController < ApplicationController

  def index
    @histories =
      History
        .where('user_id = ?', current_user.id)
        .order(:created_at)
  end

end
