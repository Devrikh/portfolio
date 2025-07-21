import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkVeil from './components/DarkVeil'




import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import {
  SiSolidity,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiDocker,
  // SiVisualstudiocode,
  SiCplusplus,
  SiC,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiUnity,
  SiArduino,
} from "react-icons/si";
import { FaHardHat, FaEthereum, FaCube } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { HiOutlineWifi } from "react-icons/hi2";





function App() {
  return <>
    <div className="m-0">
    <div className=" w-full h-screen fixed -z-10">
    <DarkVeil hueShift={15}/>
    </div>  
    <NavBar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <ContactCard />
    <Footer />


    </div>
   
  </>
}












function NavBar() {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-fit px-5 py-2 flex gap-6 text-white z-50 font-[Satoshi] rounded-full overflow-hidden 
      bg-white/5 backdrop-blur-[14px] border border-white/30 ">
      {["About", "Projects", "Skills", "Contact", "Resume"].map((item) => (
        <button
          key={item}
          className="px-4 py-1 rounded-full hover:bg-white/20 hover:backdrop-blur-md transition-all duration-300 ease-in-out"
        >
          {item}
        </button>
      ))}
    </div>
  );
}


function Hero(){
  return <div className='text-white h-screen  font-[Satoshi] flex'>
    <div className=' Lefthero py-68 pl-18 w-1/2'>
  <h1 className='text-7xl font-bold'>Hello, I’m Devrikh</h1> 
     <p className='text-xl mx-1 my-2 font-medium text-gray-300 '>I build web applications and decentralized systems — from smart contract architectures
        to end-to-end full-stack dApps.</p>
      <div className="flex gap-6 mt-6 ml-1">
        <a
          href="https://github.com/Devrikh"
          className="text-gray-300 hover:text-white transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/devrikh-jatav-6bb512256/"
          className="text-gray-300 hover:text-white transition text-2xl"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/Devrikh_jatav" 
          className="text-gray-300 hover:text-white transition text-2xl"
        >
          <FaXTwitter/>
        </a>
      </div>
    </div>

    <div className=' Righthero w-1/2 pl-40 pt-25'>

    </div>


  </div>
}





function About(){
  return <div className='about font-[Satoshi]  border-t border-b  border-white  h-auto text-white' >
    <h1 className=' mx-18  font-bold  text-3xl uppercase mt-20'>Who I Am</h1>
    <p className='mx-18 mt-5 text-lg mb-20 text-gray-300 '>I’m a final-year Computer Science student at IIITV-ICD with a focus on decentralized applications and fullstack development.
    I work across the stack — from smart contracts to interfaces — with attention to how everything fits together. I care about clarity in systems, consistency in design, and writing code that does its job.
    I don’t just explore ideas — I build them, ship them, and make them hold up.
    </p>
  </div>
}


function Skills(){
  return <div className='about font-[Satoshi] border-t border-b border-white flex  h-auto text-white'>
    <div className='lefthalf w-1/2 border-r flex'>
      <h1 className='ml-18 font-bold text-5xl uppercase mt-10'>Skills</h1>
      <MdArrowOutward className='mt-10 ml-2 text-3xl'/>
    </div>

    <div className="w-1/2 backdrop-blur-[30px] pl-20 py-10 grid grid-cols-2 gap-y-8 gap-x-10 text-base">

  <div>
    <h2 className="font-semibold text-gray-200 mb-2 text-xl">Web3</h2>
    <ul className="space-y-2 font-light">
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiSolidity className="text-gray-400 group-hover:text-[#3C3C3D] group-hover:drop-shadow-[0_0_6px_#3C3C3D]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#3C3C3D]">Solidity</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <FaHardHat className="text-gray-400 group-hover:text-[#F7DF1E] group-hover:drop-shadow-[0_0_6px_#F7DF1E]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#F7DF1E]">Hardhat</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <FaEthereum className="text-gray-400 group-hover:text-[#3C3C3D] group-hover:drop-shadow-[0_0_6px_#3C3C3D]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#3C3C3D]">Ethers.js</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <FaCube className="text-gray-400 group-hover:text-[#E95420] group-hover:drop-shadow-[0_0_6px_#E95420]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#E95420]">Web3.js</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <GiNetworkBars className="text-gray-400 group-hover:text-[#65C2CB] group-hover:drop-shadow-[0_0_6px_#65C2CB]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#65C2CB]">IPFS</span>
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-gray-200 mb-2 text-xl">Fullstack</h2>
    <ul className="space-y-2 font-light">
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiReact className="text-gray-400 group-hover:text-[#61DAFB] group-hover:drop-shadow-[0_0_6px_#61DAFB]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#61DAFB]">React.js</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiNodedotjs className="text-gray-400 group-hover:text-[#339933] group-hover:drop-shadow-[0_0_6px_#339933]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#339933]">Node.js</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiExpress className="text-gray-400 group-hover:text-[#888888] group-hover:drop-shadow-[0_0_6px_#888888]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#888888]">Express.js</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiMongodb className="text-gray-400 group-hover:text-[#4DB33D] group-hover:drop-shadow-[0_0_6px_#4DB33D]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#4DB33D]">MongoDB</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiTailwindcss className="text-gray-400 group-hover:text-[#38BDF8] group-hover:drop-shadow-[0_0_6px_#38BDF8]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#38BDF8]">Tailwind CSS</span>
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-gray-200 mb-2 text-xl">Tools</h2>
    <ul className="space-y-2 font-light">
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiGithub className="text-gray-400 group-hover:text-[#181717] group-hover:drop-shadow-[0_0_6px_#181717]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#181717]">Git & GitHub</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiDocker className="text-gray-400 group-hover:text-[#0db7ed] group-hover:drop-shadow-[0_0_6px_#0db7ed]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#0db7ed]">Docker</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <HiOutlineWifi className="text-gray-400 group-hover:text-[#00ADB5] group-hover:drop-shadow-[0_0_6px_#00ADB5]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#00ADB5]">WebSockets</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiUnity className="text-gray-400 group-hover:text-[#222C37] group-hover:drop-shadow-[0_0_6px_#222C37]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#222C37]">Unity</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiArduino className="text-gray-400 group-hover:text-[#00979C] group-hover:drop-shadow-[0_0_6px_#00979C]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#00979C]">Arduino IDE</span>
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-gray-200 mb-2 text-xl">Languages</h2>
    <ul className="space-y-2 font-light">
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiJavascript className="text-gray-400 group-hover:text-[#F7DF1E] group-hover:drop-shadow-[0_0_6px_#F7DF1E]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#F7DF1E]">JavaScript</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiTypescript className="text-gray-400 group-hover:text-[#3178C6] group-hover:drop-shadow-[0_0_6px_#3178C6]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_#3178C6]">TypeScript</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiCplusplus className="text-gray-400 group-hover:text-[#00599C] group-hover:drop-shadow-[0_0_6px_#00599C]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#00599C]">C++</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiC className="text-gray-400 group-hover:text-[#A8B9CC] group-hover:drop-shadow-[0_0_6px_#A8B9CC]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#A8B9CC]">C</span>
      </li>
      <li className="flex items-center gap-2 group transition-all duration-300">
        <SiPython className="text-gray-400 group-hover:text-[#3776AB] group-hover:drop-shadow-[0_0_6px_#3776AB]" />
        <span className="text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#3776AB]">Python</span>
      </li>
    </ul>
  </div>
</div>






  </div>
}


function ProjectCard({ title, description, tech, links, image }) {
  return (
    <div
      className="rounded-xl p-5 backdrop-blur-[14px] bg-white/5 border border-white/20 
      transition-all duration-300 transform hover:scale-[1.025] hover:border-[#ffffff] hover:bg-white/10"
      style={{
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 25px rgba(155, 94, 255, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    > 
      {/* Image or Fallback */}
      <div className="h-40 w-full mb-4 rounded-lg bg-neutral-900 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-5xl opacity-30"><MdOutlineImageNotSupported/></span>
        )}
      </div>

      {/* Title */}
      <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-3">{description}</p>

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="text-xs bg-white/10 text-white px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition"
          >
            <FaGithub size={20} />
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>
    </div>
  );
}


function Projects() {
  const projects = [
    {
      title: "Blockchain CDN with 5G Edge Node",
      description:
        "A decentralized content delivery network integrating IPFS and Dockerized edge nodes using Open5GS.",
      tech: ["Solidity", "React", "Node.js", "IPFS", "Docker"],
      links: {
        github: "https://github.com/devrikh/blockchain-cdn",
      },
    },
    {
      title: "Blockchain Fisheries Supply Chain",
      description:
        "Smart-contract based traceability system for fisheries, ensuring end-to-end data transparency.",
      tech: ["Solidity", "Express.js", "MongoDB","Ether.js"],
      links: {
        github: "https://github.com/devrikh/fisheries-dapp",
      },
    },
    {
      title: "Kenzo",
      description:
        "A clean, dynamic portfolio website built to showcase projects and skills using modern web stack.",
      tech: ["React", "Tailwind", "Express.js", "MongoDB"],
      links: {
        github: "https://github.com/devrikh/kenzo",
      },
    },
    {
      title: "Autism Detector",
      description:
        "ML-based autism detection tool for children using questionnaire + scoring logic.",
      tech: ["Node.js", "Flask"],
      links: {
        github: "https://github.com/devrikh/autism-detector",
      },
    },
  ];

  return (
    <div className=" text-white font-[Satoshi] border-t border-white px-16 py-20">
      <div className='title flex'>
       <h1 className="font-bold text-5xl uppercase mb-15">Projects</h1>
      <MdArrowOutward className='ml-2 text-3xl'/>

      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
}



function ContactCard() {
  const handleSend = () => {
    const name = document.getElementById("nameField").value.trim();
    const message = document.getElementById("messageField").value.trim();

    if (!message) return alert("Please enter a message!");

    const subject = encodeURIComponent(`Message from ${name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(message);

    window.location.href = `mailto:devrikhjatav@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="px-16 py-24 border-t border-white font-[Satoshi]">
      <div className="max-w-2xl mx-auto rounded-2xl backdrop-blur-[14px] bg-white/5 border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <h2 className="text-3xl font-semibold text-white mb-6">Let's Talk</h2>

        <input
          id="nameField"
          type="text"
          placeholder="Your name (optional)"
          className="w-full mb-4 px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        <textarea
          id="messageField"
          rows={5}
          placeholder="Write your message..."
          className="w-full mb-6 px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        <button
          onClick={handleSend}
          className="w-full px-6 py-3 text-white font-medium bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition duration-300"
        >
          Send Email
        </button>
      </div>
    </div>
  );
}




function Footer() {
  return (
    <div className="text-gray-500 text-sm text-center py-6  font-[Satoshi]">
      © {new Date().getFullYear()} Devrikh. Built in Hurry.
    </div>
  );
}






export default App
