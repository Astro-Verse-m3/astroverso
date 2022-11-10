import React from 'react';
import { PostsProvider } from './contexts/PostsContext';
import { UserProvider } from './contexts/UserContext';
import { MainRoutes } from './routes/Routes';

export const App = () => {
  return (
    <UserProvider>
      <PostsProvider>
        <MainRoutes />
      </PostsProvider>
    </UserProvider>
  );
};
