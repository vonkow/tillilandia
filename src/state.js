import {observable} from 'mobx'

export default class State {

  @observable foo
  @observable tillys

  constructor () {
    this.foo = 'BAR'
    this.tillys = []
  }

}
