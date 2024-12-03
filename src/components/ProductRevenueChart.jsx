import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ProductRevenueChart() {

    const data = {
        labels: ["Sản phẩm A", "Sản phẩm B", "Sản phẩm C", "Sản phẩm D", "Sản phẩm E"],
        datasets: [
            {
                label: "Doanh thu (VNĐ)",
                data: [1200000, 1900000, 3000000, 5000000, 2000000],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Doanh thu sản phẩm hàng hóa",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="w-full">
            <Bar data={data} options={options} />
        </div>
    );
}
