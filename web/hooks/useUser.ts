'use client';

import { useUser as useClerkUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { setUser, clearUser, setLoading, User } from '@/store/userSlice';

export const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user: clerkUser, isLoaded, isSignedIn } = useClerkUser();
  
  const user = useSelector((state: RootState) => state.user.user);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(setLoading(true));
      return;
    }

    if (isSignedIn && clerkUser) {
      const userData: User = {
        id: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress || '',
        firstName: clerkUser.firstName || undefined,
        lastName: clerkUser.lastName || undefined,
        imageUrl: clerkUser.imageUrl || undefined,
        createdAt: new Date(clerkUser.createdAt),
      };
      dispatch(setUser(userData));
    } else {
      dispatch(clearUser());
    }
  }, [clerkUser, isLoaded, isSignedIn, dispatch]);

  return {
    user,
    isAuthenticated,
    isLoading: isLoading || !isLoaded,
    error,
  };
}; 