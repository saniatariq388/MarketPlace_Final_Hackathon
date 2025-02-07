import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landingPage'
import hero from './landingPage-sections/hero'
import about_us from './landingPage-sections/about_us'
import food_category from './landingPage-sections/food_category'
import our_menu from './landingPage-sections/our_menu'
import chefs from './chefs'
import foods from './foods'
import { userSchema } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, hero, about_us, food_category, our_menu, chefs, foods, userSchema],
}
