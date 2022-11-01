import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const ProductPage = () => {

    const {id} = useParams()

    const [product,setProduct] = useState({})

    useEffect(() => {

        const getData = async () => {

            const response = await fetch('https://fakestoreapi.com/products/' + id)

            const data = await response.json()
            console.log(data);

            setProduct({...data})
        }
        getData()

    },[])

  return (
    <div>
        <h2>{product.title}</h2>
    </div>
  )
}

export default ProductPage