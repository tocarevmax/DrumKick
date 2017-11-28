class Api::TrackingsController < ApplicationController

  def show
    if logged_in?
      @tracking = current_user.trackings
                  .find_by(id: params[:id])

      if @tracking
        render json: @tracking
      else
        render json: ["Tracking with id #{params[:id]} either doesn't exist or doesn't belong to current user."], status: 422
      end
    else
      render json: ["Need to be logged in to see this tracking"], status: 422
    end
  end

  def create
    if logged_in?
      @tracking = Tracking.new(tracking_params)
      @tracking.user_id = current_user.id

      if @tracking.save
        render json: @tracking
      else
        render json: @tracking.errors.full_messages, status: 422
      end
    else
      render json: ["Need to be logged in to track artists"], status: 422
    end
  end

  def destroy
    if logged_in?
      @tracking = current_user.trackings
                  .find_by(id: params[:id])
      if @tracking
        @tracking.destroy
        render json: @tracking
      else
        render json: ["Tracking with id #{params[:id]} either doesn't exist or doesn't belong to current user."], status: 422
      end
    else
      render json: ["Need to be logged in to delete tracking"], status: 422
    end
  end

  private
  def tracking_params
    params.require(:tracking).permit(:artist_id)
  end
end
