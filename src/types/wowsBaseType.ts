/**
 * 后台接口返回的服务器列表格式
 */
export interface WowsServer {
  key: string // eu
  value: string // 欧服
}
/**
 * 后台接口返回的舰船种类格式
 */
export interface ShipType {
  shipType: string // "Battleship"
  typeName: string // "战列舰"
}

/**
 * 舰船国家
 */
export interface NationType {
  nation: string
  cn: string
}

export interface ShipInfo {
  shipId: number // 船只id
  nameCn: string
  nameEnglish: string
  nameNumbers: string
  level: number
  shipType: string
  country: string
  imgSmall: string
  imgLarge: string
  imgMedium: string
  shipIndex: 'PJSD111'
  groupType: 'superShip'
}
