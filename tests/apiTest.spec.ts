import { test, expect } from '@playwright/test';

test('simple get request', async ({ request }) => {

  const response= await request.get('https://api.practicesoftwaretesting.com/products')
  const responseObject=await response.json()
  console.log(responseObject)
  //HTTP status to be 100
  expect(response.status()).toBe(200)
  //data field should have an ID
  expect(responseObject.data).toHaveId
});