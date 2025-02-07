

import { createClient } from '@sanity/client';



// Create Sanity client
const client = createClient({
  projectId: "uo5y14dg",
  dataset: "production",
  useCdn: false,
  token: "sk3VJmPlQrluxHuelPMN89H3Hk76vqtmXKh2XHGm31Cq9psbf06R4j9FUNXJl8S26MvCMcdusAfuKe3sa4ulEhSSINV6XAvrYVRezqSPeJtxXDgP9mkQ2nZHuIm4yeiu5zm41jzJfoxaOczHZjryWrbIodaZ3559SFsqqQ1GL1o9VtZdfrLr",
  apiVersion: '2021-08-31',
});



// Helper function to upload image to Sanity
async function uploadImageToSanity(imageUrl) {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
      const blob = await response.blob();
  
      const asset = await client.assets.upload("image", blob);
      // console.log("🔥",asset);
      return asset._id;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  }
  
  // Fetch foods data from your custom foods API
  export async function fetchFoodsData() {
    try {
      const foodsResponse = await fetch("https://sanity-nextjs-rouge.vercel.app/api/foods");
      if (!foodsResponse.ok) throw new Error(`Failed to fetch foods: ${foodsResponse.statusText}`);
      const foods = await foodsResponse.json();
  
      // Process and save foods data to Sanity
      const foodPromises = foods.map(async (food, index) => {
        const uniqueId = food.id || `food-${index}-${Date.now()}`;
        const imageAsset = await uploadImageToSanity(food.image);
  
        const sanityFood = {
          _id: `food-${uniqueId}`,
          _type: "food",
          name: food.name,
          category: food.category || null,
          price: food.price,
          originalPrice: food.originalPrice || null,
          tags: food.tags || [],
          description: food.description || '',
          available: food.available !== undefined ? food.available : true,
          image: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset,
            },
          },
        }
  
        await client.createOrReplace(sanityFood)
      })
  
      await Promise.all(foodPromises);
      console.log("Foods data uploaded successfully!");
    } catch (error) {
      console.error("Foods data fetching failed:", error);
      throw error;
    }
  }
  
  
  // Fetch chefs data from your custom chefs API
  export async function fetchChefsData() {
    try {
      const chefsResponse = await fetch("https://sanity-nextjs-rouge.vercel.app/api/chefs");
          console.log("🔥",chefsResponse);
      if (!chefsResponse.ok) throw new Error(`Failed to fetch chefs: ${chefsResponse.statusText}`);
      const chefs = await chefsResponse.json();
  
      const chefPromises = chefs.map(async (chef, index) => {
        const uniqueId = `chef-${index}-${Date.now()}`;
        const imageAsset = await uploadImageToSanity(chef.image);
  
        const sanityChef = {
          _id: uniqueId,
          _type: "chef",
          name: chef.name,
          biography: chef.biography,
          image: imageAsset
            ? {
                _type: "image",
                asset: {
                  _type: "reference",
                  _ref: imageAsset,
                },
              }
            : undefined,
          specialties: chef.specialties || [],
        };
  
        await client.createOrReplace(sanityChef);
      });
  
      await Promise.all(chefPromises);
    } catch (error) {
      console.error("Chefs data fetching failed:", error);
      throw error;
    }
  }