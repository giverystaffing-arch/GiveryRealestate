import React from 'react'
import { motion } from 'framer-motion'
import { Home, Phone, Mail, MapPin } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-indigo-900"
          >
            Gwenita Ivery
          </motion.h1>
          <p className="text-xl text-gray-600 mt-2">Your Trusted Real Estate Agent</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Home className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-semibold text-gray-800">Welcome</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            With years of experience in the real estate market, I'm dedicated to helping you 
            find your dream home or sell your property at the best possible price. Let's make 
            your real estate goals a reality together.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-indigo-600 mr-3" />
              <span className="text-lg text-gray-700">Call for consultation</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-indigo-600 mr-3" />
              <span className="text-lg text-gray-700">Email for inquiries</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-indigo-600 mr-3" />
              <span className="text-lg text-gray-700">Serving your local area</span>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-indigo-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Gwenita Ivery Real Estate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
