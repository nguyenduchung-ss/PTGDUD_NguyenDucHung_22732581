// src/components/EditModal.jsx
import React from "react";

export default function EditModal({ selectedItem = {}, onClose, onSave, onChange, mode = "edit" }) {
  return (
    <div className="fixed top-[20%] left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">
          {mode === "add" ? "Thêm người dùng" : "Chỉnh sửa thông tin"}
        </h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium">Tên khách hàng</label>
            <input
              type="text"
              name="name"
              value={selectedItem.name || ""}
              onChange={onChange}
              className="w-full border rounded px-3 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Công ty</label>
            <input
              type="text"
              name="company"
              value={selectedItem.company || ""}
              onChange={onChange}
              className="w-full border rounded px-3 py-1"
            />
          </div>
          {/* Thêm các trường cần thiết khác tương tự */}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="text-gray-600">Hủy</button>
          <button
            onClick={onSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {mode === "add" ? "Thêm" : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
}
