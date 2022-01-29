const surprise = () => {
  console.log(
    require("fs").readFileSync("/dev/stdin").toString().trim() + "??!"
  );
};

surprise();
