# 🔮 Tarot Card to Product Mapping Guide

This guide helps you easily identify and link each tarot card to your actual website products using the unique IDs and codes.

## 📋 Quick Reference Table

| Card # | Card Code | Card Name | Product ID | Category | Current Product Link |
|--------|-----------|-----------|------------|----------|---------------------|
| 0 | `TAROT_FOOL_001` | The Fool | 100 | new-beginnings | new-beginnings-crystal-kit |
| I | `TAROT_MAGI_002` | The Magician | 101 | manifestation | manifestation-crystal-set |
| II | `TAROT_HPRI_003` | The High Priestess | 102 | intuition | intuition-enhancing-herbs |
| III | `TAROT_EMPR_004` | The Empress | 103 | abundance | abundance-candle-set |
| IV | `TAROT_EMPE_005` | The Emperor | 104 | leadership | leadership-talisman |
| V | `TAROT_HIER_006` | The Hierophant | 105 | spiritual-wisdom | wisdom-oracle-deck |
| VI | `TAROT_LOVE_007` | The Lovers | 106 | love-relationships | love-attraction-oil |
| VII | `TAROT_CHAR_008` | The Chariot | 107 | success-victory | victory-protection-amulet |
| VIII | `TAROT_STRE_009` | Strength | 108 | inner-strength | inner-strength-gemstone-bracelet |
| IX | `TAROT_HERM_010` | The Hermit | 109 | soul-searching | meditation-sage-bundle |
| X | `TAROT_WHEE_011` | Wheel of Fortune | 110 | fortune-destiny | fortune-pendulum |
| XI | `TAROT_JUST_012` | Justice | 111 | justice-balance | balance-healing-stones |
| XII | `TAROT_HANG_013` | The Hanged Man | 112 | patience-surrender | patience-essential-oil-blend |
| XIII | `TAROT_DEAT_014` | Death | 113 | transformation | transformation-ritual-kit |
| XIV | `TAROT_TEMP_015` | Temperance | 114 | balance-harmony | harmony-tea-blend |
| XV | `TAROT_DEVI_016` | The Devil | 115 | breaking-chains | breaking-chains-cleansing-spray |
| XVI | `TAROT_TOWE_017` | The Tower | 116 | sudden-change | rebuilding-strength-incense |
| XVII | `TAROT_STAR_018` | The Star | 117 | hope-renewal | hope-star-pendant |
| XVIII | `TAROT_MOON_019` | The Moon | 118 | intuition-mystery | moonstone-intuition-ring |
| XIX | `TAROT_SUN_020` | The Sun | 119 | positivity-success | sunshine-citrine-necklace |
| XX | `TAROT_JUDG_021` | Judgement | 120 | spiritual-awakening | awakening-chime-bells |
| XXI | `TAROT_WORL_022` | The World | 121 | completion-success | completion-celebration-candle |

## 🔄 How to Update Product Links

### Step 1: Identify Your Products
For each card, you need to map it to an actual product on your website. Use the **Card Code** and **Category** to help identify the best matching product.

### Step 2: Update the JSON File
Open `tarot-cards.json` and update these fields for each card:

```json
{
  "productId": "YOUR_ACTUAL_PRODUCT_ID",
  "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=YOUR_PRODUCT_ID",
  "buyNowLink": "https://shop.worldtrismegisto.com/product-category/tarot/"
}
```

### Step 3: Example Update
If you have a crystal set for "The Magician" with Product ID 501:

```json
{
  "id": 1,
  "cardCode": "TAROT_MAGI_002",
  "productId": "501",
  "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=370",
  "buyNowLink": "https://shop.worldtrismegisto.com/product-category/tarot/"
}
```

## 📊 Tracking and Analytics

### Console Logging
The application automatically logs detailed information when:
- A card is selected
- Add to Cart is clicked
- Buy Now is clicked

### Log Format Example:
```
🔮 TAROT SELECTION LOGGED: {card data}
📊 Card Code for tracking: TAROT_MAGI_002
🛒 Product ID for website: 501
```

### Analytics Integration
Each interaction includes:
- **Card Code**: Unique identifier for each card
- **Product ID**: Your website's product identifier
- **Session ID**: Unique session tracking
- **User Data**: Form submission data
- **Category**: Product category for grouping

## 🎯 Product Suggestions by Category

### **New Beginnings** (The Fool)
- Crystal starter kits
- Cleansing bundles
- Fresh start ritual sets

### **Manifestation** (The Magician)
- Manifestation crystals
- Vision boards
- Intention candles

### **Intuition** (The High Priestess, The Moon)
- Amethyst jewelry
- Oracle decks
- Third eye activation sets

### **Love & Relationships** (The Lovers)
- Rose quartz jewelry
- Love attraction oils
- Relationship harmony sets

### **Strength & Power** (Strength, The Emperor)
- Tiger's eye accessories
- Empowerment talismans
- Confidence boosting crystals

### **Spiritual Wisdom** (The Hierophant)
- Meditation tools
- Spiritual books
- Sage bundles

### **Success & Victory** (The Chariot, The Sun)
- Citrine jewelry
- Success attraction sets
- Solar energy crystals

### **Balance & Harmony** (Justice, Temperance)
- Balancing stone sets
- Harmony diffuser blends
- Chakra alignment kits

### **Transformation** (Death, The Tower)
- Transformation ritual kits
- Phoenix symbolism items
- Rebirth ceremony sets

### **Hope & Renewal** (The Star)
- Star-themed jewelry
- Hope crystals
- Renewal ritual sets

### **Completion & Success** (The World)
- Achievement celebration items
- Completion ceremony sets
- Success maintenance tools

## 🔧 Technical Notes

### Card Code Format
- `TAROT_[4CHARS]_[3DIGITS]`
- First 4 characters: Abbreviated card name
- Last 3 digits: Sequential numbering

### Product ID Requirements
- Must be unique for each product
- Should match your WooCommerce product IDs
- Used for cart and analytics tracking

### Image Naming Convention
- Images are named based on card slugs
- Format: `images/[card-slug].jpg`
- Example: `images/the-fool.jpg`

## 📞 Support

If you need help mapping specific products to cards, consider:
1. The card's symbolic meaning
2. Your product's spiritual/mystical properties  
3. The target customer's needs and intentions
4. The product category alignment

Remember: Each card should lead to a product that genuinely resonates with its spiritual meaning and energy! ✨ 