import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Basket = () => {
  const [basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))

  },[basket])
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
  function removeFromBasket(title) {
    let target=basket.find((x)=>x.title==title)
    if(target.count > 1){
      target.count--
      target.totalPrice-=target.price
      setBasket([...basket])
    }else{
      setBasket([...basket.filter((x)=>x.title!=title)])
    }
  }
  return (
    <div>
                <Helmet>
    <title>Basket</title>
  </Helmet>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">TotalPrice</th>
            <th scope="col">Add</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            basket.map((item,index)=>{
              return(<tr key={index}>
                <td><img width={"60px"} src={item.image} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>
                <td>{item.totalPrice}</td>
                <td><button className="btn btn-primary" onClick={()=>{
                  addToBasket(item.title)
                }}>Add</button></td>
                <td><button className="btn btn-danger" onClick={()=>{
                  removeFromBasket(item.title)
                }}>Remove</button></td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
