import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./providers/Router";

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </NextUIProvider>
    </ChakraProvider>
  );
}

export default App;
