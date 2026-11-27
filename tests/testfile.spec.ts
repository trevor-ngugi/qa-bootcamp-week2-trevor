import { test, expect, APIRequestContext } from '@playwright/test'

test('C4 Add to a cart (API)', async ({ request }) => {
  const baseURL = 'https://api.practicesoftwaretesting.com';
  const productId = 'YOUR_VALID_PRODUCT_ID';
  const quantity = 2;

  let cartId: string | undefined;

  try {
    // 1. Create a cart
    const createResponse = await request.post(
      `${baseURL}/carts`
    );

    expect(createResponse.status()).toBe(201);

    const cart = await createResponse.json();
    cartId = cart.id;

    expect(cartId).toBeTruthy();

    // 2. Add a product to the cart
    const addResponse = await request.post(
      `${baseURL}/carts/${cartId}`,
      {
        data: {
          product_id: productId,
          quantity: quantity,
        },
      }
    );

    expect(addResponse.status()).toBe(200);

    // 3. Retrieve the cart
    const getResponse = await request.get(
      `${baseURL}/carts/${cartId}`
    );

    expect(getResponse.status()).toBe(200);
//here
    const cartDetails = await getResponse.json();

    // 4. Verify the product and quantity
    const addedItem = cartDetails.cart_items.find(
      (item: { product_id: string }) =>
        item.product_id === productId
    );

    expect(addedItem).toBeTruthy();
    expect(addedItem.quantity).toBe(quantity);

  } finally {
    // 5. Clean up the created cart
    if (cartId) {
      const deleteResponse = await request.delete(
        `${baseURL}/carts/${cartId}`
      );

      expect(deleteResponse.status()).toBe(204);
    }
  }
});