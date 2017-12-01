class Api::DashboardController < ApplicationController

  def index
    if logged_in?
      @concerts = current_user.concerts.includes(:artist)
                  .within(100, :origin => current_user.zip)
                  .where('"date_time" > ?', Date.today)
                  .order('date_time ASC')

      @artists_on_tour = current_user.artists
                  .where('upcoming_events > ?', 0)

      @artists_not_on_tour = current_user.artists
                  .where('upcoming_events = ?', 0)

      render :index
    end
  end

end
