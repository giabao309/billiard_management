import React from "react";
import HeaderClientLogin from "@/components/HeaderClientLogin";
import ClientView from "@/pages/ClientPages/clientView";
import Footer from "@/components/Footer";

export default function EmployeeLayout() {
  return (
    <div>
      <HeaderClientLogin />
      <ClientView />
      <Footer />
    </div>
  );
}
