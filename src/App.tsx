import { Toaster } from "react-hot-toast";
import { AstrosProvider } from "./contexts/AstrosContext";
import { PostsProvider } from "./contexts/PostsContext";
import { UserProvider } from "./contexts/UserContext";
import { MainRoutes } from "./routes/Routes";

export const App = () => {
	return (
		<>
			<Toaster
				position="top-right"
				reverseOrder={false}
				toastOptions={{
					duration: 2000
				}}
			/>
			<UserProvider>
				<AstrosProvider>
					<PostsProvider>
						<MainRoutes />
					</PostsProvider>
				</AstrosProvider>
			</UserProvider>
		</>
	);
};
