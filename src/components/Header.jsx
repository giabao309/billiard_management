import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-blue-500 text-white">
            <div className="flex items-center">
                <img src="/path/to/logo.png" alt="Logo" className="h-10 mr-3" />
                <span className="font-bold text-lg">Billiard Center</span>
            </div>

            <nav className="flex flex-grow justify-evenly text-lg">
                <a href="#home" className="hover:text-gray-300">Trang chủ</a>
                <a href="#book" className="hover:text-gray-300">Đặt bàn</a>
                <a href="#branches" className="hover:text-gray-300">Hệ thống chi nhánh</a>
                <a href="#careers" className="hover:text-gray-300">Tuyển dụng</a>
                <a href="#news" className="hover:text-gray-300">Tin tức và khuyến mãi</a>
            </nav>
        </header>

    );
};

export default Header;
