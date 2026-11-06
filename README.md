# Pie Riot

A mobile-responsive ecommerce storefront for wild pie flavors — searchable shop, product galleries, cart, checkout, profile shipping, and feedback pages.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/shop` | Searchable / filterable product grid |
| `/pie/:slug` | Product detail (gallery, variants, add to cart) |
| `/cart` | Cart |
| `/checkout` | Checkout |
| `/success/:orderId` | Order success |
| `/profile` | Shipping address profile |
| `/warning` | Allergy & handling warnings (nav) |
| `/poll` | Experience ratings |
| `/report` | Feedback report |
| `/about` | Bakery story |

Cart and profile data persist in `localStorage`. Checkout is a demo flow (no real payments).
