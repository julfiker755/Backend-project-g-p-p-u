import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';
import Swal from 'sweetalert2'

const All = () => {
    const [coffce,setcoffce]=useState([])
    useEffect(()=>{
        const getdata=async()=>{
            const {data}=await axios.get("http://localhost:5050/coffce")
            setcoffce(data)
        }
        getdata()
    },[])

    const handledelete=(data)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Delete your component",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
               axios.delete(`http://localhost:5050/coffce/${data._id}`)
               .then(resultd=>{
                if(resultd.data.deletedCount > 0){
                const cofficee=coffce.filter(co=>co._id !== data._id)
                setcoffce(cofficee)
                 Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
                }
               })
            }
          })
    }
    return (
        <div className='container mx-auto py-4'>
           <div className='grid grid-cols-3 gap-3'>
           {coffce.map(coffce=><Card key={coffce._id} handledelete={handledelete} coffce={coffce}></Card>)}
           </div>
        </div>
    );
};

export default All;