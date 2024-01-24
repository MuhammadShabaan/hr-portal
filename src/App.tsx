import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import CertificateSection from "./components/CertificateSection";
import PayslipSection from "./components/PayslipSection";
import SuggestionSection from "./components/SuggestionSection";
import AllowanceSection from "./components/AllowanceSection";
import RequestSection from "./components/RequestSection";
import InfoUpdateForm from "./components/forms/userFroms/InfoUpdateForm";

import NotFound from "./pages/NotFound";

import SendResetEmailForm from "./components/forms/userFroms/sendResetEmailForm";
import ResetPasswordForm from "./components/forms/userFroms/ResetPasswordForm";
import CreateUser from "./components/CreateUser";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="updateinfo" element={<InfoUpdateForm />} />
        <Route path="certificates" element={<CertificateSection />} />
        <Route path="payslip" element={<PayslipSection />} />
        <Route path="suggestions" element={<SuggestionSection />} />
        <Route path="allowances" element={<AllowanceSection />} />
        <Route path="requests" element={<RequestSection />} />
        <Route path="createnewemployee" element={<CreateUser />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<SendResetEmailForm />} />
      <Route path="/resetconfirm/:token" element={<ResetPasswordForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
