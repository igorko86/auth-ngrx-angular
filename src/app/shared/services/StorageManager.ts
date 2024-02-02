import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StorageManager {
  set(key: string, val: unknown) {
    try {
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (e) {
      console.error('Error Set item to storage')
    }
  }
  get(key: string) {
    try {
      const data = window.localStorage.getItem(key)
      return data ? JSON.parse(data) : null
    } catch (e) {
      console.error('Error Get item from storage')
    }
  }
}
