import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub ,SiPython,
    SiGit,SiNodedotjs,SiMongodb,SiCplusplus,SiMysql} from 'react-icons/si'
  import { FaJava,FaPhp ,} from 'react-icons/fa';
  import { Icon } from '@iconify/react';
import bookImg from '../components/Book1.png';
import timeBankImg from '../components/Time Bank.png';
import supermarketImg from '../components/Supermarket.png';
import girlsWebImg from '../components/GirlsWeb.png';
import imageGalleryImg from '../components/Image Gallary.png';


function Projects() {
  return (
    <section className="bg-[#0b1120] text-white px-6 py-20">
      <h1 className="font-bold text-5xl text-center mb-20">PROJECTS</h1>




         {/* Project 1 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16 max-w-7xl mx-auto mb-30">

         <div className="relative flex-1 max-w-2xl">
          <div className="absolute top-4 right-4 w-full h-full border-6 border-cyan-500 rounded-md z-0"></div>
          <img src={bookImg} alt="" className="relative z-10 rounded-lg shadow-2xl w-full" />
        </div>
        <div className="flex-1">
          <h2 className="text-cyan-400 text-lg tracking-wide mb-2">PROJECT 1</h2>
          <h1 className="text-3xl font-bold mb-4">Resource For Software Engineering Students</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            A comprehensive and well-organized platform designed to support Software Engineering students
            throughout their academic journey. This resource hub includes curated learning materials,
            project ideas, coding tutorials, interview prep guides, and career advice all in one place.
            Built with React, TypeScript, and Tailwind CSS, the platform is fast, responsive, and tailored to help students succeed.
          </p>
          <div className='flex gap-'>
  <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
    <SiReact className="text-cyan-400 text-xl" />
  </div>
  <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
    <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />
  </div>
  <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
    <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-6 w-6" />
  </div>
  <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
    <img src="https://cdn.simpleicons.org/php" alt="PHP" className="h-10 w-10" />
  </div>
  <a href="https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT" className="text-cyan-300 hover:text-cyan-800 pl-70 pt-2 mb-3">Check Live Site</a>
</div>
        </div>
       
      </div>
 {/* Project 2 */}
 <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16 max-w-7xl mx-auto mb-30">
        <div className="flex-1">
          <h2 className="text-cyan-400 text-lg tracking-wide mb-2">PROJECT 2</h2>
          <h1 className="text-3xl font-bold mb-4">Time Bank</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Time Bank is an innovative platform designed to promote skill-sharing through time exchange. 
            Users can connect with others who possess the skills they’re seeking and offer their own expertise in return no money involved, just mutual learning. 
           Whether someone wants to learn graphic design in exchange for teaching coding, or swap language lessons, Time Bank fosters a collaborative environment 
           where knowledge is exchanged fairly, building a community of learners who value time as currency.
          </p>
          
          <div className='flex gap-'>
  {/* React */}
  <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
    <SiReact className="text-cyan-400 text-xl" />
    
  </div>

  {/* Tailwind CSS */}
  <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
    <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />
  </div>

  {/* TypeScript */}
  <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
    <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-6 w-6" />
  </div>

  {/* Python */}
  <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
    <Icon icon="logos:python" className="h-6 w-6" />
  </div>
  <a href="https://github.com/wende12github/Silent-Coders" className="text-cyan-300 hover:text-cyan-800 pl-70 pt-2 mb-3">Check Live Site</a>
</div>

          
        </div>
        <div className="relative flex-1 max-w-2xl">
          <div className="absolute top-4 right-4 w-full h-full border-4 border-cyan-500 rounded-md z-0"></div>
          <img src={timeBankImg} alt="" className="relative z-10 rounded-lg shadow-2xl w-full" />
        </div>
      </div>
      

   
      {/* Project 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto mb-30">
        <div className="flex-1">
          <h2 className="text-cyan-400 text-lg tracking-wide mb-2">PROJECT 3</h2>
          <h1 className="text-3xl font-bold mb-4">Supermarket Management System</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A complete and intuitive Supermarket Management System designed to streamline
            daily operations for store owners and staff. The system allows users to easily
            manage products, employees, customers, and sales all from one interactive dashboard.
            Built using Java and MySQL, with a user-friendly GUI,
            the system offers a seamless and responsive experience for managing supermarket tasks effectively.
          </p>
          
          <div className='flex gap-'>
                 {/* <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                  <SiReact className="text-cyan-400 text-xl" />
                   </div>
        <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
         <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />
         </div>
         <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
         <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-6 w-6" />
         </div>
            */}<div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                    <Icon icon="logos:java" className='h-6 w-6' />
             </div> 
             <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="40" height="40"/>

             </div>
            <a href="https://github.com/Emnet19/SuperMarketMgt-Java" className="text-cyan-300 hover:text-cyan-800 pl-70 pt-2 mb-3">Check Live Site</a>
      </div>
          {/* <a href="#" className="text-cyan-300 hover:text-cyan-800">Check Live Site</a> */}
        </div>
        <div className="relative flex-1 max-w-2xl">
          <div className="absolute top-4 left-4 w-full h-full border-4 border-cyan-500 rounded-md z-0"></div>
          <img src={supermarketImg} alt="" className="relative z-10 rounded-lg shadow-2xl w-full" />
        </div>
      </div>

      {/* Project 4 */}
     
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto mb-30">

         <div className="relative flex-1 max-w-2xl">
          <div className="absolute top-4 left-4 w-full h-full border-4 border-cyan-500 rounded-md z-0"></div>
          <img src={girlsWebImg} alt="" className="relative z-10 rounded-lg shadow-2xl w-full" />
        </div>
        <div className="flex-1">
          <h2 className="text-cyan-400 text-lg tracking-wide mb-2">PROJECT 4</h2>
          <h1 className="text-3xl font-bold mb-4">E Commerce Website For Girls</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A user-friendly and visually appealing platform where girls can easily explore and shop for products that match their interests and lifestyle.
            The website includes personalized product suggestions, a smooth shopping experience, and a clean, responsive design.
            Built using React, TypeScript, and Tailwind CSS, it ensures fast performance, modern UI, and mobile responsiveness for all users.
          </p>

          <div className='flex gap-'>
         <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
          <SiReact className="text-cyan-400 text-xl" /> 
         </div>
        <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
         <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />
          </div>
       <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
       <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-6 w-6" />
       </div>
      <a href="#" className="text-cyan-300 hover:text-cyan-800 pl-70 pt-2 mb-3">Check Live Site</a>
       </div>
        </div>
      </div>
     

     
      {/* Project 5 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto mb-30">
        <div className="flex-1">
          <h2 className="text-cyan-400 text-lg tracking-wide mb-2">PROJECT 5</h2>
          <h1 className="text-3xl font-bold mb-4">Image Gallery Web App</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A visually engaging and responsive Image Gallery Web App built
             to deliver an immersive browsing experience. This project allows users
              to explore a curated collection of images categorized by topics such as 
              Nature, Technology, Architecture, Animals, and People. Developed using
               React and Tailwind CSS, the app features dynamic search, category filtering,
                hover effects, and a full-screen modal view. With a clean design and smooth 
                user interactions, this gallery serves as a modern and functional portfolio piece, 
                ideal for showcasing UI/UX skills and frontend development expertise.
          </p>
          
          <div className='flex gap-'>
                 <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                  <SiReact className="text-cyan-400 text-xl" />
                   </div>
        <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
         <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-6 w-6" />
         </div>
         <div className="h-10 w-10 rounded-full bg-black border border-gray-700 flex items-center justify-center">
         <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-6 w-6" />
         </div>
    
            <a href="https://github.com/Emnet19/ImageGallary" className="text-cyan-300 hover:text-cyan-800 pl-85 pt-2 mb-3">Check Live Site</a>
      </div>
        </div>
        <div className="relative flex-1 max-w-2xl">
          <div className="absolute top-4 left-4 w-full h-full border-4 border-cyan-500 rounded-md z-0"></div>
          <img src={imageGalleryImg} alt="" className="relative z-10 rounded-lg shadow-2xl w-full" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
