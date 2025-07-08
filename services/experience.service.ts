import { API_URL } from "../app/config";

export async function fetchExperience() {
    try {
        const url = `${API_URL}/api/experiences/`;
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