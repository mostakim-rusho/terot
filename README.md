# 🔮 Mystical Tarot Discovery - Product Discovery System

A magical, fully responsive single-page web application that helps users discover products from your WooCommerce website through the ancient wisdom of Tarot cards.

## ✨ Features

- **Mystical User Interface**: Beautiful cosmic background with deep maroon, gold, indigo, and purple color scheme
- **Interactive Form**: Collects user information (Name, Date of Birth, Gender) through an elegant popup
- **Random Tarot Card Selection**: Algorithm that uses user data to influence card selection
- **Animated Card Reveal**: Smooth animations and glowing effects for an engaging experience
- **WooCommerce Integration**: Direct links to Add to Cart and Buy Now functionality
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Firebase Ready**: Prepared structure for future Firebase integration
- **Modern Fonts**: Uses Google Fonts (Cinzel Decorative & Cinzel) for spiritual aesthetics

## 🚀 Quick Start

### 1. Setup Files

Make sure you have all these files in your project directory:
```
project-folder/
├── index.html
├── style.css
├── main.js
├── tarot-cards.json
├── images/
│   ├── the-fool.jpg
│   ├── the-magician.jpg
│   ├── the-high-priestess.jpg
│   └── ... (all 22 tarot card images)
└── README.md
```

### 2. Add Tarot Card Images

Place 22 tarot card images in the `images/` folder with these exact filenames:

- `the-fool.jpg`
- `the-magician.jpg`
- `the-high-priestess.jpg`
- `the-empress.jpg`
- `the-emperor.jpg`
- `the-hierophant.jpg`
- `the-lovers.jpg`
- `the-chariot.jpg`
- `strength.jpg`
- `the-hermit.jpg`
- `wheel-of-fortune.jpg`
- `justice.jpg`
- `the-hanged-man.jpg`
- `death.jpg`
- `temperance.jpg`
- `the-devil.jpg`
- `the-tower.jpg`
- `the-star.jpg`
- `the-moon.jpg`
- `the-sun.jpg`
- `judgement.jpg`
- `the-world.jpg`

**Recommended image specifications:**
- Format: JPG or PNG
- Dimensions: 400x600px or similar 2:3 aspect ratio
- File size: Under 200KB each for optimal loading

### 3. Configure WooCommerce Links

Open `tarot-cards.json` and update all the URLs to match your WooCommerce store:

```json
{
  "addToCartLink": "https://YOUR-STORE.com/cart?add-to-cart=PRODUCT-ID",
  "buyNowLink": "https://YOUR-STORE.com/product/PRODUCT-SLUG"
}
```

### 4. Deploy

Upload all files to your web server and access `index.html` through your browser.

## 🛠 Customization

### Colors & Branding

To change the color scheme, modify these CSS variables in `style.css`:

```css
/* Main colors used throughout */
--gold: #ffd700;
--deep-maroon: #8b0000;
--crimson: #dc143c;
--indigo: #4b0082;
--purple: #8a2be2;
```

### Adding More Cards

To add additional tarot cards:

1. Add the new card object to `tarot-cards.json`
2. Follow the same structure with unique ID, name, image path, description, and links
3. Add the corresponding image to the `images/` folder

### Firebase Integration

The code includes placeholder functions for Firebase integration:

```javascript
// In main.js - ready for Firebase
logUserSelection() {
  // TODO: Integrate with Firebase
  // firebase.firestore().collection('tarot_selections').add(selectionData);
}

logEvent(eventName, eventData) {
  // TODO: Integrate with Firebase Analytics
  // firebase.analytics().logEvent(eventName, eventData);
}
```

To enable Firebase:
1. Add Firebase SDK to `index.html`
2. Configure Firebase config
3. Uncomment and implement the Firebase functions

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 769px and above

## 🎨 Animations & Effects

- **Card Reveal**: Rotating flip animation when card is shown
- **Floating Effects**: Cards gently float up and down
- **Glowing Elements**: Buttons and cards have mystical glow effects
- **Form Interactions**: Smooth focus effects on inputs
- **Loading Animation**: Animated crystal ball while processing

## 🔧 Technical Details

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance
- Optimized CSS animations using transforms
- Lazy loading consideration for images
- Minimal JavaScript for fast loading

### SEO Considerations
- Semantic HTML structure
- Proper meta tags
- Alt attributes for images

## 🛒 WooCommerce Integration

### Product Links Format

**Add to Cart**: 
```
https://shop.worldtrismegisto.com/cart/?add-to-cart=PRODUCT_ID
```

**Buy Now** (Product Page):
```
https://shop.worldtrismegisto.com/product-category/tarot/
```

### Tracking Integration

The app tracks user interactions for analytics:
- Form submissions
- Card selections
- Button clicks (Add to Cart / Buy Now)

## 🔮 Future Enhancements

- **User Accounts**: Save readings history
- **Email Integration**: Send reading results via email
- **Social Sharing**: Share tarot reading results
- **Payment Integration**: Direct checkout flow
- **Card Combinations**: Multiple card readings
- **Astrology Integration**: Combine with birth chart data

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths in `tarot-cards.json`
- Ensure images are in the correct `images/` folder
- Verify image file names match exactly (case-sensitive)

### Cards Not Displaying
- Check browser console for JavaScript errors
- Ensure `tarot-cards.json` is valid JSON format
- Verify file is accessible (check CORS settings if needed)

### Styling Issues
- Clear browser cache
- Check that `style.css` is properly linked
- Verify Google Fonts are loading

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

---

**Made with ✨ mystical energy and ⚡ modern web technologies** 