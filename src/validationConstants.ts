export const requiredRule = (label: string, value: any) =>
  !value || value.length === 0 ? `${label} is required` : null
export const minLengthRule = (label: string, value: any) =>
  value.length < 3 ? `${label} must be at least 3 characters` : null
export const maxLengthRule = (label: string, value: any) =>
  value.length > 500 ? `${label} must be under 500 characters` : null
