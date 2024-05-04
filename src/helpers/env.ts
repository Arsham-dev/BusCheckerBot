const env = (name: string) => {
  const value = process.env[name]

  if (!value) throw new Error('No value for env variable : ' + name)

  return value
}

export default env
