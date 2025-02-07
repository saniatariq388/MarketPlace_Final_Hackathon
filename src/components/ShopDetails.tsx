

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Heart, Minus, Plus, Share2, Star, ShoppingBag, ArrowLeft, ArrowRight, Facebook, Twitter, Youtube, Instagram, ShoppingCart } from "lucide-react"
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ProductDiscription from "./ProductDiscription"
import Product from "./Product"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import React from "react"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface ProductDetails {
  _id: string
  name: string
  price: number
  image: string
  category: string
  description?: string
  reviews: Array<{ rating: number; comment: string }>
}
interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number; // Optional for wishlist and compare
}


export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const [selectedImage, setSelectedImage] = useState(0)
  const [product, setProduct] = useState<ProductDetails | null>(null)
  const [quantity, setQuantity] = useState(1)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" })

  

  const productDetails: ProductDetails = {
    name: searchParams.get("name") || "Product Name",
    price: parseFloat(searchParams.get("price") || "0.00"),
    image: searchParams.get("image") || "/placeholder.svg",
    description: searchParams.get("description") || "No description available",
    category: searchParams.get("category") || "Uncategorized",
    _id: "",
    reviews: []
  }

  const images = [productDetails.image, productDetails.image, productDetails.image, productDetails.image]

  const handleAddToCart = () => {
    if (!productDetails) return
    const cartItem = {
      id: productDetails._id,
      name: productDetails.name,
      price: productDetails.price,
      image: productDetails.image,
      quantity: quantity,
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingItemIndex = existingCart.findIndex((item: ProductDetails) => item._id === cartItem.id)

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += quantity
    } else {
      existingCart.push(cartItem)
    }

    localStorage.setItem("cart", JSON.stringify(existingCart))
    alert("Product added to cart!")
    router.push("/shoppingCart")
  }

  const handleAddToWishlist = () => {
    if (!productDetails) return
    const wishlistItem = {
      id: productDetails._id,
      name: productDetails.name,
      price: productDetails.price,
      image: productDetails.image,
    }

    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    if (!existingWishlist.some((item: ProductItem) => item.id === wishlistItem.id)) {
      existingWishlist.push(wishlistItem)
      localStorage.setItem("wishlist", JSON.stringify(existingWishlist))
      alert("Product added to wishlist!")
    } else {
      alert("Product is already in the wishlist!")
    }
  }

  const handleCompare = () => {
    if (!productDetails) return
    const compareItem = {
      id: productDetails._id,
      name: productDetails.name,
      price: productDetails.price,
      image: productDetails.image,
    }

    const existingCompare = JSON.parse(localStorage.getItem("compare") || "[]")
    if (!existingCompare.some((item: ProductItem) => item.id === compareItem.id)) {
      existingCompare.push(compareItem)
      localStorage.setItem("compare", JSON.stringify(existingCompare))
      alert("Product added to compare list!")
    } else {
      alert("Product is already in the compare list!")
    }
  }

  const handleAddReview = () => {
    if (!productDetails) return
    const updatedProduct = {
      ...productDetails,
      reviews: [...(productDetails.reviews || []), newReview],
    }
    setProduct(updatedProduct)
    setNewReview({ rating: 5, comment: "" })
    // In a real application, you would send this to your backend
    alert("Review added successfully!")
  }



  return (
    <>
     <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-20 h-20 md:w-24 md:h-24 border-2 rounded cursor-pointer ${
                  selectedImage === index ? "border-[#FF9F0D]" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${productDetails.name} thumbnail ${index + 1}`}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className="w-full md:w-3/4 order-1 md:order-2">
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={productDetails.name}
              width={800}
              height={800}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <Badge variant="secondary" className="bg-[#FF9F0D] text-white self-start">
              In stock
            </Badge>
            <div className="flex items-center gap-4 text-gray-600">
              <button className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" /> Prev
              </button>
              <Link href={"/shoppingCarts"}>
                <button className="flex items-center gap-2">
                  Next <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{productDetails.name}</h1>
            <p className="text-gray-600">{productDetails.description}</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-black">${productDetails.price}</div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF9F0D] text-[#FF9F0D]" />
                ))}
              </div>
              <Separator orientation="vertical" className="h-6 hidden sm:block" />
              <span className="text-gray-500">5.0 Rating</span>
              <Separator orientation="vertical" className="h-6 hidden sm:block" />
              <span className="text-gray-500">22 Review</span>
            </div>
            <p className="text-lg text-black mt-4">Dictum/cursus/Risus</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Card className="w-full sm:w-[180px]">
              <CardContent className="flex items-center justify-between p-4">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" color="black" />
                </Button>
                <span className="font-bold text-black">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" color="black" />
                </Button>
              </CardContent>
            </Card>
            <Button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
            >
              Add to Cart
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-black">
            <button onClick={handleAddToWishlist} className="flex items-center gap-2 text-black hover:text-gray-900">
              <Heart className="h-5 w-5" color="black" />
              Add to Wishlist
            </button>
            <button onClick={handleCompare} className="flex items-center gap-2 text-black hover:text-gray-900">
              <Share2 className="h-5 w-5" />
              Compare
            </button>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="text-gray-700">Category:</span>
              <span className="text-gray-500">{productDetails.category}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-700">Tag:</span>
              <span className="text-gray-500">Our Shop</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <span className="text-gray-700">Share:</span>
            <div className="flex gap-4">
              <Link href={"#!"} className="w-6 h-6 hover:text-gray-900">
                <Twitter className="w-full h-full text-black" />
              </Link>
              <Link href={"#!"}>
                <Facebook className="w-full h-full text-black" />
              </Link>
              <Link href={"#!"}>
                <Youtube className="w-full h-full text-black" />
              </Link>
              <Link href={"#!"}>
                <Instagram className="w-full h-full text-black" />
              </Link>
              <Link href={"#!"}>
                <Share2 className="w-full h-full text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-black">Reviews</h2>
        {product && product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? "fill-[#FF9F0D] text-[#FF9F0D]" : "fill-gray-300 text-gray-300"}`}
                  />
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2 text-black">Add a Review</h3>
          <div className="mb-4 w-full sm:w-[250px]">
            <Label htmlFor="rating">Rating</Label>
            <Select
              value={newReview.rating.toString()}
              onValueChange={(value) => setNewReview({ ...newReview, rating: Number.parseInt(value) })}
            >
              <SelectTrigger id="rating">
                <SelectValue placeholder="Select a rating" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <SelectItem key={rating} value={rating.toString()}>
                    {rating} Star{rating !== 1 ? "s" : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4 w-full lg:w-1/2 border-black">
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="Write your review here..."
            />
          </div>
          <Button
            onClick={handleAddReview}
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
          >
            Submit Review
          </Button>
        </div>
      </div>
      <ProductDiscription />
      <Product />
    </div>
  
    </>
  )
}
