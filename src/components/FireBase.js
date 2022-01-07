import React,{useState,useEffect} from 'react'
import {database} from '../firebase'

export const FireBase = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let createUserInDB = async () =>{
       //let response = await database.users.add({name,age}); // create with default id
       let response = await database.users.doc('12345').set({name,age});// create with own id
       console.log(response);
    }

    useEffect(async()=>{
        let uid = 'OFaFYtSWR3rIgTUgemPJ'
        //let data =  await database.users.doc(uid).get(); // individual data
        let data =  await database.users.get();
        //let data =  await database.users.orderBy('age','desc').get();
        data.forEach((obj)=>{console.log(obj.data())})
        console.log(data.data());
    },[])

    let update =async () =>{
        let uid = 'OFaFYtSWR3rIgTUgemPJ'
        await database.users.doc(uid).update({name,age});
    }

    let deletee = async () =>{
        let uid = 'OFaFYtSWR3rIgTUgemPJ'
        await database.users.doc(uid).delete();
    }

    return (
        <>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="age">Age</label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={createUserInDB}>Create</button>
            <button onClick={update}>Update</button>
            <button onClick={deletee}>Delete</button>
            
        </div>
        </>
    )
}

export default FireBase;
