function interpolate(literals, ...expressions) {
  console.log("Lietreals: ", literals);
  console.log("Expressions: ", expressions);
  let string = ``;
  for (const [i, val] of expressions.entries()) {
    string += literals[i] + val;
  }
  string += literals[literals.length - 1];
  return string;
}

const interpolated = interpolate`I paid ${10}€ and also ${1345}`;

console.log(interpolated);