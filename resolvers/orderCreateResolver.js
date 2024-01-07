export function request() {
  return {};
}
export function response(ctx) {
  const request = ctx.args.createOrderInput;
  return {
    productId: request?.productId,
  };
}
