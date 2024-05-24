import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const [wishlist,setWishlist]=useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
  useEffect(()=>{
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
  },[wishlist])
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

    <div>
          <Helmet>
    <title>Wishlist</title>
  </Helmet>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            wishlist.map((item,index)=>{
              return(<tr key={index}>
                <td><img width={"60px"} src={item.image} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                  addToWish(item.title)
                }}>Remove</button></td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
