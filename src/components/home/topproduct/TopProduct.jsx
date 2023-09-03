import React, { useState } from 'react'
import { topProducts } from '../../assets/data/data'
import { Heading } from '../../common/Heading'
import { ProductItems } from '../product/ProductItems'

export const TopProduct = () => {
    const [data, setdata] = useState(topProducts)
    const allCategories = ["all", ...new Set(data.map((item) => item.category))]
  const [category, setCategory] = useState(allCategories)
  console.log(setCategory)

  const handleFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category)
    setdata(newItem)

    if (category === "all") {
      setdata(topProducts)
      return
    }
  }

  return (
    <>
        <section className="topproduct">
            <div className="container">
                <div className="head">
                    <Heading title='Top Selling Products' desc='Some New Products has arrived. Lets Get it !' />
                    <div className='category'>
              {category.map((category) => (
                <button className='button' onClick={() => handleFilter(category)}>
                  {category}
                </button>
              ))}
            </div>
                </div>
                <ProductItems data={data} />
            </div>
        </section>
    </>
  )
}
