// src/components/EditModal.jsx
import React from "react";

export default function EditModal({ selectedItem, onClose, onSave, onChange }) {
  return (
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
              onChange={onChange}
              className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Công ty</label>
            <input
              type="text"
              name="company"
              value={selectedItem.company}
              onChange={onChange}
              className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
            Đóng
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={onSave}>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
