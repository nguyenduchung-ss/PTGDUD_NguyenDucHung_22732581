import React, { useState, useEffect } from 'react';

export default function Table() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // 👈 user đang được edit
  const [isModalOpen, setIsModalOpen] = useState(false); // 👈 trạng thái modal

  const fetchData = (url, setDataResponse) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataResponse(data);
      });
  };

  useEffect(() => {
    fetchData("https://67de7a15471aaaa7428491fc.mockapi.io/table", setData);
  }, []);

  // Hàm mở modal chỉnh sửa
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Hàm xử lý khi lưu
  const handleSave = () => {
    // Ở đây bạn có thể gọi API PUT để cập nhật nếu muốn
    console.log("Lưu thay đổi:", selectedItem);
    setIsModalOpen(false);
  };

  // Hàm cập nhật thông tin khi thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  };

  return (
    <div className='p-4'>
      <div className='overflow-x-auto rounded-lg shadow'>
        <table className='w-full text-sm text-left text-gray-700'>
          <thead className='bg-gray-100 text-gray-600 uppercase'>
            <tr>
              <th className='p-4'><input type='checkbox' /></th>
              <th className='p-4'>Customer Name</th>
              <th className='p-4'>Company</th>
              <th className='p-4'>Order Value</th>
              <th className='p-4'>Order Date</th>
              <th className='p-4'>Status</th>
              <th className='p-4'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className='border-b'>
                <td className='p-4'><input type='checkbox' /></td>
                <td className='p-4 flex items-center'>
                  <img src={item.avatar} alt='avatar' className='w-8 h-8 rounded-full mr-3' />
                  <span className='font-medium'>{item.name}</span>
                </td>
                <td className='p-4'>{item.company}</td>
                <td className='p-4'>{item.value}</td>
                <td className='p-4'>{item.date}</td>
                <td className='p-4'>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className='p-4'>
                  <img
                    src='/icons/create.png'
                    alt='edit'
                    className='w-4 h-4 cursor-pointer'
                    onClick={() => handleEditClick(item)} // 👈 Bấm là mở modal
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


      {/* Pagination */}
      <div className='flex justify-between items-center mt-4 px-2 text-sm text-gray-500'>
        <div>{data.length} results</div>
        <div className='flex items-center space-x-2'>
          {[1, 2, 3, 4, 5, 10, 11].map((n) => (
            <button
              key={n}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${n === 1 ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
