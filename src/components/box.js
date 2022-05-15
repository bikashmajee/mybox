import React,{useEffect,useState} from 'react'

import "./box.css"
const Box = () => {
  const [user,setUser]=useState([]);
  const [page,setPage]=useState(1);
  const getUser=async()=>{
    // const  responce=await fetch('https://api.github.com/users');
    // const  responce=await fetch('https://jsonplaceholder.typicode.com/photos');
    // const  responce=await fetch('https://jsonplaceholder.typicode.com/users');
    const  responce=await fetch(`https://reqres.in/api/users?page=${page}`);  //https://reqres.in/
    const data =await responce.json()
    console.log(data.data);    
    setUser( data.data);

  }
  // function login (){
  //   let item ={
  //     email: "eve.holt@reqres.in",
  //     password: "cityslicka",
  //     token: "QpwL5tke4Pnpja7X4"
  // }
  //  fetch(`https://reqres.in/api/login`,{
  //     method: 'POST',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type' : 'application/json',
        
  //     },
  //     body:JSON.stringify(item)
  //   }).then((res)=>{
  //       res.json().then((resp)=>{
  //         console.log(resp);
  //       })
  //   })
  //   // const data =await responce.json()
  // }
  useEffect(()=>{
    getUser();
    // login();
},[]);
function click(a){
  // console.log(a);
  if(a==1){
    setPage(page+1);
    console.log("clicked :" ,page);
    getUser();
  }else{
    setPage(page-1);
    console.log("clicked :" ,page);
    getUser();
  }
}
console.log(user.length);
  return (
    <>
    <h1>User List </h1><p>Note : Only 2 Pages here. </p>
      <div className='flex-container'>
        
        {
          user.length!=0?
          user.map((curElem)=>{
            return(
              <>
              <div className='card'>
              <img src={curElem.avatar} alt='img'/> 
              <div className='right-body'>
                <h5>{curElem.first_name}</h5><p>{curElem.email}</p>
                <div className='details'>
                  <div><b>Artical</b><p>38</p></div>
                  <div><b>Followers</b><p>980</p></div>
                  <div><b>Followers</b><p>980</p></div>
                </div>
              </div>
            </div>
              </>
            )
          }) 
          : <div>Data not found!</div>
          
        }
        
           
          
      </div>
      <div className='page-no'>
          <button onClick={()=>click(0)}> left </button>
          <button onClick={()=>click(1)}> right  </button>
      </div>
     
    </>
  )
}

export default Box