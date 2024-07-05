// 实现一个特殊的栈，在实现栈的基本功能的基础上，再实现返回栈中最小元素的操作。
// 要求:
// 1.pop、push、getMin操作的时间复杂度都是O（1）。
// 2.设计的栈类型可以使用现成的栈结构。

class Stack {
  constructor() {
    this.list = []
    this.minList = []
  }

  getLen() {
    return this.list.length
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


  getLast(list) {

    let item = list.pop();

    if (list.length === 0) {
      return item
    } else {
      const last = this.getLast(list)
      list.push(item)
      return last
    }

  }

  reverise () {
    if (this.list.length === 0) {
      return
    }
    const last = this.getLast(this.list)
    console.log('before', last)
    this.reverise()
    console.log('after', last)
    this.list.push(last)
    return last
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
// 两个栈合成队列
// 编写一个类，用两个栈实现队列，支持队列的基本操作（add、poll、peek）

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.size = 0;
  }


  add(item) {
    this.stack1.push(item)
    this.size ++
  }

  poll() {
    for (let i = 0; i < this.size; i++) {
      const item = this.stack1.pop();
      this.stack2.push(item)
    }
    const item  = this.stack2.pop()
    let temp = this.stack1;
    this.stack1 = this.stack2;
    this.stack2 = temp
    return item
  }

}

// 实现栈中元素的逆序，但是只能用递归函数来实现，不能用其他数据结构。
// [1,2,3,4,5]
// [5,4,3,2,1]



const stack = new Stack();

stack.push(4)
stack.push(2)
stack.push(1)
stack.push(3)
stack.push(5)



// 用一个栈实现另一个栈的排序
// 一个栈中元素的类型为整型，现在想将该栈从顶到底按从大到小的顺序排序，只许申请一个栈。 

const sortStack = (stack) => {
  let help = [];

  while (stack.length > 0) {
    const cur = stack.pop();
    const top = help.pop()
    // 如果当前元素比栈顶元素小，那么直接入栈
    if (top === undefined) {
      help.push(cur)
    } else if (cur < top) {
      help.push(top)
      help.push(cur)
    } else {
      stack.push(top)
      stack.push(cur)
    }
  }
}
