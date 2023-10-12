import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavigationProvider from "@/providers/navigation";

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationProvider />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
