import React from 'react';

const ClientSection = () => {
    return (
        <div className="bg-gray-50 pb-10">
            {/* Greeting Message Section */}
            <div className="relative bg-white mx-auto max-w-4xl mt-10 p-6 rounded-lg border border-gray-200 shadow-md text-center">
                <div className="border border-dashed border-pink-400 rounded-lg p-4">
                    <h1 className="text-2xl font-handwriting text-black mb-4">
                        Cảm ơn bạn vì đã đến Ways mỗi ngày, “xài combo” giải trí-thể thao nhà chúng tớ ❤️
                    </h1>
                </div>

                {/* Plush Toys */}
                <div className="flex justify-center space-x-4 mt-6">
                    <img src="/path/to/toy1.png" alt="Toy 1" className="h-24" />
                    <img src="/path/to/toy2.png" alt="Toy 2" className="h-24" />
                    <img src="/path/to/toy3.png" alt="Toy 3" className="h-24" />
                </div>
            </div>

            {/* Billiards Room Background with Description */}
            <div className="relative mt-10">
                <img src="/path/to/billiards-room.jpg" alt="Billiards Room" className="w-full h-96 object-cover" />
                <div className="absolute bottom-10 left-10 text-white">
                    <p className="bg-orange-500 px-4 py-2 rounded-md text-sm font-semibold">XEM NGAY</p>
                    <p className="mt-4 max-w-xs bg-black bg-opacity-70 px-4 py-2 rounded-md">
                        Không gian được thiết kế rộng rãi, mát lạnh, có máy xông tinh dầu tạo mùi thơm dễ chịu. Hệ thống bàn billiards hiện đại, đạt tiêu chuẩn quốc tế.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ClientSection;
