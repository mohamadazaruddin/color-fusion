export function useColor() {
  const primaryColor = process.env.PRIMARY_COLOR;
  const secondaryColor = process.env.SECONDARY_COLOR;
  return { primaryColor, secondaryColor };
}
