import { useState, FormEvent } from "react";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";
import mask from '../assets/mask_main.png'
import items from '../assets/items_main.png'
import reactLogo from '../assets/react_logo_markdown.png'

export function Subscribe() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [CreateSubscriber, {data, loading} ] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await CreateSubscriber({
      variables: {
        name,
        email,
      }
    })


    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center" >
      <div className="z-[111] w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          
          <h1 className="mt-8 text-[2.5rem] leading-relaxed">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

      <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">inscreva-se gratuitamente</strong>
          
          <form onSubmit={ handleSubscribe } className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"

            >
              Garantir minha vaga
            </button>
          </form>
      </div>
      </div>

      <img
        className="absolute top-0 w-[40%]"
        src={reactLogo}
        alt="" />
      <div className="w-[60%] relative">
        <img
          src={mask}
          alt="" />
        <img
          className="absolute bottom-0 w-[100%] opacity-75"
          src={items}
          alt="" />
      </div>
    
    </div>
  )
};




// import { gql, useMutation } from "@apollo/client";
// import { useState, FormEvent } from "react";
// import { Logo } from "../components/Logo";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// const CREATE_SUBSCRIBE_MUTATION = gql`
//   mutation CreateSubscriber ($name: String!, $email: String!) {
//     createSubscriber(data: {name: $name, email: $email}) {
//       id
//     }
//   }
// `

// export function Subscribe() {
//   const navigate = useNavigate()
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const [CreateSubscriber, {data, loading} ] = useMutation(CREATE_SUBSCRIBE_MUTATION);

//   async function handleSubscribe(event: FormEvent) {
//     event.preventDefault();

//     await CreateSubscriber({
//       variables: {
//         name,
//         email,
//       }
//     })


//     navigate('/event')
//   }

//   return (
//     <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center" >
//       <div className="z-[111] w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
//         <div className="max-w-[640px]">
//           <Logo />
          
//           <h1 className="mt-8 text-[2.5rem] leading-relaxed">
//             Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
//           </h1>
//           <p className="mt-4 text-gray-200 leading-relaxed">
//             Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
//           </p>
//         </div>

//       <div className="p-8 bg-gray-700 border border-gray-500 rounded">
//           <strong className="text-2xl mb-6 block">inscreva-se gratuitamente</strong>
          
//           <form onSubmit={ handleSubscribe } className="flex flex-col gap-2 w-full">
//             <input 
//               className="bg-gray-900 rounded px-5 h-14"
//               type="text"
//               placeholder="Seu nome completo"
//               onChange={event => setName(event.target.value)}
//             />
//             <input
//               className="bg-gray-900 rounded px-5 h-14"
//               type="email"
//               placeholder="Digite seu email"
//               onChange={event => setEmail(event.target.value)}
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"

//             >
//               Garantir minha vaga
//             </button>
//           </form>
//       </div>
//       </div>



//       <img
//         className="w-[70%]"
//         src="/src/assets/mask_main.png"
//         alt="" />
//       <img
//         className="absolute bottom-0 w-[70%]"
//         src="/src/assets/items_main.png"
//         alt="" />
//     <Footer/>
//     </div>
//   )
// };
