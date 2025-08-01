import { API_URL } from "../app/config";

export async function fetchUserById(id: number) {
    try {
        const url = `${API_URL}/api/users/${id}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data?.data;
        }
    } catch (error) {
        console.log(error);
    }
}