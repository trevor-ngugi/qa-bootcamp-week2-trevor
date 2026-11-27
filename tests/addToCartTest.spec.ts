import { test, expect } from '@playwright/test';

test('C4  add to a cart', async ({ request }) => {
//to get cart id
  const response= await request.post('https://api.practicesoftwaretesting.com/carts')
  console.log('Status:', response.status());
  console.log('Response:', await response.text());
  expect(response.status()).toBe(201);

  const cartdetails= await response.json();
  const cartdetailsId=cartdetails.id
  console.log('Created cart ID:', cartdetailsId);

  const addProductToCart=await request.post( `https://api.practicesoftwaretesting.com/carts/${cartdetailsId}`,
    {
        data:{
            "product_id":"01M8F62GSS0VDKKMGE75MS6XBE",
            "quantity":1
        },
    }
    
  );
    expect(addProductToCart.status()).toBe(200);

    console.log('Add product status:', addProductToCart.status());
    console.log('Add product response:', await addProductToCart.text());

    const readTheCart=await request.get(`https://api.practicesoftwaretesting.com/carts/${cartdetailsId}`)
    console.log("read the cart" ,readTheCart.status())
    expect(readTheCart.status()).toBe(200); 
 
});





