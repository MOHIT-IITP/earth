'use client'

import Draw from '@/components/Draw'
import Notes from '@/components/Notes'
import Sidebar from '@/components/Sidebar'
import Todo from '@/components/Todo'
import React, { useState } from 'react'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavigate = (section: string) => {
    setActiveSection(section)
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'notes':
        return <Notes />
      case 'todo':
        return <Todo />
      case 'draw':
        return <Draw />
      default:
        return children
    }
  }

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200">
        <Sidebar onNavigate={handleNavigate} activeSection={activeSection} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
