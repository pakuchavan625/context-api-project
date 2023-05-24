import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';

faker.seed(100)
const Home = () => {
    const productArray = [...Array(10)].map(()=>{
        return ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            productName :faker.commerce.productName(),
            price :faker.commerce.price(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        })
    })
    const [product] = useState(productArray)

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Wellcome to Home Page </h1>
        <div className="product-container">
            {product.map((item)=>{
               return  <SingleProduct prod={item}  key={item.userId}/>
            })}
        </div>
    </div>
  )
}

export default Home