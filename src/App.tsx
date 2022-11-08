import { Toaster } from "react-hot-toast";

import { UserProvider } from "./contexts/UserContext";
import { MainRoutes } from "./routes/Routes";

export const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false}
      toastOptions={{
        duration: 2000
      }}
        />
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
};
