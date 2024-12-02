import React from 'react'
import HeaderClientLogin from '@/components/HeaderClientLogin'
import Footer from '@/components/Footer'
import InforBooking from '@/pages/ClientPages/InforBooking'

export default function InforBookingLayout() {
    return (
        <div>
            <HeaderClientLogin />
            <InforBooking />

        </div>
    )
}
