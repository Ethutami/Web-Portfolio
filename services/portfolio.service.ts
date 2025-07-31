// import { API_URL } from "../app/config";
const API_URL = 'http://localhost:8010'
import imageData from "../interfaces/portofolio.interface";

function sortPortfolioByStartDateDescending(data: imageData[]): imageData[] {
    return data.sort((a, b) => {
        return new Date(b.project_start_date).getTime() - new Date(a.project_start_date).getTime();
    });
}

export async function fetchPortfolio() {
    try {
        const url = `${API_URL}/api/portfolios/`;
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

export async function getSortedPortfolio() {
    const data = await fetchPortfolio();
    if (data) {
        const sorted = sortPortfolioByStartDateDescending(data);
        return sorted;
    }
}