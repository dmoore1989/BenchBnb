class BenchesController < ApplicationController
  def index
    render json: Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
  end


end
