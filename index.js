const mazeGenerate = (S) => {
  if (!S) return console.log("S cannot be null!");
  if (typeof S !== "number") return console.log("S must be number");
  if (S <= 0) return console.log("S must be positive number");

  let output = "";
  let isLeft = true;

  const pagar = "@".repeat(S - 1);
  for (let h = 1; h <= S; h++) {
    output += "@"
    if (h % 2 === 1 && isLeft) {
      output += " " + pagar
    } else if (h % 2 === 1 && !isLeft) {
      output += pagar + " "
    } else {
      output += " ".repeat(S)
      isLeft = !isLeft
    }
    output += "@"
    output += "\n"
  }

  console.log(output)
};

mazeGenerate(15);