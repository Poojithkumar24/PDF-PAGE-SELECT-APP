import React, { useState , useEffect} from 'react';
import axios from "axios";

const FileUploadForm = () => {
  const [title,setTitle] = useState("")
  const [file,setFile] = useState("")
  const [allPdf,setAllPdf] = useState(null)

  useEffect(()=>{
    getPdf()
  },[])

  const getPdf = async()=>{
    const result = await axios.get("http://localhost:4000/get-files")
    console.log(result.data.data);
    setAllPdf(result.data.data)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("title",title)
    formData.append("file",file)

    console.log(title,file);

    const result = await axios.post("http://localhost:4000/upload-files",
    formData,
    {
      headers:{"Content-Type": "multipart/form-data"}
    }
    );
    
    console.log(result);
  }
;
  return ( 
    <div className='bg-slate-400'>
      <form className='h-screen flex justify-center items-center' onSubmit={handleSubmit}>
        <h4> Upload Pdf  </h4>
        <input 
        className=''
          type="text"
          placeholder='Title'
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type="file"
          className=''
          accept='application/pdf'
          required
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className=''
          type='submit'
        >
          Submit
        </button>
       
      </form>
    </div>
   );
}
 
export default FileUploadForm;
