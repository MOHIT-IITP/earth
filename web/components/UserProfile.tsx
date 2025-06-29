'use client';

import { useUser } from '@/hooks/useUser';

export default function UserProfile() {
  const { user, isAuthenticated, isLoading, error } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-600">Loading user data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-600">Please sign in to view your profile</div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">User Profile</h2>
      
      {user.imageUrl && (
        <div className="mb-4">
          <img 
            src={user.imageUrl} 
            alt="Profile" 
            className="w-20 h-20 rounded-full mx-auto"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="text-gray-900">{user.email}</p>
        </div>
        
        {user.firstName && (
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <p className="text-gray-900">{user.firstName}</p>
          </div>
        )}
        
        {user.lastName && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <p className="text-gray-900">{user.lastName}</p>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700">User ID</label>
          <p className="text-gray-900 text-sm">{user.id}</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Member Since</label>
          <p className="text-gray-900 text-sm">
            {user.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
} 