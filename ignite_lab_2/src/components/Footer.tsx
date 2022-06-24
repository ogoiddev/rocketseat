import footerLogo from '../assets/footer_logo.png'

export default function Footer() {
  return (
    <div className="flex justify-center fixed bottom-0 w-full h-16">
      <img
        className='h-[80%]'
        src={footerLogo}
        alt="Logo footer em imagem" />
      
    </div>
  )
}
