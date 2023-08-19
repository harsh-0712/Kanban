import React,{useEffect, useState} from 'react'
import List from '../List/List'
import axios from 'axios'
import helper from '../helper/helper'
import Topbar from '../topbar/Topbar'
import './home.css'

var tickets=[],users=[];

function Home() {


  const [list,setList]=useState([])
  const [property,setProperty]=useState('status')
  const [order,setOrder]=useState('priority')

  const url ='https://api.quicksell.co/v1/internal/frontend-assignment';



  const callApi=async()=>{
    var {data} = await axios.get(url);
    tickets=data.tickets
    users=data.users
    setList(helper(tickets,users,property,order))
  }

  useEffect(()=>{
    setList(helper(tickets, users, property,order))
  },[property,order])

  useEffect(()=>{
    console.log(list);
  },[list])

  useEffect(()=>{
    callApi();
  },[]);



  return (
        <div className='container'>
          <div><Topbar setProperty={setProperty} setOrder={setOrder}/></div>
          <div className='collection'>
              {
                list.length &&
                  list.map((elm,index) => {
                      return <List list={list[index]} property={property} />
                  })
              }
          </div>
        </div>
  )
}

export default Home