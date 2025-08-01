import { API_URL } from "@/app/config";

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
            const sortedData = data?.data?.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
            return sortedData;
        }
    } catch (error) {
        console.error('Failed to fetch experience:', error);
    }
}