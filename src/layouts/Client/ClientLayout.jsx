import React from "react";
import Header from "@/components/Header";
import ClientView from "@/pages/ClientPages/clientView";
import Footer from "@/components/Footer";

export default function EmployeeLayout() {
  return (
    <div>
      <Header />
      <ClientView />
      <Footer />
    </div>
  );
}
