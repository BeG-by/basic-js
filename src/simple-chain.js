const chainMaker = {
  chain: [],
  getLength() {
    let temp = this.chain.length;
    this.chain = [];
    return temp;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let temp = [...this.chain];
    this.chain = [];
    return temp.join("~~");
  },
};

module.exports = chainMaker;
