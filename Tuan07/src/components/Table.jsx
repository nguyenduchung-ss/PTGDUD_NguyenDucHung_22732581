// src/components/Table.jsx
import React, { useState, useEffect } from "react";
import { fetchUsers, updateUser, addUser } from "../api/userApi";
import EditModal from "./EditModal";

export default function Table() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("edit"); // "edit" or "add"
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
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setSelectedItem({
      name: "",
      avatar: "/icons/Avatar (1).png",
      company: "",
      value: "",
      date: new Date().toLocaleDateString("en-GB"),
      status: "New",
      statusColor: "bg-blue-100 text-blue-600"
    });
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  };

  const handleSave = async () => {
    try {
      if (modalMode === "edit") {
        await updateUser(selectedItem.id, selectedItem);
        setSuccessMessage("Cập nhật thành công!");
      } else {
        await addUser(selectedItem);
        setSuccessMessage("Thêm người dùng thành công!");
      }
      setIsModalOpen(false);
      await loadData();
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      alert("Có lỗi xảy ra: " + error.message);
    }
  };

  return (
    <div className="p-4">
      {successMessage && (
        <div className="mb-4 text-green-600 font-medium">{successMessage}</div>
      )}

      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleAddClick}
      >
        + Thêm người dùng
      </button>

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
        <EditModal
          selectedItem={selectedItem}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          onChange={handleChange}
          mode={modalMode}
        />
      )}
    </div>
  );
}
