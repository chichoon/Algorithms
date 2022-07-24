const apple = () => {
  console.log(`:fan::fan::fan:
:fan::${require("fs").readFileSync("/dev/stdin").toString().trim()}::fan:
:fan::fan::fan:`);
};

apple();
