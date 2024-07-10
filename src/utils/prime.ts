export const primeAt = (n: number): number => {
  if (n < 1) throw new Error("Index must be greater than 0");

  const primes: number[] = [];
  let candidate = 2;

  while (primes.length < n) {
    if (primes.every((prime) => candidate % prime !== 0)) {
      primes.push(candidate);
    }
    candidate++;
  }

  return primes[n - 1];
};
