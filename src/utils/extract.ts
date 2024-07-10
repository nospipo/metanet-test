export function extract(input: string): string {
  const regex = /Hello (.*?) world/;
  const match = input.match(regex);
  return match ? match[1] : "";
}
