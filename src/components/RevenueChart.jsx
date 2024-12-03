import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Khai báo hải quan
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RevenueChart() {
    //Fake data@@
    const data = {
        labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"], // Ngày
        datasets: [
            {
                label: "Doanh thu (giờ sáng)", // Doanh thu giờ sáng
                data: [1200, 1900, 3000, 5000, 2000, 3000, 4000], // Doanh thu mỗi ngày
                borderColor: "rgba(75, 192, 192, 1)", // Màu viền
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Màu nền
                tension: 0.3, // Độ cong của đường
            },
            {
                label: "Doanh thu (giờ chiều)", // Doanh thu giờ chiều
                data: [2200, 1500, 4000, 3000, 5000, 7000, 6000],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.3,
            },
        ],
    };

    //options để config
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Doanh thu theo ngày và giờ",
            },
        },
    };

    return (
        <div className="w-full">
            <Line data={data} options={options} />
        </div>
    );
}
