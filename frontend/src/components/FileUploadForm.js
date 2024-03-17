import React, { useState , useEffect} from 'react';

const FileUploadForm = () => {
  const [title,setTitle] = useState("")
  const [file,setFile] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("title",title)
    formData.append("file",file)

    console.log(title,file);
  }

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
