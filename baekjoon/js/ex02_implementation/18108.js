const thailand = () => {
  console.log(
    parseInt(require("fs").readFileSync("/dev/stdin").toString().trim()) - 543
  );
};

thailand();
