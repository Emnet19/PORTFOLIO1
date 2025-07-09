// import react from 'react'
// import Nav from '../components/Nav'
// function Home(){
//     return(
//   <div className='bg-gray-900/98 text-white min-h-screen'>
//     <Nav/>
//     <div className='container mx-auto px-8 py-20 pl-40 pr-50 mb-10 flex flex-col  md:flex-row gap-10 items-center justify-between'>
//       <div className='max-w-xl text-center md:text-left'>
//         <h2 className='text-5xl  p-3 font-Bold'>Hi! I'm Emnet Befkadu, <span className='text-orange-400'>a passionate Software Engineer and Web Developer From Ethiopia. </span></h2>
//         {/* <h1 className='text-6xl'> <span className='text-cyan-500'>Emnet Befkadu</span></h1>
//         <p className='text-lg'>Full Stack Developer</p> */}
//         <button className='rounded-full  px-10 py-2 m-2 bg-orange-500 text-white font-bold text-lg shadow-md hover:bg-orange-600 transition-all duration-300'>Resume</button>
//       </div>


//       <div className=' '>
//         <img className='mb-3 w-[400px] h-[400px] object-cover rounded-lg shadow-lg ' src="src/components/Emnu.jpg" alt="" />
//       </div>
//     </div>

    
   
//   </div>
//     )
// }
// export default Home;


import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import heroImage from './image.png';
function Home() {
    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    // Image animation variants
    const imageVariants = {
        
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.9, // Starts after text animations
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='bg-[#0b1120] text-white min-h-screen'>
            <Nav />
            {/* <Footer/> */}
            <div className='container mx-auto px-8 py-30 pl-40 pr-50 mb-10 flex flex-col md:flex-row gap-10 items-center justify-between'>
                <div className='max-w-xl text-center md:text-left'>
                    {/* Animated text parts */}
                    <motion.h2 
                        className='text-4xl font-Bold'
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        variants={textVariants}
                    >
                    Hi! I'm <span className='text-cyan-400'>Emnet Befkadu,</span>
                    </motion.h2>
                    
                    <motion.h2
                        className='text-2xl font-Bold ' 
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        variants={textVariants}
                    >
                       a Full Stack Developer passionate about building clean, 
                       responsive, and user-friendly web applications.
                    </motion.h2>
                    
                    <motion.h2
                        className='text-2xl font-Bold  '
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        variants={textVariants}
                    >
                        I enjoy solving problems and bringing ideas to life through code.
                    </motion.h2>

                     
                    
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        variants={textVariants}
                    >
                        <button className='rounded-full px-10 py-2 mt-9 bg-cyan-500 text-black font-bold text-lg shadow-md hover:bg-cyan-600 transition-all duration-300'>
                            Resume
                        </button>
                    </motion.div>
                </div>

                {/* Animated image */}

               <motion.div
  initial="hidden"
  animate="visible"
  variants={imageVariants}
  whileHover={{ scale: 1.02 }}
>
  {/* <div className="relative w-[400px] h-[400px] ">
    {/* Border box behind image */}
    {/* <div className="absolute top-8 right-8 w-full h-full border-9 border-cyan-500 rounded-lg z-0"></div>

    {/* The actual image */}
    {/* <img 
      className="w-[400px] h-full object-cover rounded-lg shadow-lg relative z-10" 
      src="src/components/Emnett.jpg" 
      alt="Emnet Befkadu" 
    />

  </div> */} 
    <div className="relative w-full max-w-lg mx-auto">
          <div className="absolute  top-8 right-8 w-full h-full border-9 border-cyan-500 rounded-sm z-0"></div>
          <img src={heroImage} alt="" className="relative z-10 rounded-lg shadow-lg w-full h-120"/>
        </div>
</motion.div>

            </div>
        </div>
    );
}

export default Home;
