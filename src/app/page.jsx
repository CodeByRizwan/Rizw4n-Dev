"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  return (
    <motion.div
      className="grid grid-cols-1 grid-rows-10 sm:grid-rows-8 lg:grid-rows-3 sm:gap-5 lg:w-full sm:min-h-lvh lg:max-h-lvh lg:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Header */}
      <motion.div
        className="row-span-1 sm:row-span-1 lg:row-span-1 flex justify-center items-center flex-col gap-y-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-8">Rizw4n-Dev</h1>
        <Image src="/Me.jpg" alt="Me" width="100" height="100" className="rounded-full object-cover"></Image>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="row-span-9 sm:row-span-7 lg:row-span-2 grid grid-cols-1 sm:grid-cols-10 sm:grid-rows-2 gap-2 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Left Section */}
        <motion.div
          className="sm:col-span-7 lg:col-span-4 lg:row-span-2 rounded-3xl bg-blue-600 flex flex-col gap-2 px-8 pt-5 pb-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="flex-grow lg:text-xl laptopmd:text-base ">Hi, I am Rizwan Rahman. I am a self-taught website developer.</p>
          <p className="flex-grow lg:text-xl laptopmd:text-base ">I am a hungry learner & open for any kind of projects and works. Contact for collaboration🤝📈</p>
          <p className="flex-grow lg:text-xl laptopmd:text-base ">I am skilled in HTML, CSS, JavaScript, and other frameworks and libraries of JavaScript. 💻</p>
          <p className="flex-grow lg:text-xl laptopmd:text-base ">If there is a requirement for any specific technology for your business, I am open to learn it and provide that specific service.</p>
          <p className="flex-grow lg:text-xl laptopmd:text-base bg-yellow-200 py-1 px-3 text-blue-900 font-bold text-lg rounded-xl shadow-lg border border-yellow-500 lg:text-center lg:pt-4 laptopmd:pt-2">If you need any works done, Do contact. ✌🏻️</p>
        </motion.div>


        {/* Email Section */}
        <motion.div
          className="sm:col-span-3 lg:col-span-2 lg:row-span-1 rounded-3xl bg-gray-900 flex flex-col justify-center items-center p-6 space-y-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <p className="text-sm laptopmd:text-sm lg:text-xl text-white flex items-center">
            <Link
              href="mailto:rizwan.rahm4n@gmail.com"
              className="hover:text-blue-500 transition-colors flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-lg mr-2" />
              rizwan.rahm4n@gmail.com
            </Link>
          </p>

        </motion.div>

        {/* Works Section */}
        <motion.div
          className="sm:col-span-7 lg:col-span-4 lg:row-span-2 rounded-3xl bg-gray-100 flex flex-col justify-center items-center gap-8 p-6 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="mb-4 w-full text-center">
            <p className="text-xl laptopmd:text-2xl lg:text-4xl font-semibold text-gray-900">Some of my projects</p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="laptopmd:flex laptopmd:justify-center laptopmd:items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <Link href="https://budger-tracker.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-full w-full flex justify-center items-center">
                <p className="text-center text-gray-800 laptopmd:text-base lg:text-xl">A budget tracker</p>
              </Link>
            </div>
            <div className="laptopmd:flex laptopmd:justify-center laptopmd:items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <Link href="https://zenith-lodge.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-full w-full flex justify-center items-center">
                <p className="text-center text-gray-800 laptopmd:text-base lg:text-xl">A simple Phone screen focused website for a Lodge</p>
              </Link>
            </div>
            <div className="laptopmd:flex laptopmd:justify-center laptopmd:items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <Link href="https://book-review-website-kdyx.onrender.com/" target="_blank" rel="noopener noreferrer" className="h-full w-full flex justify-center items-center">
                <p className="text-center text-gray-800 laptopmd:text-base lg:text-xl">Implementing CRUD</p>
              </Link>
            </div>
            <div className="laptopmd:flex laptopmd:justify-center laptopmd:items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <Link href="https://michael-dowsey.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-full w-full flex justify-center items-center">
                <p className="text-center text-gray-800 laptopmd:text-base lg:text-xl">A website for a personal trainer</p>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Socials Section */}
        <motion.div
          className="sm:col-span-3 lg:col-span-2 lg:row-span-1 rounded-3xl bg-yellow-200 flex justify-center items-center p-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.div
            className="flex justify-between items-center gap-8 text-blue-900 border-2 border-black rounded-full p-4 bg-gray-50 shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://github.com/CodeByRizwan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-gray-700 transition-colors duration-300" />
            </Link>
            <Link href="https://x.com/riz__z__" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="text-3xl hover:text-gray-700 transition-colors duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/rizwan-rahman-83a985334/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-gray-700 transition-colors duration-300" />
            </Link>

          </motion.div>



        </motion.div>


      </motion.div>
    </motion.div>
  );
}



