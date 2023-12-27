import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UpdateInfo from "./components/user/UpdateInfo";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import CertificateSection from "./components/CertificateSection";
import PayslipSection from "./components/PayslipSection";
import SuggestionSection from "./components/SuggestionSection";
import AllowanceSection from "./components/AllowanceSection";
import RrequestSection from "./components/RequestSection";

// const AuthWrapper = ({ children }: any) => {
//   const navigate = useNavigate();
//   const { user }: any = useContext(UserContext);
//   if (!user?.id) {
//     navigate("/login");
//   }
//   return <>{children}</>;
// };

// const GuestWrapper = ({ children }: any) => {
//   return <>{children}</>;
// };

function App() {
  const { user }: any = useContext(UserContext);
  return (
    <BrowserRouter>
      {user ? (
        <Dashboard>
          <Routes>
            <Route path="/updateinfo" element={<UpdateInfo />} />
            <Route path="/certificates" element={<CertificateSection />} />
            <Route path="/payslip" element={<PayslipSection />} />
            <Route path="/suggestions" element={<SuggestionSection />} />
            <Route path="/allowances" element={<AllowanceSection />} />
            <Route path="/requests" element={<RrequestSection />} />
          </Routes>
        </Dashboard>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;

// const allRoutes = [
//   {
//     gaurd: AuthWrapper,
//     layout: Dashboard,
//     routes: [
//       { path: "/updateinfo", component: UpdateInfo },
//       { path: "/certificates", component: Certificate },
//       { path: "/payslip", component: EmployeePayslip },
//       { path: "/suggestions", component: Suggestions },
//       { path: "/allowances", component: EmployeeAllowance },
//       { path: "/requests", component: UserRequest },
//     ],
//   },
//   {
//     gaurd: GuestWrapper,
//     layout: GuestWrapper,
//     routes: [{ path: "/login", component: Login }],
//   },
// ];

// {
//   allRoutes?.map((route) => {
//     const Gaurd = route.gaurd;
//     const Layout = route.layout;
//     return route.routes?.map((_route) => {
//       const Component = _route.component;
//       return (
//         <Gaurd>
//           <Layout>
//             <Route path={_route.path} element={<Component />} />
//           </Layout>
//         </Gaurd>
//       );
//     });
//   });
// }
