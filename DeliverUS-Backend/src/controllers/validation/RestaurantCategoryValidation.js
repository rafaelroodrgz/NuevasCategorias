import { check } from 'express-validator'
import { RestaurantCategory } from '../../models/models.js'

const checkCategoryDoesNotExist = async (value, { req }) => {
  try {
    const category = await RestaurantCategory.findOne({
      where: { name: req.body.name }
    })
    if (category === null) {
      return Promise.resolve()
    } else {
      return Promise.reject(new Error('The category already exists'))
    }
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

const create = [
  check('name').exists().isString().isLength({ min: 1, max: 50 }).custom(checkCategoryDoesNotExist)

]

export { create }
