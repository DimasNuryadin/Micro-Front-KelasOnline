export default (number) => {
  const thousand = new Intl.NumberFormat("id-ID");
  return thousand.format(number)
}