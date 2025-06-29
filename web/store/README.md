# User Slice Documentation

This directory contains the Redux store setup with a user slice that integrates with Clerk authentication.

## Files

- `store.ts` - Redux store configuration
- `userSlice.ts` - User state management slice
- `README.md` - This documentation

## User Slice Features

The user slice manages:
- User authentication state
- User profile data (id, email, firstName, lastName, imageUrl, createdAt)
- Loading states
- Error handling

## Usage

### 1. Using the Custom Hook

```tsx
import { useUser } from '@/hooks/useUser';

function MyComponent() {
  const { user, isAuthenticated, isLoading, error } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!isAuthenticated) return <div>Please sign in</div>;

  return <div>Welcome, {user?.firstName}!</div>;
}
```

### 2. Direct Redux Usage

```tsx
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectIsAuthenticated } from '@/store/userSlice';
import { updateUser } from '@/store/userSlice';

function MyComponent() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const updateUserProfile = () => {
    dispatch(updateUser({ firstName: 'New Name' }));
  };

  return <div>User: {user?.email}</div>;
}
```

### 3. Available Actions

- `setUser(user)` - Set user data
- `clearUser()` - Clear user data (logout)
- `updateUser(partialUser)` - Update specific user fields
- `setLoading(boolean)` - Set loading state
- `setError(error)` - Set error state

### 4. Available Selectors

- `selectUser` - Get current user data
- `selectIsAuthenticated` - Check if user is authenticated
- `selectIsLoading` - Check loading state
- `selectError` - Get current error

## Integration with Clerk

The user slice automatically syncs with Clerk authentication:
- When a user signs in, their data is automatically stored in Redux
- When a user signs out, the Redux state is cleared
- Loading states are handled during authentication checks

## TypeScript Support

All components are fully typed with TypeScript:
- `User` interface defines the user data structure
- `UserState` interface defines the slice state
- `RootState` and `AppDispatch` types are exported for use in components 