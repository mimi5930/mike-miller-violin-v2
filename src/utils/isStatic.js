export function isStatic() {
  return process.env.REACT_APP_STATIC_BUILD === 'true';
}
