import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"


export function Ads(){
    
  const phoneRegExp = /^[0-9]{9,15}$/

  const productSchema = yup.object().shape({
    // photo:yup.,
    productName : yup.string().min(3,"Requer um nome com 3 caracteres no minimo").required(),
    price: yup.number().min(),
    description: yup.string().required("Requer descricao do produto"),
    universityName:  yup
    .mixed()
    .oneOf(['Universidade Eduardo Mondlane', 'Universidade Catolica', 'UniLúrio','Universidade Pedagógica','Universidade São Tómas de Mocambique'],"Escolha uma universidade válida")
    .defined(),
    phoneNumber:yup.string().matches(phoneRegExp, "Phone number is not valid"),
    condition:yup.string().required()
  })


  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(productSchema)
  });

  const onSubmit = data => console.log(data);

  return(
    <div className="bg-blue-100 py-8 font-Poppins">
      <div className="flex justify-center border-b border-black py-4">
        <h1 className=" font-semibold text-5xl">Post Ad</h1>
      </div>
      

      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-4/5 mx-auto pt-5"
      >
      <h2 className="font-semibold text-xl">Add Photos</h2>
      <p>First picture  is the title picture Grab & dra photos to change the order</p>
      <span>Supported format are .jpg .gif and .png</span>

        <input 
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md" 
          type="file" 
          required 
          accept="image/png, image/jpg, image/gif"
          {...register("photo")} 
        />
        

        <input 
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md" 
          {...register("productName")} 
          placeholder="Product name"
        />
        <span className="erro text-red-900">
          {errors?.productName?.message}
        </span>

        <input
           className=" w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md appearance-none scroll-smooth" 
           {...register("price")}
           placeholder="Price"
        />
         <span className="erro text-red-900">
          {errors?.price?.message}
        </span>

        <input
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md" 
          {...register("description")}
          placeholder="Description" 
        />
        <span className="erro text-red-900">
          {errors?.description?.message}
        </span>

        <select 
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md" 
          placeholder="University Name"
          {...register("universityName")}
        >
          <option value="">University Name</option>
          <option value="Universidade Eduardo Mondlane" >Universidade Eduardo Mondlane</option>
          <option value="Universidade Catolica">Universidade Catolica</option>
          <option value="UniLúrio">UniLúrio</option>
          <option value="Universidade Pedagógica">Universidade Pedagógica</option>
          <option value="Universidade São Tómas de Mocambique">Universidade São Tómas de Mocambique</option>
        </select>
        <span className="erro text-red-900">
          {errors?.universityName?.message}
        </span>

        <input
            className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md"
           placeholder=" Phone Number" 
           {...register("phoneNumber")}
        />
         <span className="erro text-red-00">
          {errors?.phoneNumber?.message}
        </span>

        <select 
          className="w-4/5 border- border-spacing-1 border border-zinc-900 py-3 px-8 rounded-md" 
          placeholder="Condition"
          {...register("condition")}
        >
          <option value="">Condition</option>
          <option value="new" >New</option>
          <option value="used">Used</option>
        </select>
        <span className="erro text-red-00">
          {errors?.condition?.message}
        </span>

        <button 
          className="text-xl font-semibold bg-red-600 py-2 max-w-sm w-full m-auto rounded-md text-white"
        >
          POST
        </button>
      </form>
    </div>
  )
}