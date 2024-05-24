import React, { useContext } from "react";
import MainContext from "../../../context/context";
import axios from "axios";
import { Helmet } from "react-helmet";

const Products = () => {
  const {data,setData}=useContext(MainContext)
  function deleteItem(id) {
    axios.delete(`http://localhost:5000/products/${id}`).then(res=>{
      setData([...data,res.data])
      console.log(data)
    })

  }
  return (
    <div>
                <Helmet>
    <title>Products</title>
  </Helmet>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return(<tr key={index}>
                <td><img width={"60px"} src={item.image} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                  deleteItem(item._id)
                }}>Delete</button></td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Products;
