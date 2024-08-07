export const limitTextTo200Words = (text) => {
  const words = text.split(" ");
  if (words.length > 50) {
    return words.slice(0, 50).join(" ") + "...";
  }
  return text;
};
