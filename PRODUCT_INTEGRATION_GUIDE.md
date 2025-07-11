# Product Integration Guide - Worldtrismegisto.com

## Overview
This guide explains how to integrate your actual tarot products from [worldtrismegisto.com](https://shop.worldtrismegisto.com/product-category/tarot/) with the Tarot Discovery application.

## Current Setup
Currently, all 22 tarot cards are temporarily linked to your **Strength XI** product:
- **Product URL**: https://shop.worldtrismegisto.com/shop/tarot/strength-xi/
- **Add to Cart**: https://shop.worldtrismegisto.com/cart/?add-to-cart=strength-xi

## Button Functionality
When users click **"Add to Cart"** or **"Order Now"** buttons:
1. ✅ **Tracking data is logged** (card selection, user info, timestamp)
2. ✅ **New tab opens** with your worldtrismegisto.com product page
3. ✅ **User remains** on the tarot discovery app
4. ✅ **Direct integration** with your WooCommerce store

## Product URL Structure
Based on your Strength XI product, your URL pattern is:
```
https://shop.worldtrismegisto.com/shop/tarot/[product-slug]/
```

For WooCommerce "Add to Cart" direct links:
```
https://shop.worldtrismegisto.com/cart/?add-to-cart=[product-id]
```

## Mapping Your 14 Products to 22 Cards

Since you have **14 tarot products** and **22 Major Arcana cards**, here are recommended mapping strategies:

### Strategy 1: One-to-One Plus Duplicates
Map your 14 products directly, then duplicate popular products for remaining cards:

**Primary Mappings (if available):**
- The Fool → Your "Fool" product
- The Magician → Your "Magician" product
- The High Priestess → Your "High Priestess" product
- The Empress → Your "Empress" product
- The Emperor → Your "Emperor" product
- The Hierophant → Your "Hierophant" product
- The Lovers → Your "Lovers" product
- The Chariot → Your "Chariot" product
- Strength → Your "Strength XI" product ✅ (already set)
- The Hermit → Your "Hermit" product
- Wheel of Fortune → Your "Wheel of Fortune" product
- Justice → Your "Justice" product
- The Hanged Man → Your "Hanged Man" product
- Death → Your "Death" product

**For remaining 8 cards**, duplicate your best sellers or most popular products.

### Strategy 2: Category-Based Mapping
Group cards by themes and map to your available products:
- **Love/Relationships**: The Lovers, The Empress, Temperance
- **Wisdom/Spirituality**: The High Priestess, The Hierophant, The Hermit
- **Power/Leadership**: The Emperor, The Magician, Strength
- **Change/Transformation**: Death, The Fool, Wheel of Fortune

## How to Update Product Links

### Step 1: Get Your Product Information
From your WooCommerce admin, collect:
```json
{
  "productName": "The Fool Tarot Card",
  "productSlug": "the-fool-tarot-card",
  "productId": "123",
  "wooCommerceId": "456"
}
```

### Step 2: Update tarot-cards.json
For each card, update these fields:
```json
{
  "id": 0,
  "name": "The Fool",
  "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=YOUR_PRODUCT_ID",
  "buyNowLink": "https://shop.worldtrismegisto.com/shop/tarot/YOUR_PRODUCT_SLUG/",
  "productId": "YOUR_PRODUCT_ID"
}
```

### Step 3: Test the Integration
1. Run the tarot discovery app
2. Submit the form and get a card
3. Click "Add to Cart" or "Order Now"
4. Verify it opens your worldtrismegisto.com product page
5. Check browser console for tracking logs

## Example: Updating The Fool Card
```json
{
  "id": 0,
  "cardCode": "TAROT_FOOL_001",
  "name": "The Fool",
  "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=123",
  "buyNowLink": "https://shop.worldtrismegisto.com/shop/tarot/the-fool-deluxe/",
  "productId": "123"
}
```

## Analytics & Tracking
The system automatically logs:
- ✅ **User demographics** (name, birth date, gender)
- ✅ **Card selections** with timestamps
- ✅ **Button clicks** (Add to Cart vs Order Now)
- ✅ **Product IDs** for sales tracking
- ✅ **Session IDs** for user journey analysis

## Firebase Integration (Future)
The system is prepared for Firebase integration to track:
- User behavior patterns
- Popular card selections
- Conversion rates by card
- A/B testing for different product mappings

## Need Help?
To complete the product integration:
1. **Provide your 14 product URLs** from worldtrismegisto.com
2. **Share product slugs and IDs** from WooCommerce admin
3. **Specify which cards** should map to which products
4. **Test the integration** with real products

The system is fully ready to redirect users to your actual products! 