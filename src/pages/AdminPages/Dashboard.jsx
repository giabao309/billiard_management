import React from 'react'
import { BiDollar } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import RevenueChart from '@/components/RevenueChart';
import CustomerChart from '@/components/CustomerChart';
import ProductRevenueChart from '@/components/ProductRevenueChart';

export default function Dashboard() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">

                <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg w-1/3 h-40 mx-2">
                    <div className="flex items-center text-red-500 text-xl font-bold">
                        <BiDollar className="text-3xl" />
                        <span className="ml-2">3 đơn đã xong</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">1,058,000</p>
                    <p className="text-sm text-gray-500">Hôm qua 4,744,000</p>
                    <div className="text-sm text-green-500">↓ 78%</div>
                </div>


                <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg w-1/3 h-40 mx-2">
                    <div className="flex items-center text-green-500 text-xl font-bold">
                        <AiOutlineEdit className="text-3xl" />
                        <span className="ml-2">1 đơn đang phục vụ</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">22,500</p>
                </div>


                <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg w-1/3 h-40 mx-2">
                    <div className="flex items-center text-blue-500 text-xl font-bold">
                        <FaUser className="text-3xl" />
                        <span className="ml-2">Khách hàng</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">8</p>
                    <p className="text-sm text-gray-500">Hôm qua 7</p>
                    <div className="text-sm text-green-500">↑ 14%</div>
                </div>
            </div>


            {/* Biểu đồ */}
            <div className="mt-8 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Doanh Thu</h2>
                <RevenueChart />
            </div>

            {/* Biểu đồ khách hàng */}
            <div className="mt-8 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Biểu đồ số lượng khách hàng</h2>
                <CustomerChart />
            </div>

            {/* Biểu đồ doanh thu sản phẩm */}
            <div className="mt-8 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Biểu đồ doanh thu sản phẩm</h2>
                <ProductRevenueChart />
            </div>

        </div>

    )
}
