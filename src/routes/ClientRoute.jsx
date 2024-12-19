import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientLayout from "@/layouts/Client/ClientLayout";
import ClientLayoutLogin from "@/layouts/Client/ClientLayoutLogin";
import ClientInformations from "@/layouts/Client/ClientLayoutInformation";
import ClientBooking from "@/layouts/Client/ClientBookingLayout";
import InforBookingLayout from "@/layouts/Client/InforBookingLayout";
import { BookingProvider } from "@/Context/BookingContext";
export default function ClientRoute() {
  return (
    <BookingProvider>
      <Routes>
        <Route path="/*" element={<ClientLayout />} />
        <Route path="/client/*" element={<ClientLayoutLogin />} />
        <Route path="/informations/*" element={<ClientInformations />} />
        <Route path="/booking" element={<ClientBooking />} />
        <Route path="/inforbooking" element={<InforBookingLayout />} />
      </Routes>
    </BookingProvider>
  );
}
