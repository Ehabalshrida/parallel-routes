export async function getOrdersCountFromDB() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "orders: 10";
}
export async function getSalesFromDB() {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return "sales: 100";
}
export async function getProfitFromDb() {
  await new Promise((resolve) => setTimeout(resolve, 1400));
  return "profit: 1000";
}
export function getUser() {
  return {
    isAdmin: true,
    isManager: false,
    id: 101,
  };
}
