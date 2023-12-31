import React from "react"
import { Banner } from "../home/banner/Banner"
import { Card } from "../home/hero/Card"
import { Hero } from "../home/hero/Hero"
import { Product } from "../home/product/Product"
import { Testimonial } from "../home/testimonial/Testimonial"
import { TopProduct } from "../home/topproduct/TopProduct"

export const Home = () => {

  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Testimonial />
    </>
  )
}