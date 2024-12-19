import React from "react";
import HeaderClientLogin from "@/components/HeaderClientLogin";
import Footer from "@/components/Footer";
import ClientInvoice from "@/pages/ClientPages/ClientInvoice";

export default function ClientIvoices() {
  return (
    <div>
      <HeaderClientLogin />
      <ClientInvoice />
      <Footer />
    </div>
  );
}
