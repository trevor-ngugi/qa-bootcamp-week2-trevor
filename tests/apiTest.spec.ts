import { test, expect } from '@playwright/test';

test('simple get request', async ({ request }) => {

  const response= await request.get('https://api.practicesoftwaretesting.com/products')
  const responseObject=await response.json()
  console.log(responseObject)
});