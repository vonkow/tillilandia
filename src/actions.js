export default class Actions {

  constructor (state) {
    this.state = state
  }

  setFoo (val) {
    this.state.foo = val
  }

  getAllTillys () {
    fetch('/api/tillandsias/').then(res => res.json()).then(data => {
      console.log(data)
      data.results.map(tilly => this.state.tillys.push(tilly))
      console.log(this.state.tillys[0])

    })
  }

}
