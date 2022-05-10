export default function increment(productId) {
  return {
    type: "INCREMENT",
    payload: productId,
  };
}
export function decrement(productId) {
  return {
    type: "DECREMENT",
    payload: productId,
  };
}
