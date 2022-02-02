const prime = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let prime = 2;
  let ans = [];
  while (prime <= input) {
    if (!(input % prime)) {
      ans.push(prime);
      input /= prime;
    } else prime++;
  }
  console.log(ans.join("\n"));
};

prime();
