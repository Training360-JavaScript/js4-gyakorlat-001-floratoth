const sorterPromise = (arr = []) => {
  return new Promise((resolve, reject) => {
    const stringArr = [];
    arr.forEach((item) =>
      !(typeof item === "string")
        ? reject("Error: Not all elements are string type!")
        : stringArr.push(item)
    );
    resolve(stringArr.sort());
  });
};

export default sorterPromise;
