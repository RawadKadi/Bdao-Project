/* eslint-disable spaced-comment */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Header from "./header-layout";

export default function Home() {
    return (
    <>
    <div className='main'>
      <div className='bg-texture'>
       <Header />
      <p className='text-center lg:text-[80px] md:text-[50px] text-[32px] mt-14 fmb'>
        BRICKLAYER
      </p>
      <div className="text-center text-[20px] md:block hidden font-semibold fmi">
        <p>
        We are proud to present Bricklayer, the 'Real Estate' DAO.
        </p>
        <p>
          A truly unique project on the blockchain underpinned by
        </p>
        <p>
          the safest of asset classes
        </p>
      </div>
      <div className="text-center text-[16px] md:hidden font-semibold fmi mt-8">
        <p>
          We are proud to present
        </p>
        <p>
          BrickLayer, the 'Real Estate' DAO.
        </p>
        <p>
          A truly unique project on the
        </p>
        <p>
        blockchain underpinned by the
        </p>
        <p>
          safest of asset classes
        </p>
      </div>
      <div className='flex justify-center '>
        <Image
        className=''
        width={510}
        height={500}
        src="/b-orange 1.png"
        alt=''>
        </Image>
      </div>
      <div className='bg-small-img md:hidden'>
        <br></br><br></br><br></br><br></br><br>
        </br><br></br><br></br><br></br><br></br>
        <br></br>
      </div>
      <div className='md:mt-6 mt-0 bg-img'>
        <div className='flex justify-center font-semibold fmi'>
          <div className="vector1 relative"></div>
          <button className='btn border-2 border-white flex text-[16px] p-2 md:inline-flex hidden'>
            Launch the app
            <img width={18} className='ml-3 mt-1' src="/Arrow 1.svg"/>
          </button>
        </div>
        <div className='flex justify-center mt-24'>
          <div className='box opacity-90 relative border-3 border-white text-center bg-[#E26E5D] h-[770px] sm:w-[700px] w-full mx-6'>
           {/*Desktop design*/}
            <p className='title fmb text-[24px] mt-14 md:block hidden'>
            Start laying $BRICKS
            </p>
            <div className="mt-3 fmi font-semibold md:block hidden text-[16px]">
              <p>
              This platform provides our community with access to
              </p>
              <p>
              institutional-grade occupiers and builds wealth
              </p>
              <p>
              through sophisticated real estate transactions fueled
              </p>
              <p>
              by digital asset growth. An original and simple
              </p>
              <p>
              approach which prioritizes smart hedging strategies
              </p>
              <p>
              consistent dividend generation, and creating capital
              </p>
              <p>
              value appreciation.
              </p>
            </div>

            {/*Mobile design*/}
            <div className="title text-[24px] md:hidden mt-12">
              <p className="fmb">
              Start laying
              </p>
              <p className="fmb">$BRICKS</p>
            </div>
            <div className="mt-3 fmi font-semibold md:hidden block text-[16px]">
              <p>
              This platform provides our community
              </p>
              <p>
              with access to institutional-grade 
              </p>
              <p>
              occupiers and builds wealth through 
              </p>
              <p>
              sophisticated real estate 
              </p>
              <p>
              transactions fueled by digital asset 
              </p>
              <p>
              growth. An original and simple 
              </p>
              <p>
              approach which prioritizes smart
              <p>
              hedging strategies, consistent 
              </p>
              dividend generation, and creating
              </p>
              <p>
              capital value appreciation.
              </p>
            </div>
            <div className='flex video justify-center md:mt-16 mt-6 mx-7 h-[260px]'>
              <Image
              width={45}
              height={45}
              src="/Ellipse 10.svg"
              alt="">
              </Image>
            </div>
            <div className='flex vector justify-center mt-12 mb-9 font-semibold fmi mt-10'>
              <button className='btn border-2 border-white flex text-[16px] p-2 md:inline-flex hidden'>
                Launch the app
                <img width={18} className='ml-3 mt-1' src="/Arrow 1.svg"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer mt-20">
        <Image
        className="ml-32"
        width={103}
        height={162}
        src="/Bricktop 3.png"
        alt=''
        >
        </Image>
        <Image
        className="sm:block hidden"
        width={1700}
        height={700}
        src="/Group 25.png"
        >
        </Image>
        <Image
        className="sm:hidden block"
        width={768}
        height={50}
        src="/Group 146.jpg"
        >
        </Image>
        <div className="socials bg-[#242424] py-4 flex justify-between">
          <div className="fmi font-medium text-[20px] ml-12">
            <p>@2023 BrickLayer</p>
          </div>
          <div className="fmi font-medium text[20px] flex mr-12">
            <Image
            className="mr-6"
            width={18}
            height={16}
            alt=""
            src="/Vector (1).svg"
            >
            </Image>
            <Image
            className="mr-6"
            width={18}
            height={16}
            alt=""
            src="/tabler-icon-brand-linkedin.svg"
            >
            </Image>
            <Image
            className=""
            width={18}
            height={16}
            alt=""
            src="/Vector (2).svg"
            >
            </Image>
          </div>
        </div>
      </div>
     </div>
    </div>
    </>
    )
}
