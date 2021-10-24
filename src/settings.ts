export interface ISettings {
  appName: string
  version: string
  dark: boolean
}

const settings: ISettings = {
  appName: '系统名称',
  version: 'V0.0.2',
  dark: false, // 黑夜模式
}

export default settings
