import React, {useState,useEffect} from 'react'
import {storage} from '../firebase'

const FireStore = () => {
    const [file,setFile] = useState('');
    const upload = async () =>{
        
        console.log(file);
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3);

        function fn1(snapshot){
            let progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(`Upload is ${progress}% done`);
        }

        function fn2(error){
            console.log(error)
            console.log('Upload Failed');
        }
        
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
            });
}
}
    return (
        <div>
            <label htmlFor="file">File:</label>
            <input type="file" accept="image/*" onChange={(e)=>setFile(e.target.files[0])}/>
            <button onClick={upload}>Upload</button>
        </div>
    )
}

export default FireStore
