export function getPageSection(data: any, tabIndex: number): any {
  if (!data) return {};
  return data.tabs?.[tabIndex] || data;
}
