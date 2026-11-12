// Turns a post date such as "July 2025" into an ISO date (first of that month).
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const isoDate = (d: string) => {
  const [m, y] = d.split(' ');
  return `${y}-${String(months.indexOf(m) + 1).padStart(2, '0')}-01`;
};
