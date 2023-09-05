function isArabic(text) {
  const arabic = /^[\u0621-\u064A ]*$/;
  return arabic.test(text);
}

export { isArabic };
