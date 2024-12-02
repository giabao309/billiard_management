import React from "react";
import HeaderClientLogin from "@/components/HeaderClientLogin";
import ClientView from "@/pages/ClientPages/clientView";
import Footer from "@/components/Footer";
import ClientInfor from "@/pages/ClientPages/ClientProfile";

export default function ClientInformations() {
  return (
    <div>
      <HeaderClientLogin />
      <ClientInfor />
      <Footer />
    </div>
  );
}
