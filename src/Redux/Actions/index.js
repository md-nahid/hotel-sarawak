export default function increment(productId) {
  return {
    type: "INCREMENT",
    payload: productId,
  };
}
