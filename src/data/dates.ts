// Turns a post date into an ISO date. "November 2026" gives "2026-11"; "12 November 2026" gives "2026-11-12".
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const isoDate = (d: string) => {
  const parts = d.split(' ');
  const y = parts[parts.length - 1];
  const mm = String(months.indexOf(parts[parts.length - 2]) + 1).padStart(2, '0');
  return parts.length === 3 ? `${y}-${mm}-${parts[0].padStart(2, '0')}` : `${y}-${mm}`;
};
