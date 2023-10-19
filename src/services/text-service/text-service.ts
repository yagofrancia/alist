export function startsWith(firstStr: string, secondStr: string) {
  for (let i = 0; i < secondStr.length; i += 1) {
    if (secondStr[i] !== firstStr[i]) {
      return false;
    }
  }

  return true;
}
