export default function orderByProps(character, constOrderParams = []) {
  let parameters = [];
  for (const parameter in character) {
    if (constOrderParams.indexOf(parameter) === -1) {
      parameters.push(parameter);
    }
  }
  parameters = [...constOrderParams, ...parameters.sort()];

  const sortedParams = [];
  for (const key of parameters) {
    sortedParams.push({ key, value: character[key] });
  }
  return sortedParams;
}
