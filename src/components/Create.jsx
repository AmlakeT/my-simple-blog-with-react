import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Amlake')
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefualt();
        const blog = {title, body, author};
        
    fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
      })
        .then(response => {
          if (response.ok) {
            history.push('/')
          } else {
            throw new Error('Error creating blog post');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    


  return (
    <>
      <h1 className=" flex justify-center text-lg font-serif ">Write What Your Feeling</h1>
      <form onSubmit={handleSubmit} className="flex flex-col  px-10">
        <label className="font-serif text-lg py-2 ">Blog Title:</label>
        <input
        className=" border py-2 mb-10"
         type="text"
         required
         value={title}
         onChange={(e) => setTitle(e.target.value)}
        />
        <label className="font-serif text-lg py-2">Your Blog:</label>
         <textarea
          className="border mb-10 py-10" 
          required 
          value={body}
          onChange={(e) => setBody(e.target.value)}  
          ></textarea>
          <label htmlFor="">Blog Athor:</label>
         <select value={author} onChange={(e) => setAuthor(e.target.value)} >
            <option value="Amlake">Amlake</option>
            <option value="Amlake">Amlake</option>
            <option value="Amlake">Amlake</option>
            <option value="Amlake">Amlake</option>

         </select>

        <button type="submit" className="rounded-md mx-auto block  px-3 py-1   border hover:bg-zinc-100  hover:text-black   font-serif text-xl ">Add Blog</button>
    
      </form>

        <pre>
          this is a formated text
          <p>this is the main paragraph</p>
          <br />
          <p>this paragaph one</p>
          <hr />
        </pre>

      </>
  );
}
 
export default Create;