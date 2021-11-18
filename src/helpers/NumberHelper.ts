export const pluralizeWord = (words: string[], amount: number) => {
  if (words.length === 0) return amount;
  if (words.length !== 3) return words[0];
  if ((amount / 10) % 10 === 1) return words[2];
  switch (amount % 10) {
    case 1:
      return words[0];
    case 2:
    case 3:
    case 4:
      return words[1];
    default:
      return words[2];
  }
};
