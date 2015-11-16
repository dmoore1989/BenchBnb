class Api::BenchesController < ApplicationController
  def index
    render json: Bench.bench_in_bounds(params["bounds"])
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description, :seating)
  end

end
