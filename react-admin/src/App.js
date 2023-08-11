import "./App.css";
import Index from "./pages/Index";
import Login from "./pages/Signin";
import Form from "./pages/Signup";
import ProductList from "./pages/productList";
import ProducForm from "./pages/productCreate";
import ClientList from "./pages/clientList";
import ClientForm from "./pages/clientCreate";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./ProtectedRoute";
import { ProductProvider } from "./context/ProductsContext";
import { ClientProvider } from "./context/ClientContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <ClientProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Form />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/Clients" element={<ClientList />} />
                  <Route path="/Clients-add" element={<ClientForm />} />
                  <Route path="/Clients/:id" element={<ClientForm />} />
                  <Route path="/Products" element={<ProductList />} />
                  <Route path="/Products-add" element={<ProducForm />} />
                  <Route path="/Products/:id" element={<ProducForm />} />
                </Route>
              </Routes>
            </Router>
          </ClientProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
