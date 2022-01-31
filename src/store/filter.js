import { makeAutoObservable} from "mobx"

class FilterBrend {
  activeBrendName = 'Alphabet';
  activeBrendType = 'name'
  query = ''
  constructor() {
    makeAutoObservable(this)
  }

  selectActiveBredn (name, type) {
    this.activeBrendName = name
    this.activeBrendType = type
  }

  onChangeQuery(text) {
    this.query = text
  }

}

const filterBrend = new FilterBrend()

export default filterBrend;