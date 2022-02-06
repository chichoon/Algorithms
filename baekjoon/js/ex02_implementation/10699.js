const today = () => {
  console.log(new Date().toISOString().split("T")[0]);
};

today();
