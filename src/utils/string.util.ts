export function treatUndefinedAsEmpty(value: string | undefined | number) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}
