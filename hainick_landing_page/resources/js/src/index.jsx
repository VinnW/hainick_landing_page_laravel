import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// FIX: sebelumnya import dari "./App" (routing lama, TANPA ProtectedRoute).
// Yang benar-benar dipakai harus AppRoutes.jsx di ./routes/, karena di situ
// admin panel sudah dibungkus <ProtectedRoute />.
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

// Ambil elemen HTML tempat React akan di-mount (div #root di Blade)
const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </React.StrictMode>,
    );
} else {
    console.error(
        "Elemen dengan id 'root' tidak ditemukan. Pastikan ada <div id='root'></div> di file Blade kamu.",
    );
}
