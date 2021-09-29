const mazeGenerate = (S) => {
  if (!S) return console.log("S cannot be null!");
  if (typeof S !== "number") return console.log("S must be number");
  if (S <= 0) return console.log("S must be positive number");

  let output = "";
  let isLeft = true;

  const wall = "@".repeat(S - 3);
  for (let h = 1; h <= S; h++) {
    output += "@"
    if (h % 2 === 1 && isLeft) {
      output += " " + wall
    } else if (h % 2 === 1 && !isLeft) {
      output += wall + " "
    } else {
      output += " ".repeat(S - 2)
      isLeft = !isLeft
    }
    output += "@"
    output += "\n"
  }

  console.log(output)
};

mazeGenerate(15);
