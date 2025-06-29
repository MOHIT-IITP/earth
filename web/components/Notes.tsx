"use client"
import React from 'react'
import { useUser } from '@/hooks/useUser'

const Notes = () => {
  const { user, isAuthenticated, isLoading, error } = useUser()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!isAuthenticated || !user) {
    return <div>Please sign in</div>
  }

  return (
    <div className='flex w-full h-full'>
      {/* sidebar */}
      {user?.firstName}
      <div className='w-[30%] border-r-2 border-white h-full'>Hello Sidebar</div>
      <div className='w-[70%]'>Content</div>
    </div>
  )
}

export default Notes