// 实现一个特殊的栈，在实现栈的基本功能的基础上，再实现返回栈中最小元素的操作。
// 要求:
// 1.pop、push、getMin操作的时间复杂度都是O（1）。
// 2.设计的栈类型可以使用现成的栈结构。

class Stack {
  constructor() {
    this.list = []
    this.minList = []
  }

  push(item) {
    this.list.push(item)
    if (this.minList.length === 0) {
      this.minList.push(item)
    } else {
      const lastItem = this.minList[this.minList.length - 1]
      if (item < lastItem) {
        this.minList.push(item)
      }
    }
  }


  pop() {
    const item = this.list.pop()
    const lastItem = this.minList[this.minList.length - 1]
    if (item === lastItem) {
      this.minList.pop()
    }
    return item
  }

  getMin() {
    return this.minList[this.minList.length - 1]
  }

}

const a = new Stack()

a.push(3)
a.push(2)
a.push(1)
a.push(4)
a.push(5)

console.log(a)
// console.log(a.getMin())


