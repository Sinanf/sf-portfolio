// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";               // ← App'ı mutlaka import et
import "./index.css";

// (Varsa) Redux
import { Provider } from "react-redux";
import { store } from "./store";

// (Varsa) TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const qc = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={qc}>
        <App />                            {/* ← Burada kullanıyoruz */}
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
