import { HttpParams } from '@angular/common/http'
import { Dictionary } from './data'

export function queryParams(map: Dictionary<any>): HttpParams
export function queryParams(key: string, value: any): HttpParams
export function queryParams(keyOrMap: string | Dictionary<any>, value?: any) {
  if (typeof keyOrMap === 'object') {
    return new HttpParams({ fromObject: keyOrMap as Dictionary<any> })
  }

  return new HttpParams().set(keyOrMap as string, value)
}
