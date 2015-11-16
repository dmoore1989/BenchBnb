class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :seating, presence: true

  def self.bench_in_bounds(params)
    bounds = params["bounds"]
    if params["min"] && params["max"]
      min = params["min"] != "" ? params["min"] : 0
      max = params["max"] != "" ? params["max"] : nil
    else
      min = 0
    end
    lat1 = bounds["southWest"]["lat"]
    lat2 = bounds["northEast"]["lat"]
    lng1 = bounds["southWest"]["lng"]
    lng2 = bounds["northEast"]["lng"]
    query_arr = ["(lat BETWEEN ? AND ?) AND lng BETWEEN ? AND ?", lat1, lat2, lng1, lng2]
    benches = Bench.where(query_arr)

    if max
      benches.where("seating BETWEEN ? AND ?", min, max)
    else
      benches.where("seating > ?", min)
    end
  end

end
