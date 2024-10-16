# spokesafe-test

Preparation

1. Clone/extract this repo from the provided link.
2. Run `npm install`

## Task 1

For the sake of this test, a `Reservation` has `start` and `end` properties only.

Convenience scripts has been created to facilitate operations.

`npm run list`: This script will attempt to list all available reservations order by its start column in descending order (most recent first).

`npm run seed`: This script will attempt to generate random reservations and store them on firestore.

`npm run task1`: This script will execute `task1.ts` which it will try to get reservations in between dates and prints them on console.

![Task 1](https://i.imgur.com/I46J0Ql.gif)

## Task 2

For this task, it's very straightforward. Just open `task2.html` on your browser of choice.

To begin, just paste any valid JSON data inside the textbox below the "JSON Input" title then click the "Process" button. After clicking, it should display the JSON data in an unordered HTML list.

If it can't parse the data (due to errors or the data itself being invalid), it should display "Input invalid" under "Output" section.

If you don't have any data yet, you can use this:

```json
{
  "users": {
    "id": 12345,
    "name": "John Doe",
    "isActive": true,
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "zipcode": 10001,
      "coordinates": {
        "latitude": 40.712776,
        "longitude": -74.005974
      }
    },
    "preferences": {
      "newsletter": false,
      "notifications": ["email", "sms"],
      "theme": "dark",
      "backupEmails": null
    }
  },
  "orders": [
    {
      "orderId": "A1B2C3",
      "amount": 250.75,
      "products": [
        { "id": "p123", "name": "Laptop", "price": 999.99 },
        { "id": "p124", "name": "Mouse", "price": 49.99 }
      ],
      "status": "shipped"
    },
    {
      "orderId": "D4E5F6",
      "amount": 75.50,
      "products": [
        { "id": "p125", "name": "Keyboard", "price": 75.50 }
      ],
      "status": "delivered"
    }
  ],
  "membership": {
    "tier": "gold",
    "expirationDate": "2025-12-31T23:59:59Z",
    "renewal": {
      "autoRenew": true,
      "renewalDate": "2025-12-01T00:00:00Z
    }
  },
  "favoriteNumbers": [7, 13, 22, 42],
  "settings": {
    "volume": 75,
    "resolution": {
      "width": 1920,
      "height": 1080
    },
    "languages": ["en", "es", "fr"]
  },
  "comments": null
}
```

![Task 2](https://i.imgur.com/6FExStk.gif)
