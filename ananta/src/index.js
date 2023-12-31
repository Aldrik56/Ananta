import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as Page from "./Page";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParticleKupuKupu from "./Components/ParticleKupu_Kupu/ParticleKupuKupu";
const router = createBrowserRouter([
  {
    path: "/divisi",
    element: <Page.NavigasiDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-bimantara",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-kampana",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-arsa",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-adhyasta",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-syandana",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-sambara",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-dayaka",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-sarwaga",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-prabangkara",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divisi-wiskira",
    element: <Page.FotoDivisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hari-pelaksanaan",
    element: <Page.HariPelaksanaan />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hari-hari-omb",
    element: <Page.HariHariOMB />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/after-movie",
    element: <Page.AfterMovie />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hari-pelaksanaan/:hariID",
    element: <Page.HariHariOMB />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dibalik-kepanitiaan",
    element: <Page.DibalikKepanitiaan />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="route">
      <RouterProvider router={router} />
    </div>
    <ParticleKupuKupu />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
