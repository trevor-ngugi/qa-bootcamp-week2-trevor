import { test, expect } from '@playwright/test';

test('create cart', async ({ request }) => {

  const response= await request.post('https://api.practicesoftwaretesting.com/carts',
    {
        data:{
            "product_id": "01HHJC7RERZ0M3VDGS6X9HM33A",
            "quantity": 14
        }
    }
  )

  console.log('Status:', response.status());
  console.log('Response:', await response.text());

  expect(response.status()).toBe(201);
  
  const responseData = await response.json()
  console.log(responseData);
  expect(responseData).toHaveProperty('id');
  const cartId=responseData.id;
  const deleteResponse = await request.delete(`https://api.practicesoftwaretesting.com/carts/${cartId}`);
  expect(deleteResponse.status()).toBe(200);
  
  //const responseObject=await response.json()
  //console.log(responseObject)
  //HTTP status to be 100
  //expect(response.status()).toBe(200)
  //data field should have an ID
  //expect(responseObject.data).toHaveId
});