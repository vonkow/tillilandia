import {observable} from 'mobx'

export default class State {

  @observable tillys

  constructor () {
    this.tillys = observable([])
  }

}
