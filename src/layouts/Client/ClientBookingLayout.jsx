import ClientBookingBillard from "@/pages/ClientPages/ClientBooking";
import HeaderClientLogin from "@/components/HeaderClientLogin";
import Footer from "@/components/Footer";

export default function ClientBooking() {
    return (
        <div className="h-screen">
            <HeaderClientLogin />
            <ClientBookingBillard />
            <Footer />
        </div>
    );
}
