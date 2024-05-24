import React, { useContext, useState } from 'react'
import './Section2.scss'
import MainContext from '../../context/context'
import Cards from '../Cards/Cards'
const Section2 = () => {
  const {data,setData }=useContext(MainContext)
  const [inpValue,setInpValue]=useState("")

  return (
    <section className='section2'>
      <div className="container">
        <input value={inpValue}  type="text" onChange={(e)=>{
          setInpValue(e.target.value)
        }} />
        <button className='btn btn-secondary' onClick={()=>{
          setSort({field:"title",asc:true})
        }} >A-Z</button>
        <button className='btn btn-secondary' onClick={()=>{
          setSort({field:"title",asc:false})
        }}>Z-A</button>
        <button className='btn btn-secondary' onClick={()=>{
          setSort({field:"price",asc:true})
        }}>Low</button>
        <button className='btn btn-secondary' onClick={()=>{
          setSort({field:"price",asc:false})
        }}>High</button>
        <select name="sort" id="sort">
          <option value="lth">Low to High</option>
          <option value="htl">High to Low</option>
        </select>
        <div className="s2Bottom">
          {
            data
            // .sort((a,b)=>{
            //   if(!sort){
            //     return 0
            //   }
            //   else if(sort.asc){
            //     return (a[field.title]>b[filed.title] ?  a[filed.title]>b[field.title] : 1 ? b[field.title]>a[field.title] : 0)
            //   }
            //   else if(!sort.asc){
            //     return (a[field.title]<b[filed.title] ?  a[filed.title]<b[field.title] : 1 ? b[field.title]<a[field.title] : 0)
            //   }
            // })
            .filter((x)=>x.title.toLowerCase().includes(inpValue.toLowerCase()))
            .map((item,index)=>{
              return(<Cards key={index} item={item} />)
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Section2