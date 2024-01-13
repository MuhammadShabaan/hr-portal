import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import CertificateSection from "./components/CertificateSection";
import PayslipSection from "./components/PayslipSection";
import SuggestionSection from "./components/SuggestionSection";
import AllowanceSection from "./components/AllowanceSection";
import RequestSection from "./components/RequestSection";
import InfoUpdateForm from "./components/forms/userForms/InfoUpdateForm";
import { useAuth } from "./context/AuthContext";


function AuthenticatedRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/updateinfo" element={<InfoUpdateForm />} />
        <Route path="/certificates" element={<CertificateSection />} />
        <Route path="/payslip" element={<PayslipSection />} />
        <Route path="/suggestions" element={<SuggestionSection />} />
        <Route path="/allowances" element={<AllowanceSection />} />
        <Route path="/requests" element={<RequestSection />} />
      </Routes>
    </Layout>
  );
}

function UnauthenticatedRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

function App() {
  const {user} = useAuth()
 
  return (
    <BrowserRouter>
      {user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </BrowserRouter>
  );
}

export default App
