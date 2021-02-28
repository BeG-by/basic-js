module.exports = function transform(arr) {
  let copy = [...arr];

  const delKey = "!!!%%uniqueKeyForDelete%%!!!";

  copy.forEach((e, i) => {
    switch (e) {
      case "--double-next":
        i == copy.length - 1 ? (copy[i] = delKey) : (copy[i] = copy[i + 1]);
        break;
      case "--double-prev":
        i == 0 ? (copy[i] = delKey) : (copy[i] = copy[i - 1]);
        break;
      case "--discard-next":
        if (i != copy.length - 1) {
          copy[i + 1] = delKey;
        }
        copy[i] = delKey;
        break;
      case "--discard-prev":
        if (i != 0) {
          copy[i - 1] = delKey;
        }
        copy[i] = delKey;
        break;
    }
  });

  return copy.filter((e) => e !== delKey);
};
