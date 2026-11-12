// Turns a post date such as "12 November 2026" into an ISO date (2026-11-12).
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const isoDate = (d: string) => {
  const [day, m, y] = d.split(' ');
  return `${y}-${String(months.indexOf(m) + 1).padStart(2, '0')}-${day.padStart(2, '0')}`;
};
