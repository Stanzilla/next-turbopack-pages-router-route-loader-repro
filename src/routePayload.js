export function getRoutePayload(routeName) {
  return {
    routeName,
    items: Array.from({ length: 40 }, (_, index) => ({
      id: `${routeName}-${index}`,
      value: routeName.length * 100 + index * 13,
    })),
  };
}
