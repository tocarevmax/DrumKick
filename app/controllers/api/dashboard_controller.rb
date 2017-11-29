class Api::DashboardController < ApplicationController

  def index
    if logged_in?
      @concerts = current_user.concerts.includes(:artist)
                   .within(100, :origin => [37.792,-122.393])
                   .where('"date_time" > ?', Date.today)
                   .order('date_time ASC')
      render :index
    end
  end

end
