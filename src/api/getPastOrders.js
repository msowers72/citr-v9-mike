export default async function getePastOrders(page) {
    const response = await fetch(`/api/past-orders?page=${page}`);
    const data = await response.json();
    return data;
};