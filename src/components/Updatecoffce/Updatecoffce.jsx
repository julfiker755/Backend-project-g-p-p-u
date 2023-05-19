import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

const Updatecoffce = () => {
    const [user,setuser]=useState({
        name:"",
        quantity:"100",
        supperlier:"",
        chif:"",
        category:"",
        details:"",
        photo:"",
        tasle:"",
    })
    const {id}=useParams()
    const [coffce,setcoffce]=useState([])
    // getdata
    useEffect(()=>{
        const getdata=async()=>{
            const {data}=await axios.get(`http://localhost:5050/coffce/${id}`)
            setcoffce(data)
        }
        getdata()
    },[])
  // handleinput
    const handleinput=(event)=>{
        const {name,value}=event.target
        if(name === 'quantity'){
            setuser((prevalue)=>({...prevalue,[name]:parseFloat(value)}))
        }else{
            setuser((prevalue)=>({...prevalue,[name]:value}))
        }     
    }

    // handlefrom
    const handlefrom=async(e)=>{
        // http://localhost:5050/coffce
        e.preventDefault()
         axios.put(`http://localhost:5050/coffce/${id}`,user)
         .then(result=>{
           if(result.data.acknowledged){
            Swal.fire({
                title: 'successfull',
                text: 'Your data Update',
                icon: 'success',
                confirmButtonText: 'Update'
              })
           }
         })
    } 
    return (
        <div className='container mx-auto py-4'> 
            <div className='w-full max-w-[800px] text-center mx-auto'>
            <h1 className='font-semibold text-[red] text-5xl'>Update  Coffee</h1>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handlefrom} className='grid grid-cols-2 py-[50px] w-[700px] mx-auto'>
                 <div>
                    <div>
                    <h1 className='text-xl text-white py-1'>Name</h1>
                    <input name="name" defaultValue={coffce.name} onChange={(e)=>handleinput(e)} type="text" placeholder="Enter coffee name" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div>
                    <h1 className='text-xl text-white py-1'>Supplier</h1>
                    <input defaultValue={coffce.supperlier} name="supperlier" onChange={(e)=>handleinput(e)} type="text" placeholder="Enter Supplier name" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div>
                    <h1 className='text-xl text-white py-1'>Category</h1>
                    <input defaultValue={coffce.category} name="category" onChange={(e)=>handleinput(e)} type="text" placeholder="Enter Category name" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                 </div>
                 <div>
                 <div>
                 <h1 className='text-xl text-white py-1'>Chef</h1>
                    <input defaultValue={coffce.chif} name="chif" onChange={(e)=>handleinput(e)} type="text" placeholder="Enter coffee chef" className="input input-bordered input-info w-full max-w-xs" />
                 </div>
                 <div>
                 <h1 className='text-xl text-white py-1'>Taste</h1>
                    <input defaultValue={coffce.tasle} name="tasle" onChange={(e)=>handleinput(e)} type="text" placeholder="Enter Taste" className="input input-bordered input-info w-full max-w-xs" />
                 </div>
                 <div>
                 <h1 className='text-xl text-white py-1'>Details</h1>
                    <input defaultValue={coffce.details} name="details" onChange={(e)=>handleinput(e)} type="text" placeholder="Enter Details name" className="input input-bordered input-info w-full max-w-xs" />
                 </div>
                 </div>
                 <div className='col-span-2'>
                    <h1 className='text-xl text-white py-1'>Photo</h1>
                    <input defaultValue={coffce.photo} name="photo" onChange={(e)=>handleinput(e)} type="text" placeholder="Enter Photo url" className="input input-bordered input-info w-full" />
                    </div>
                    <button className='col-span-2 btn btn-primary my-6'>Add coffice</button>
            </form>

        </div>
    );
};

export default Updatecoffce;