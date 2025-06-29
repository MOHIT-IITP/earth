import UserProfile from '@/components/UserProfile';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          My Profile
        </h1>
        <UserProfile />
      </div>
    </div>
  );
} 