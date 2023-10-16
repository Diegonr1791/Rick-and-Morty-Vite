import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./providers/Router";

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
