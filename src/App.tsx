import { Toaster } from "react-hot-toast";
import { PostsProvider } from './contexts/PostsContext';
import { UserProvider } from "./contexts/UserContext";
import { MainRoutes } from "./routes/Routes";

export const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
      <UserProvider>
         <PostsProvider>
        <MainRoutes />
       </PostsProvider>    
      </UserProvider>
    </>
  );
};
