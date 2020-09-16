const whichDirection = (deg) => {
  let direction = "";
  console.log(deg);
  switch (deg) {
    case deg < 23 || deg > 337:
      direction = "Északi";
      break;
    case deg < 68:
      direction = "Észak-Keleti";
      break;
    case deg < 113:
      direction = "Keleti";
      break;
    case deg < 158:
      direction = "Dél-Keleti";
      console.log("mivan");
      break;
    case deg < 203:
      direction = "Dél";
      break;
    case deg < 248:
      direction = "Dél-Nyugati";
      break;
    case deg < 293:
      direction = "Nyugati";
      break;
    case deg < 338:
      direction = "Észak-Nyugati";
      break;
    default:
  }
  return direction;
};

export default whichDirection;
