// src/api/userApi.js
const BASE_URL = "https://67de7a15471aaaa7428491fc.mockapi.io/table";

export const fetchUsers = async() => {
    const res = await fetch(BASE_URL);
    return res.json();
};

export const updateUser = async(id, data) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const addUser = async(newUser) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });

    if (!response.ok) throw new Error("Failed to add user");
    return await response.json();
};