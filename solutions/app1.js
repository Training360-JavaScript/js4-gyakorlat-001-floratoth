const converterPromise = (arr = []) => {
  return new Promise((resolve, reject) => {
    const upperCaseArr = arr.map((item) =>
      typeof item === "string"
        ? item.toUpperCase()
        : reject("Error: Not all elements are string type!")
    );
    resolve(upperCaseArr);
  });
};

export default converterPromise;
