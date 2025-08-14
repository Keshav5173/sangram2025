import logo from '../assets/logo.png'
import Llogo from '../assets/LinkedI.png'
import InstaLogo from '../assets/Insta.png'
import mailLogo from '../assets/mail-svgrepo-com.png'
function Footer_1 () {
  return (
    <div className='font-robm bg-[#000000]'>
      <div className='w-screen flex justify-between flex-col md:flex-row lg:flex-row pb-12'>
        {/* Logo Div */}
        <div className='pl-0 md:pl-10 sm:pl-10 w-full md:w-1/2 lg:w-1/2 mr-10 my-auto h-inherit space-y-5'>
          <img src={logo} alt='' />
        </div>

        {/* Address and Contacts div */}
        <div className='md:w-2/3 flex flex-col md:flex-row justify-between w-fit md:justify-between'>
        {/* Address Div */}
          <div className='mx-auto w-[100vw] md:w-[20vw] pl-2 text-center flex flex-col pt-4'>
            <div className='text-white text-2xl mb-4 '>Address</div>
            <div className='text-[#d1cbcb] hover:text-yellow-400 transition-colors duration-1000 ease-in-out text-lg leading-10'>
              University of Engineering and Management, Chomu Udaipuriya Mod  NH 52
              303807, Jaipur District
            </div>
          </div>
{/* Contacts Div */}
          <div className='mx-auto text-center pl-2 flex flex-col w-full md:w-1/3 pt-4'>
            <div className='text-white text-2xl pb-4'>
              Contacts
            </div>
            <div className='text-gray-100 text-lg'>
              <ul className='text-wrap  text-lg leading-10'>
              <li className="text-[#d1cbcb] hover:text-yellow-400 transition-colors duration-1000 ease-in-out">
                Name{' '}
                <a href="tel:"></a>
            </li>
            

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white flex justify-between pr-12 pb-7'>
        <div className='w-1/2 md:w-1/3 pl-12 hover:text-yellow-400 transition-colors duration-1000 ease-in-out'>
        &copy; UEM Jaipur All rights reserved
        </div>
        <div className='flex w-2/5 md:w-1/5 sm:w-1/5 justify-around'>
        <div className='w-6 m-2'>
          <a href='/' target='none'> <img src={Llogo}alt="" /></a>
          
        </div>
        <div className='w-8 m-2'>
          <a href='/' target='none'> <img src={InstaLogo} alt="" /></a>
        </div>
        <div className='w-8 m-2'>
          <a href='mailto:pr_varchas@iitj.ac.in' target='none'> <img src={mailLogo} alt="" /></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer_1
