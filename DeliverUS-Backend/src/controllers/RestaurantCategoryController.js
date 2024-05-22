import { RestaurantCategory } from '../models/models.js'
const index = async function (req, res) {
  try {
    const restaurantCategories = await RestaurantCategory.findAll()
    res.json(restaurantCategories)
  } catch (err) {
    res.status(500).send(err)
  }
}

const create = async function (req, res) {
  const newRestaurantCategory = RestaurantCategory.build(req.body)
  newRestaurantCategory.userId = req.user.id // usuario actualmente autenticado
  try {
    const restaurant = await newRestaurantCategory.save()
    res.json(restaurant)
  } catch (err) {
    res.status(500).send(err)
  }
}

const RestaurantCategoryController = {
  index,
  create
}
export default RestaurantCategoryController
