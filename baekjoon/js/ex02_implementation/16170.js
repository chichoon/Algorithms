const today = () => {
  const date = new Date();
  console.log(
    `${date.getUTCFullYear()}\n0${date.getUTCMonth() + 1}\n${date.getUTCDate()}`
  );
};

today();
