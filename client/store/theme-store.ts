import { observable, action, toJS } from 'mobx'

export default class ThemeStore {
  constructor({ theme = '' } = {}) {
    if (typeof window !== 'undefined') { // eslint-disable-line
      console.log('data', theme);
      this.theme = theme
    }
  }

  @observable theme: string | undefined

  @action
  setThemeColor(theme: string) {
    this.theme = theme
  }

  toJson() {
    return {
      theme: toJS(this.theme)
    }
  }
}
