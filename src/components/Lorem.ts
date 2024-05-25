export async function lorem({ sentence }: { sentence: number }) {
  const data = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=1&sentences=${sentence}`);
  const response = await data.json();
  return response[0];
}
