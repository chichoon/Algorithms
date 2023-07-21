const school = () => {
  const short = require("fs").readFileSync("/dev/stdin").toString().trim();
  switch (short) {
    case "NLCS":
      console.log("North London Collegiate School");
      break;
    case "BHA":
      console.log("Branksome Hall Asia");
      break;
    case "KIS":
      console.log("Korea International School");
      break;
    case "SJA":
      console.log("St. Johnsbury Academy");
      break;
    default:
      console.log("");
      break;
  }
};

school();
