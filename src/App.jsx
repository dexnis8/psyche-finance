import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Accounts } from "./pages/accounts/Accounts";
import { Wallet } from "./pages/wallet/Wallet";
import { Settings } from "./pages/settings/Settings";
import { PaymentLink } from "./pages/payment_link/PaymentLink";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="payment-link" element={<PaymentLink />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
