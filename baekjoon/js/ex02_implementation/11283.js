const kor = () => {
  console.log(
    require("fs").readFileSync("/dev/stdin").toString().trim().charCodeAt(0) -
      44031
  );
};

kor();
