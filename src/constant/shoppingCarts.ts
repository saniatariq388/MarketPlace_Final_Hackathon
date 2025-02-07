

interface CartItems {
  id: number
  name: string
  price: number
  rating: number
  image: string
  quantity: number
}

export const CartItem: CartItems[] = [
    {
      id: 1,
      name: 'Burger',
      price: 35.00,
      rating: 3,
      image: '/images/burgercart.png',
      quantity: 1
    },
    {
      id: 2,
      name: 'Fresh Lime',
      price: 25.00,
      rating: 3,
      image: '/images/drink.png',
      quantity: 1
    },
    {
      id: 3,
      name: 'Pizza',
      price: 15.00,
      rating: 3,
      image: '/images/pizza.png',
      quantity: 1
    },
    {
      id: 4,
      name: 'Chocolate Muffin',
      price: 45.00,
      rating: 3,
      image: '/images/cupcakes.png',
      quantity: 1
    },
    {
      id: 5,
      name: 'Coffee',
      price: 15.00,
      rating: 3,
      image: '/images/coffee1.png',
      quantity: 1
    }
  ]