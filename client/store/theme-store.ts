import { observable, action, toJS } from 'mobx'

export default class ThemeStore {
  @observable theme = 'light'

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
