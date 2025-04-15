import React, { useState, useEffect } from "react";
import { fetchUsers, updateUser } from "../api/userApi";

export default function Table() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const loadData = async () => {
    const users = await fetchUsers();
    setData(users);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  };

  const handleSave = async () => {
    if (!selectedItem?.id) {
      alert("Không tìm thấy ID người dùng để cập nhật!");
      return;
    }
  
    console.log("Đang PUT user:", selectedItem); // ✅ debug ID
    const updated = await updateUser(selectedItem.id, selectedItem);
    setIsModalOpen(false);
    setSuccessMessage("✅ Cập nhật thành công!");
    await loadData(); // Cập nhật lại bảng
    setTimeout(() => setSuccessMessage(""), 3000);
  };
  

  return (
    <div className="p-4">
      {successMessage && (
        <div className="mb-4 text-green-600 font-medium">{successMessage}</div>
      )}

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="p-4"><input type="checkbox" /></th>
              <th className="p-4">Customer Name</th>
              <th className="p-4">Company</th>
              <th className="p-4">Order Value</th>
              <th className="p-4">Order Date</th>
              <th className="p-4">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4"><input type="checkbox" /></td>
                <td className="p-4 flex items-center">
                  <img
                    src={item.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="font-medium">{item.name}</span>
                </td>
                <td className="p-4">{item.company}</td>
                <td className="p-4">{item.value}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4">
                  <img
                    src="/icons/create.png"
                    alt="edit"
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleEditClick(item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedItem && (
        <div className="fixed top-[20%] left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Chỉnh sửa thông tin</h2>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Tên khách hàng</label>
                <input
                  type="text"
                  name="name"
                  value={selectedItem.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Công ty</label>
                <input
                  type="text"
                  name="company"
                  value={selectedItem.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Đóng
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleSave}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
