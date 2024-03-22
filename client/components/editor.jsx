import { useMemo, useState } from "react";
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";

function Myeditor() {
   const  [blog, setblog] = useState();
   const ReactQuill = useMemo(()=> dynamic(()=> import('react-quill'), {ssr: false}), [])
 
   return <>
      <h1>Write a Blog</h1>
      <ReactQuill theme="snow" value={blog} onChange={setblog}/>
   </>
  
}

export default Myeditor;