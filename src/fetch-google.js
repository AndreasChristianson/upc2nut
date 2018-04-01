import fetch from 'node-fetch';

export default async () => {
  const page = await fetch('http://google.com');
  const text = await page.text();
  return text;
}
