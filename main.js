// Tarot Discovery Application
class TarotDiscovery {
    constructor() {
        this.tarotCards = [];
        this.currentUser = null;
        this.currentCard = null;
        this.init();
    }

    async init() {
        try {
            await this.loadTarotCards();
            this.setupEventListeners();
            this.showForm();
        } catch (error) {
            console.error('Error initializing app:', error);
            this.showError('Failed to load the mystical cards. Please refresh the page.');
        }
    }

    async loadTarotCards() {
        try {
            const response = await fetch('tarot-cards.json');
            if (!response.ok) {
                throw new Error('Failed to load tarot cards');
            }
            this.tarotCards = await response.json();
        } catch (error) {
            console.error('Error loading tarot cards:', error);
            // Fallback data if JSON fails to load
            this.tarotCards = this.getFallbackCards();
        }
    }

    getFallbackCards() {
        return [
            {
                "id": 1,
                "name": "The Magician",
                // "image": "images/the-magician.jpg",
                "description": "Manifestation, resourcefulness, power, inspired action. The Magician suggests that you have the skill, ability and desire to manifest your goals.",
                "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=374"
            },
            {
                "id": 2,
                "name": "The High Priestess",
                // "image": "images/the-high-priestess.jpg",
                "description": "Intuition, sacred knowledge, divine feminine, the subconscious mind. Trust your intuition and look for hidden knowledge.",
                "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=377"
            },
            {
                "id": 3,
                "name": "The Empress",
                // "image": "images/the-empress.jpg",
                "description": "Femininity, beauty, nature, nurturing, abundance. The Empress signifies a strong connection with femininity and creativity.",
                "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=380"
            },
            {
                "id": 4,
                "name": "The Emperor",
                // "image": "images/the-emperor.jpg",
                "description": "Authority, establishment, structure, a father figure. The Emperor represents a powerful leader who demands respect and authority.",
                "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=382"
            },
            {
                "id": 5,
                "name": "The Hierophant",
                // "image": "images/the-hierophant.jpg",
                "description": "Spiritual wisdom, religious beliefs, conformity, tradition, institutions. Seek guidance from mentors and spiritual teachers.",
                "addToCartLink": "https://shop.worldtrismegisto.com/cart/?add-to-cart=384"
            }
        ];
    }

    setupEventListeners() {
        const form = document.getElementById('tarot-form');
        const drawAgainBtn = document.getElementById('draw-again-btn');

        form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        drawAgainBtn.addEventListener('click', () => this.drawAgain());

        // Add input focus effects
        this.setupInputEffects();
    }

    setupInputEffects() {
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('focus', this.onInputFocus);
            input.addEventListener('blur', this.onInputBlur);
        });
    }

    onInputFocus(e) {
        const inputGroup = e.target.closest('.input-group');
        if (inputGroup) {
            inputGroup.classList.add('focused');
        }
    }

    onInputBlur(e) {
        const inputGroup = e.target.closest('.input-group');
        if (inputGroup) {
            inputGroup.classList.remove('focused');
        }
    }

    showForm() {
        const overlay = document.getElementById('tarot-form-overlay');
        overlay.classList.add('active');
    }

    hideForm() {
        const overlay = document.getElementById('tarot-form-overlay');
        overlay.classList.remove('active');
    }

    showLoading() {
        const loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.classList.add('active');
    }

    hideLoading() {
        const loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.classList.remove('active');
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        this.currentUser = {
            fullName: formData.get('fullName'),
            dateOfBirth: formData.get('dateOfBirth'),
            gender: formData.get('gender'),
            timestamp: new Date().toISOString()
        };

        // Validate form
        if (!this.validateForm()) {
            return;
        }

        this.hideForm();
        this.showLoading();

        // Simulate mystical processing time
        await this.sleep(2500);

        try {
            const selectedCard = this.selectRandomCard();
            await this.revealCard(selectedCard);
            
            // Log user selection for potential Firebase integration
            this.logUserSelection();
        } catch (error) {
            console.error('Error during card selection:', error);
            this.showError('The cosmic forces are disrupted. Please try again.');
        } finally {
            this.hideLoading();
        }
    }

    validateForm() {
        const { fullName, dateOfBirth, gender } = this.currentUser;
        
        if (!fullName.trim()) {
            this.showError('Please enter your full name');
            return false;
        }
        
        if (!dateOfBirth) {
            this.showError('Please enter your date of birth');
            return false;
        }
        
        if (!gender) {
            this.showError('Please select your gender');
            return false;
        }

        return true;
    }

//  selectRandomCard() {
//     if (this.tarotCards.length === 0) {
//         throw new Error('No tarot cards available');
//     }

//     const seed = this.generateUserSeed();
//     const timeSeed = Date.now().toString().split('').reverse().join('').slice(0, 5);
//     const combinedSeed = seed + parseInt(timeSeed);
    
//     const randomIndex = combinedSeed % this.tarotCards.length;
//     this.currentCard = this.tarotCards[randomIndex];
//     return this.currentCard;
// }
selectRandomCard() {
    if (this.tarotCards.length === 0) {
        throw new Error('No tarot cards available');
    }

    // Get all available IDs
    const availableIds = this.tarotCards.map(card => card.id);

    // Pick a truly random index
    const randomIndex = Math.floor(Math.random() * availableIds.length);

    // Find card with that ID
    const selectedId = availableIds[randomIndex];
    const card = this.tarotCards.find(card => card.id === selectedId);

    this.currentCard = card;
    return card;
}


    generateUserSeed() {
        const { fullName, dateOfBirth } = this.currentUser;
        let seed = 0;
        
        // Generate seed from name and birth date
        for (let i = 0; i < fullName.length; i++) {
            seed += fullName.charCodeAt(i);
        }
        
        const birthDate = new Date(dateOfBirth);
        seed += birthDate.getDate() + birthDate.getMonth() + birthDate.getFullYear();
        
        return seed;
    }

    async revealCard(card) {
        const resultContainer = document.getElementById('result-container');
        const cardImage = document.getElementById('card-image');
        const cardName = document.getElementById('card-name');
        const cardDescription = document.getElementById('card-description');
        const addToCartBtn = document.getElementById('add-to-cart-btn');

        // Set card data
        cardImage.src = card.image;
        cardImage.alt = card.name;
        cardName.textContent = card.name;
        cardDescription.textContent = card.description;
        addToCartBtn.href = card.addToCartLink;
       
        
        // Add click tracking
        addToCartBtn.onclick = (e) => {
            this.trackButtonClick('add_to_cart', card);
            // Let the default link behavior handle the redirect
        };

        // Show result with animation
        resultContainer.classList.add('active');
        
        // Trigger card entrance animation
        await this.sleep(100);
        const tarotCard = document.getElementById('tarot-card');
        tarotCard.style.animation = 'cardReveal 1s ease-out, cardFloat 6s ease-in-out infinite 1s';
    }

    drawAgain() {
        const resultContainer = document.getElementById('result-container');
        resultContainer.classList.remove('active');
        
        // Reset form
        document.getElementById('tarot-form').reset();
        
        // Show form again after brief delay
        setTimeout(() => {
            this.showForm();
        }, 500);
    }

    trackButtonClick(action, card) {
        const redirectUrl = card.addToCartLink;
        
        const eventData = {
            action: action,
            redirectUrl: redirectUrl,
            cardData: {
                id: card.id,
                cardCode: card.cardCode,
                cardNumber: card.cardNumber,
                name: card.name,
                productId: card.productId,
                category: card.category
            },
            user: this.currentUser,
            timestamp: new Date().toISOString(),
            sessionId: this.generateSessionId()
        };
        
        console.log(`🛒 ${action.toUpperCase()} CLICKED:`, eventData);
        console.log(`📈 Product ID: ${card.productId} | Card Code: ${card.cardCode}`);
        console.log(`🌐 Redirecting to: ${redirectUrl}`);
        
        // Placeholder for Firebase/Analytics integration
        this.logEvent('button_click', eventData);
    }

    // Placeholder function for Firebase integration
    logUserSelection() {
        const selectionData = {
            user: this.currentUser,
            selectedCard: {
                id: this.currentCard.id,
                cardCode: this.currentCard.cardCode,
                cardNumber: this.currentCard.cardNumber,
                name: this.currentCard.name,
                slug: this.currentCard.slug,
                productId: this.currentCard.productId,
                category: this.currentCard.category,
                keywords: this.currentCard.keywords
            },
            timestamp: new Date().toISOString(),
            sessionId: this.generateSessionId()
        };
        
        console.log('🔮 TAROT SELECTION LOGGED:', selectionData);
        console.log('📊 Card Code for tracking:', this.currentCard.cardCode);
        console.log('🛒 Product ID for website:', this.currentCard.productId);
        
        // TODO: Integrate with Firebase
        // firebase.firestore().collection('tarot_selections').add(selectionData);
    }

    // Placeholder function for event logging
    logEvent(eventName, eventData) {
        console.log(`Event: ${eventName}`, eventData);
        
        // TODO: Integrate with Firebase Analytics
        // firebase.analytics().logEvent(eventName, eventData);
    }

    showError(message) {
        // Create temporary error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #dc143c, #8b0000);
            color: #ffd700;
            padding: 15px 25px;
            border-radius: 10px;
            border: 2px solid #ffd700;
            font-family: 'Cinzel', serif;
            font-weight: 600;
            z-index: 3000;
            animation: slideInRight 0.5s ease-out;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        `;
        
        document.body.appendChild(errorDiv);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            errorDiv.style.animation = 'slideOutRight 0.5s ease-in';
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.parentNode.removeChild(errorDiv);
                }
            }, 500);
        }, 4000);
    }

    generateSessionId() {
        if (!this.sessionId) {
            this.sessionId = 'tarot_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }
        return this.sessionId;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TarotDiscovery();
});

// Add error notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
    }
    
    .error-notification {
        cursor: pointer;
        transition: transform 0.2s ease;
    }
    
    .error-notification:hover {
        transform: scale(1.05);
    }
`;
document.head.appendChild(style); 
