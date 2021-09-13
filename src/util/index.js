export const matchDriver = ({ firstname, lastname }, value) => {
  return `${firstname} ${lastname}`.toLowerCase().startsWith(value.toLowerCase()) || lastname.toLowerCase().startsWith(value.toLowerCase())
}
export const mapDriversFromTeam = ({ drivers, name, engine, color }) => {
  return drivers.map(driver => ({ ...driver, team: name, engine, color }))
}
export const generatePrice = () => {
  const createSeed = () => Math.random() * Math.floor(Math.random() * 100)
  const seed1 = createSeed()
  const seed2 = createSeed()
  return Math.floor(seed1 * seed2)
}