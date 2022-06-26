import logo from '../assets/logo_footer.png'

function Footer() {
  return (
    <div className="border-box flex justify-between sticky bottom-0 bg-gray-700 p-4">

      <div className="flex justify-between flex-nowrap w-fit">

        <img className='w-36 mr-12' src={logo} alt="logo_site" />
        <p>{'Rocketseat - Todos os direitos reservados'}</p>
      </div>
      <p>Políticas de privacidade</p>
    </div>
  );
}

export default Footer;


// import footerLogo from '../assets/footer_logo.png'

// export default function Footer() {
//   return (
//     <div className="flex justify-center fixed bottom-0 w-full h-12 bg-gray-700">
//       <img
//         className='h-[80%]'
//         src={footerLogo}
//         alt="Logo footer em imagem" />
      
//     </div>
//   )
// }
