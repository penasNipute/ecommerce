



export function Ads(){

  return(
    <div className="bg-blue-100 py-8 font-Poppins">
      <div className="flex justify-center border-b border-black py-4">
        <h1 className=" font-semibold text-5xl">Post Ad</h1>
      </div>
      

      <form className="flex flex-col gap-4 w-4/5 mx-auto pt-5">
      <h2 className="font-semibold text-xl">Add Photos</h2>
      <p>First picture  is the title picture Grab & dra photos to change the order</p>
      <span>Supported format are .jpg .gif and .png</span>

        <input 
          className="w-3/5 h-10" 
          type="file" 
          required 
          accept="image/png, image/jpg, image/gif" 
        />

        <input 
          required 
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md" 
          type="text" 
          placeholder="Product name"
        />

        <input
         required
           className=" w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md appearance-none scroll-smooth" 
           id="number" 
           type="number" 
           min="0" 
           placeholder="Price"
        />

        <input
          required
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md" 
          type="text" 
          placeholder="Description" 
        />

        <input 
          required  
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md"
          type="text" 
          placeholder="University Name" 
        />

        <input
            required
            className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md"
           type="text" 
           placeholder=" Phone Number" 
        />

        <select 
          required 
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md" 
          placeholder="Condition"
        >
          <option>Condition</option>
          <option value="new" >New</option>
          <option value="used">Used</option>
          </select>
        <button 
          className="text-xl font-semibold bg-red-600 py-2 max-w-md w-full m-auto rounded-md text-white"
        >
          POST
        </button>
      </form>
    </div>
  )
}