import { observable, action, toJS } from 'mobx'

export default class ThemeStore {
  constructor({ theme } = { theme: 'light' }) {
    this.theme = theme;
  }

  @observable theme

  @action
  setTheme(newTheme: string) {
    this.theme = newTheme
  }

  toJson() {
    return {
      theme: toJS(this.theme)
    }
  }
}
