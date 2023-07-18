import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import AuthProvider from "./context/Auth/AuthProvider";
import Modal from "react-modal";
import { ReactQueryDevtools } from "react-query/devtools";
import { store } from './store';
import { Provider } from 'react-redux';

Modal.setAppElement("#root");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
       {/**   <ReactQueryDevtools initialIsOpen={false} /> */}
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
);
