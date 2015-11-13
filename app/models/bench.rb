class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.bench_in_bounds(bounds)
    lat1 = bounds["southWest"]["lat"]
    lat2 = bounds["northEast"]["lat"]
    lng1 = bounds["southWest"]["lng"]
    lng2 = bounds["northEast"]["lng"]
    query_arr = ["(lat BETWEEN ? AND ?) AND lng BETWEEN ? AND ?", lat1, lat2, lng1, lng2]
    Bench.where(query_arr)
  end

end
