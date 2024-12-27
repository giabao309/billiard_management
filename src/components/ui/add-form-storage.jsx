import React, { useState, useEffect } from "react";
import { fetchServices, fetchCategories, createWarehouseItem } from "@/APIs/BilliardApi";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function AddStorage({ onClose, branchId, onAddSuccess }) {
    const [formData, setFormData] = useState({
        service_id: "",
        category_id: "",
        entry_price: "",
        entry_quantity: "",
    });

    const [services, setServices] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const serviceData = await fetchServices();
                const categoryData = await fetchCategories();
                setServices(serviceData);
                setCategories(categoryData);
            } catch (error) {
                console.error("Error fetching dropdown data:", error.message);
            }
        };

        fetchData();
    }, []);

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const dataToSend = { branch_id: branchId, ...formData };
            await createWarehouseItem(dataToSend);
            alert("Thêm sản phẩm thành công!");
            onAddSuccess(); // Làm mới danh sách
            onClose(); // Đóng form
        } catch (error) {
            console.error("Error adding item:", error.message);
            alert("Đã xảy ra lỗi khi thêm sản phẩm!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Thêm Sản Phẩm</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium">Tên sản phẩm</label>
                    <Select onValueChange={(value) => handleChange("service_id", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Chọn sản phẩm" />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map((service) => (
                                <SelectItem key={service.service_id} value={service.service_id}>
                                    {service.service_name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Loại thực đơn</label>
                    <Select onValueChange={(value) => handleChange("category_id", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Chọn loại thực đơn" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category.service_category_id} value={category.service_category_id}>
                                    {category.service_category_name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Giá bán</label>
                    <Input
                        type="number"
                        placeholder="Nhập giá bán"
                        value={formData.entry_price}
                        onChange={(e) => handleChange("entry_price", e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Số lượng</label>
                    <Input
                        type="number"
                        placeholder="Nhập số lượng"
                        value={formData.entry_quantity}
                        onChange={(e) => handleChange("entry_quantity", e.target.value)}
                        required
                    />
                </div>

                <div className="flex justify-end gap-4">
                    <Button onClick={onClose} type="button">
                        Hủy
                    </Button>
                    <Button type="submit" loading={loading}>
                        Lưu
                    </Button>
                </div>
            </form>
        </div>
    );
}
