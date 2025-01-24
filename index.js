const express = require('express');
const app = express();
const port = 5000;

// Coupon data
const coupons = [
    {
        store: "Amazon",
        discount: "10% Off",
        description: "Get 10% off on orders above $50",
        valid_until: "2025-01-31",
        source: "Amazon Deals",
        photo: "https://example.com/amazon.jpg"
      },
      {
        store: "Flipkart",
        discount: "20% Off",
        description: "20% off on Electronics",
        valid_until: "2025-02-15",
        source: "Flipkart Offers",
        photo: "https://example.com/flipkart.jpg"
      },
      {
        store: "eBay",
        discount: "15% Off",
        description: "15% off sitewide",
        valid_until: "2025-02-20",
        source: "eBay Coupons",
        photo: "https://example.com/ebay.jpg"
      },
      {
        store: "Walmart",
        discount: "5% Cashback",
        description: "5% cashback on groceries",
        valid_until: "2025-02-28",
        source: "Walmart Rewards",
        photo: "https://example.com/walmart.jpg"
      },
      {
        store: "Myntra",
        discount: "25% Off",
        description: "Flat 25% off on fashion wear",
        valid_until: "2025-02-10",
        source: "Myntra Deals",
        photo: "https://example.com/myntra.jpg"
      },
      {
        store: "Ajio",
        discount: "30% Off",
        description: "30% off on footwear",
        valid_until: "2025-02-25",
        source: "Ajio Offers",
        photo: "https://example.com/ajio.jpg"
      },
      {
        store: "Snapdeal",
        discount: "10% Off",
        description: "10% discount on mobile accessories",
        valid_until: "2025-03-01",
        source: "Snapdeal Deals",
        photo: "https://example.com/snapdeal.jpg"
      },
      {
        store: "BigBasket",
        discount: "Rs. 100 Off",
        description: "Rs. 100 off on orders above Rs. 1000",
        valid_until: "2025-02-05",
        source: "BigBasket Offers",
        photo: "https://example.com/bigbasket.jpg"
      },
      {
        store: "Grofers",
        discount: "20% Off",
        description: "20% off on monthly essentials",
        valid_until: "2025-02-15",
        source: "Grofers Coupons",
        photo: "https://example.com/grofers.jpg"
      },
      {
        store: "Nike",
        discount: "15% Off",
        description: "15% off on sportswear",
        valid_until: "2025-02-28",
        source: "Nike Coupons",
        photo: "https://example.com/nike.jpg"
      },
      {
        store: "Adidas",
        discount: "20% Off",
        description: "20% off on running shoes",
        valid_until: "2025-02-20",
        source: "Adidas Deals",
        photo: "https://example.com/adidas.jpg"
      },
      {
        store: "H&M",
        discount: "10% Off",
        description: "Flat 10% off on new arrivals",
        valid_until: "2025-02-18",
        source: "H&M Offers",
        photo: "https://example.com/h&m.jpg"
      },
      {
        store: "Sephora",
        discount: "20% Off",
        description: "20% Off Your First Purchase",
        valid_until: "2025-02-20",
        source: "RetailMeNot",
        photo: "https://example.com/sephora.jpg"
      },
      {
        store: "Sony",
        discount: "$50 Off",
        description: "$50 Off Select Headphones",
        valid_until: "2025-02-15",
        source: "RetailMeNot",
        photo: "https://example.com/sony.jpg"
      },
      {
        store: "Apple",
        discount: "$100 Off",
        description: "$100 Off MacBook Air",
        valid_until: "2025-02-25",
        source: "RetailMeNot",
        photo: "https://example.com/apple.jpg"
      },
      {
        store: "Dell",
        discount: "Up to 40% Off",
        description: "40% Off Business Laptops",
        valid_until: "2025-03-15",
        source: "Groupon",
        photo: "https://example.com/dell.jpg"
      },
      {
        store: "BestBuy",
        discount: "30% Off",
        description: "Save up to 30% on select electronics",
        valid_until: "2025-03-10",
        source: "BestBuy Deals",
        photo: "https://example.com/bestbuy.jpg"
      },
      {
        store: "HomeDepot",
        discount: "10% Off",
        description: "Get 10% Off Home Appliances",
        valid_until: "2025-03-05",
        source: "HomeDepot Coupons",
        photo: "https://example.com/homedepot.jpg"
      },
      {
        store: "Wayfair",
        discount: "Up to 50% Off",
        description: "Up to 50% Off Furniture and Home Décor",
        valid_until: "2025-03-20",
        source: "Groupon",
        photo: "https://example.com/wayfair.jpg"
      },
      {
        store: "Costco",
        discount: "$15 Off",
        description: "$15 Off Your First Order with Costco Membership",
        valid_until: "2025-03-15",
        source: "Costco Deals",
        photo: "https://example.com/costco.jpg"
      },
      {
        store: "Zara",
        discount: "20% Off",
        description: "Flat 20% off on selected items",
        valid_until: "2025-02-15",
        source: "Zara Coupons",
        photo: "https://example.com/zara.jpg"
      },
      {
        store: "Forever21",
        discount: "30% Off",
        description: "30% off on all women's apparel",
        valid_until: "2025-02-28",
        source: "Forever21 Deals",
        photo: "https://example.com/forever21.jpg"
      },
      {
        store: "Puma",
        discount: "25% Off",
        description: "Flat 25% off on sports gear",
        valid_until: "2025-03-01",
        source: "Puma Coupons",
        photo: "https://example.com/puma.jpg"
      },
      {
        store: "Levi's",
        discount: "15% Off",
        description: "15% off on denim collections",
        valid_until: "2025-03-10",
        source: "Levi's Offers",
        photo: "https://example.com/levis.jpg"
      },
      {
        store: "Lenskart",
        discount: "Buy 1 Get 1 Free",
        description: "Buy one pair of glasses, get one free",
        valid_until: "2025-02-25",
        source: "Lenskart Offers",
        photo: "https://example.com/lenskart.jpg"
      },
      {
        store: "Reebok",
        discount: "20% Off",
        description: "20% off on training shoes",
        valid_until: "2025-02-20",
        source: "Reebok Deals",
        photo: "https://example.com/reebok.jpg"
      },
      {
        store: "Decathlon",
        discount: "10% Off",
        description: "10% off on sports equipment",
        valid_until: "2025-02-28",
        source: "Decathlon Coupons",
        photo: "https://example.com/decathlon.jpg"
      },
      {
        store: "Nykaa",
        discount: "25% Off",
        description: "25% off on cosmetics and skincare products",
        valid_until: "2025-03-05",
        source: "Nykaa Offers",
        photo: "https://example.com/nykaa.jpg"
      },
      {
        store: "TataCliq",
        discount: "Rs. 500 Off",
        description: "Rs. 500 off on orders above Rs. 5000",
        valid_until: "2025-02-28",
        source: "TataCliq Deals",
        photo: "https://example.com/tatacliq.jpg"
      }
];

// Middleware
app.use(express.json());

// API Endpoints
app.get('/coupons', (req, res) => {
  res.json(coupons);
});

app.get('/coupons/:store', (req, res) => {
  const storeName = req.params.store.toLowerCase();
  const filteredCoupons = coupons.filter(coupon =>
    coupon.store.toLowerCase().includes(storeName)
  );
  if (filteredCoupons.length) {
    res.json(filteredCoupons);
  } else {
    res.status(404).json({ message: "No coupons found for this store." });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Coupon API is running at http://localhost:${port}`);
});
