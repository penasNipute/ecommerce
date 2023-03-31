import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"


export function ProfileAccount(){

  const phoneRegExp = /^[0-9]{9,15}$/


  const productSchema = yup.object().shape({
    // photo:yup.,
    productName : yup.string().min(3,"Requer um nome com 3 caracteres no minimo").required(),
    price: yup.number().min(0,"Preco minimo é 0"),
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
    <div className="w-full bg-white px-20 py-10">
      <div className="w-full bg-blue-100 px-28 py-5">
       <div className="flex gap-40 text-blue-600 pb-10">
          <div className="flex flex-col flex-wrap text-center">
            <img src="/assets/profile_pic.svg"  alt="Profile pic" />
            <p className="font-semibold text-4xl">Lisa Jocktan</p>
            <p className="font-Poppins font-medium text-xl text-blue-300">Menber Since 2017</p>
          </div>
          <div className="flex py-10 gap-20 items-start font-medium text-3xl">
            <div className="flex gap-10 items-center">
              <a href="#"><img src="/assets/carbon_ibm-watson-orders.svg" className="w-6 h-6 min-w-full" alt="carbon icon" /></a>
              <a href="#">Ads</a>
            </div>
            <a href="#" className="bg-gray-300 px-4 rounded-lg">Edit Account</a>
          </div>
       </div>
       <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-4/5 pt-5"
       >
         <input 
          className="bg-blue-100 border-b-2 border-b-black w-4/5 text-black px-1 py-2 outline-none" 
          {...register("productName")} 
          placeholder="Product name"
        />
        <span className="erro text-red-900">
          {errors?.productName?.message}
        </span>

        {/*
        <input
           className=" bg-blue-100 border-b-2 border-b-black w-4/5 text-black px-1 py-2 outline-none" 
           {...register("price")}
           placeholder="Price"
        />
         <span className="erro text-red-900">
          {errors?.price?.message}
        </span>
        */}
        <input
          className="bg-blue-100 border-b-2 border-b-black w-4/5 text-black px-1 py-2 outline-none" 
          {...register("description")}
          placeholder="Description" 
        />
        <span className="erro text-red-900">
          {errors?.description?.message}
        </span>

        <select 
          className="bg-blue-100 border-b-2 border-b-black w-4/5 text-black px-1 py-2 outline-none" 
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
            className="bg-blue-100 border-b-2 border-b-black w-4/5 text-black px-1 py-2 outline-none"
           placeholder=" Phone Number" 
           {...register("phoneNumber")}
        />
         <span className="erro text-red-00">
          {errors?.phoneNumber?.message}
        </span>

        {/* 
        <select 
          className="bg-blue-100 border-b-2 border-b-black w-4/5 text-black px-1 py-2 outline-none" 
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
        */}
       </form>
      </div>
    </div>
  )
}