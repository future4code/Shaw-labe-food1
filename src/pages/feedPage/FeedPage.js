import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../global/GlobalContext";

function FeedPage() {
  const { states, requests } = useContext(GlobalContext)

  useEffect(() => {
    requests.getRestaurants()
  }, [])

  const mapRestaurants = states.restaurants?.restaurants.map((restaurant) => {
    return <div>
      {restaurant.name}
    </div>
  })

  return (
    <div>
      Feed
      {mapRestaurants}
    </div>
  )
}

export default FeedPage;