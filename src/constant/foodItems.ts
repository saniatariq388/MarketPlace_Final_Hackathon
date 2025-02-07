


export interface FoodItem {
    id: number;
    name: string;
    price: string;
    src: string;
    heartIcon?: boolean;
    cartIcon?: boolean;
    discountPrice?: string;
    arrowIcon?: boolean;
    discountBtn?: boolean;
  }
  
  
  export const ourFoodArray: FoodItem[] = [
      {
          id:1,
          discountBtn: false,
          discountPrice: "$45.00",
          arrowIcon: false,
          heartIcon: true,
          cartIcon: true,
          src: "/images/freshlime.png",
          name: "Fresh Lime",
          price: "$38.00",
  
          
         
        },
        {
          id:2,
          discountBtn: false,
          heartIcon: false,
          cartIcon: false,
          src: "/images/muffin.png",
          name: "Chocolate Muffin",
          price:"$28.00",
          
        },
        {
          id:3,
          discountBtn: false,
          discountPrice: "$45.00",
          heartIcon: false,
          cartIcon: false,
          src: "/images/burgerk.png",
          name: "Burger",
          price: "$21.00",
          
        },
       
        {
          id:4,
          discountBtn: false,
          discountPrice: "$45.00",
          heartIcon: false,
          cartIcon: false,
          src: "/images/drinks.png",
          name: "Drink",
          price: "$21.00",
          
        },
        {
          id:5,
          discountBtn: false,
          discountPrice: "$45.00",
          heartIcon: false,
          cartIcon: false,
          src: "/images/pizza.png",
          name: "Pizza",
          price: "$21.00",
          
        },
        {
          id:6,
          discountBtn: false,
          heartIcon: false,
          cartIcon: false,
          src: "/images/nuts.png",
          name: "Cheese Butter",
          price: "$21.00",
          
        },
        {
          id:7,
          discountBtn: false,
          heartIcon: false,
          cartIcon: false,
          src: "/images/burgerk.png",
          name: "Sandwiches",
          price: "$21.00",
          
        },
        {
          id:8,
          discountBtn: false,
          heartIcon: false,
          cartIcon: false,
          src:"/images/chickenchup.png",
          name: "Cheese Butter",
          price: "$12.00",
          
        },
        {
          id:9,
          discountBtn: false,
          heartIcon: false,
          cartIcon: false,
          src: "/images/cheeseBurger.png",
          name: "Country Burger",
          price: "$45.00",
          
        },
        {
          id:10,
          discountBtn: false,
          discountPrice: "$45.00",
          heartIcon: false,
          cartIcon: false,
          src: "/images/drinks.png",
          name: "drink",
          price: "$23.00",
          
        },
        {
          id:11,
          discountBtn: false,
          heartIcon: false,
          cartIcon: false,
          src: "/images/pizza.png",
          name: "Pizza",
          price: "$43.00",
          
        },
        {
          id:12,
          discountBtn: false,
          discountPrice: "$45.00",
          heartIcon: false,
          cartIcon: false,
          src: "/images/nuts.png",
          name: "Cheese Butter",
          price: "$10.00",
          
        },
        {
          id:13,
          discountBtn: false,
          heartIcon: false,
          cartIcon: false,
          src: "/images/burgerk.png",
          name: "Sandwiches",
          price: "$25.00",
          
        },
        {
          id:14,
          discountBtn: false,
          heartIcon: false,
          cartIcon: false,
          src: "/images/chickenchup.png",
          name: "Chicken Chup",
          price: "$12.00",
          
        },
        {
            id:15,
            discountBtn: false,
            heartIcon: false,
            cartIcon: false,
            src: "/images/cheeseBurger.png",
            name: "Country Burger",
            price: "$45.00",
          
          },
  ]
  
 