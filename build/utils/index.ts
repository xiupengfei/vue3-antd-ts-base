import path from 'path'

// Read all environment variable configuration files to process.env
export const wrapperEnv = (envConf: Record<string, string>): ViteEnv => {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName: any = envConf[envName].replace(/\\n/g, '\n')

    realName = realName == 'true' ? true : realName == 'false' ? false : realName

    if (envName === 'VITE_PORT') {
      realName = +realName
    }

    ret[envName] = realName
    process.env[envName] = realName
  }
  return ret
}

/**
 * Get user root directory
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir)
}
