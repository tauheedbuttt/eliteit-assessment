import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes } from "./config/routes";

import Layout from "./components/layout/Layout";
import NoPage from "./pages/NoPage/NoPage";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NoPage />} />
      <Route path="/*" element={<Layout />}>
        {publicRoutes?.map((item, index) => (
          <Route key={index} path={item.path} element={<item.page />} />
        ))}
      </Route>
    </Routes>
  );
}

export default App