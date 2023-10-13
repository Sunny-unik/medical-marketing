export function validPaginationParams(count, upto) {
  if (typeof count !== "number") count = parseInt(count);

  return !!count && count > 0 && count <= upto;
}
