import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { json, useParams } from 'react-router'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'

const Detail = () => {
  const {data,setData}=useContext(MainContext)
  const[itemData, setItemData]=useState("")
  const [basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  const [wishlist,setWishlist]=useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
  },[basket,wishlist])
  const {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5000/products/${id}`).then(res=>{
      setItemData(res.data)
      console.log(res.data)
    })
  },[])
  function addToBasket(title) {
    let basketItem=basket.find((x)=>x.title == title)
    if(!basketItem){
      setBasket([...basket,{...itemData,count:1,totalPrice:itemData.price}])
    }else{
      basketItem.count++
      basketItem.totalPrice=basketItem.price * basketItem.count
      setBasket([...basket])
    }
  }
  function addToWish(title) {
    let wishItem=wishlist.find((x)=>x.title==title)
    if(!wishItem){
      setWishlist([...wishlist,{...itemData}])
      alert("item wishliste add olundu")
    }else{
      setWishlist([...wishlist.filter((x)=>x.title!=title)])
      alert("item wishlistden remove olundu")
    }
  }
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",padding:"100px 0px"}}>
                <Helmet>
    <title>Detail</title>
  </Helmet>
      <img width={"300px"} src={itemData.image} alt="" />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"10px"}} className="detailText">
        <h2>{itemData.title}</h2>
        <p>{itemData.description}</p>
        <span>{itemData.price}</span>
        <button className='btn btn-warning' onClick={()=>{
          addToBasket(itemData.title)
        }}>Add to Basket</button>
        <i class="fa-regular fa-heart" onClick={()=>{
          addToWish(itemData.title)
        }}></i>
      </div>
    </div>
  )
}

export default Detail