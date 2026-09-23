// ===== PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: "Fresh Apples",
        category: "Fruit",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
        description: "Crisp, juicy, and naturally sweet. Our apples are hand-picked from local orchards to ensure the highest quality and freshness.",
        rating: 4.5,
        reviews: 128,
        inStock: true,
        details: { origin: "Local Orchards", weight: "1 kg", organic: "Yes", shelf_life: "2 weeks" }
    },
    {
        id: 2,
        name: "Bananas",
        category: "Fruit",
        price: 60.00,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
        description: "Rich in potassium and naturally energizing. Sourced from sustainable farms and delivered at perfect ripeness.",
        rating: 4.3,
        reviews: 95,
        inStock: true,
        details: { origin: "Ecuador", weight: "1 bunch", organic: "Yes", shelf_life: "1 week" }
    },
    {
        id: 3,
        name: "Carrots",
        category: "Vegetable",
        price: 80.00,
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
        description: "Vibrant orange carrots packed with beta-carotene. Great for roasting, juicing, or raw snacking.",
        rating: 4.6,
        reviews: 76,
        inStock: true,
        details: { origin: "Local Farms", weight: "500 g", organic: "Yes", shelf_life: "3 weeks" }
    },
    {
        id: 4,
        name: "Tomatoes",
        category: "Vegetable",
        price: 70.00,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
        description: "Vine-ripened tomatoes with a rich, tangy flavor. Perfect for salads, sauces, and cooking.",
        rating: 4.4,
        reviews: 112,
        inStock: true,
        details: { origin: "Greenhouse", weight: "500 g", organic: "Yes", shelf_life: "1 week" }
    },
    {
        id: 5,
        name: "Broccoli",
        category: "Vegetable",
        price: 90.00,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop",
        description: "Nutrient-dense broccoli florets full of vitamins C and K. Steam, roast, or stir-fry for a healthy side dish.",
        rating: 4.7,
        reviews: 64,
        inStock: true,
        details: { origin: "Local Farms", weight: "300 g", organic: "Yes", shelf_life: "1 week" }
    },
    {
        id: 6,
        name: "Strawberries",
        category: "Fruit",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop",
        description: "Sweet, sun-ripened strawberries bursting with flavor. Ideal for desserts and breakfast bowls.",
        rating: 4.8,
        reviews: 203,
        inStock: true,
        details: { origin: "Local Fields", weight: "250 g", organic: "Yes", shelf_life: "3 days" }
    },
    {
        id: 7,
        name: "Spinach",
        category: "Vegetable",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
        description: "Tender baby spinach leaves, perfect for salads and smoothies. Washed and ready to use.",
        rating: 4.5,
        reviews: 89,
        inStock: true,
        details: { origin: "Hydroponic Farm", weight: "200 g", organic: "Yes", shelf_life: "5 days" }
    },
    {
        id: 8,
        name: "Oranges",
        category: "Fruit",
        price: 100.00,
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop",
        description: "Juicy, sweet oranges loaded with vitamin C. Sun-ripened for maximum sweetness.",
        rating: 4.6,
        reviews: 156,
        inStock: true,
        details: { origin: "Florida", weight: "1 kg", organic: "No", shelf_life: "2 weeks" }
    },
    {
        id: 9,
        name: "Potato",
        category: "Vegetable",
        price: 60.00,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82ber40f?w=400&h=300&fit=crop",
        description: "Versatile, starchy potatoes perfect for roasting, mashing, frying, or boiling. A kitchen essential.",
        rating: 4.5,
        reviews: 210,
        inStock: true,
        details: { origin: "Idaho", weight: "1 kg", organic: "No", shelf_life: "1 month" }
    },
    {
        id: 10,
        name: "Pineapple",
        category: "Fruit",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=300&fit=crop",
        description: "Sweet and tangy tropical pineapple with juicy golden flesh. Perfect for snacking, grilling, or smoothies.",
        rating: 4.6,
        reviews: 167,
        inStock: true,
        details: { origin: "Costa Rica", weight: "1 piece", organic: "No", shelf_life: "5 days" }
    },
    {
        id: 11,
        name: "Cucumber",
        category: "Vegetable",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop",
        description: "Cool, refreshing cucumbers with a crisp bite. Perfect for salads and infused water.",
        rating: 4.3,
        reviews: 58,
        inStock: true,
        details: { origin: "Local Farms", weight: "Each", organic: "Yes", shelf_life: "1 week" }
    },
    {
        id: 12,
        name: "Watermelon",
        category: "Fruit",
        price: 200.00,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop",
        description: "Sweet and refreshing watermelon, the ultimate summer fruit. Seedless variety.",
        rating: 4.9,
        reviews: 245,
        inStock: true,
        details: { origin: "Texas", weight: "1 piece", organic: "No", shelf_life: "1 week" }
    },
    {
        id: 13,
        name: "Chicken Breast",
        category: "Meat",
        price: 250.00,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop",
        description: "Premium boneless chicken breast, lean and high in protein. Perfect for grilling, baking, or stir-frying.",
        rating: 4.6,
        reviews: 189,
        inStock: true,
        details: { origin: "Local Farm", weight: "500 g", organic: "Yes", shelf_life: "3 days" }
    },
    {
        id: 14,
        name: "Ground Beef",
        category: "Meat",
        price: 300.00,
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop",
        description: "Fresh ground beef with the perfect fat ratio for burgers, meatballs, and tacos. Grass-fed and hormone-free.",
        rating: 4.5,
        reviews: 156,
        inStock: true,
        details: { origin: "Regional Ranch", weight: "500 g", organic: "Yes", shelf_life: "2 days" }
    },
    {
        id: 15,
        name: "Salmon Fillet",
        category: "Meat",
        price: 450.00,
        image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop",
        description: "Wild-caught Atlantic salmon fillet, rich in Omega-3 fatty acids. Tender, flaky, and delicious.",
        rating: 4.8,
        reviews: 212,
        inStock: true,
        details: { origin: "Norway", weight: "300 g", organic: "No", shelf_life: "2 days" }
    },
    {
        id: 16,
        name: "Pork Chops",
        category: "Meat",
        price: 280.00,
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop",
        description: "Juicy center-cut pork chops, tender and full of flavor. Great for grilling or pan-searing.",
        rating: 4.4,
        reviews: 98,
        inStock: true,
        details: { origin: "Local Farm", weight: "400 g", organic: "Yes", shelf_life: "3 days" }
    },
    {
        id: 17,
        name: "Fresh Milk",
        category: "Dairy",
        price: 80.00,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
        description: "Farm-fresh whole milk, pasteurized and homogenized. Rich, creamy, and full of calcium.",
        rating: 4.7,
        reviews: 324,
        inStock: true,
        details: { origin: "Local Dairy", weight: "1 L", organic: "Yes", shelf_life: "7 days" }
    },
    {
        id: 18,
        name: "Cream",
        category: "Dairy",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
        description: "Rich, heavy cream with a silky texture. Ideal for whipping, cooking, and adding decadence to desserts and coffee.",
        rating: 4.6,
        reviews: 198,
        inStock: true,
        details: { origin: "Local Dairy", weight: "500 ml", organic: "Yes", shelf_life: "10 days" }
    },
    {
        id: 19,
        name: "Greek Yogurt",
        category: "Dairy",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
        description: "Creamy, protein-packed Greek yogurt with a tangy taste. Great for breakfast bowls and smoothies.",
        rating: 4.8,
        reviews: 267,
        inStock: true,
        details: { origin: "Local Dairy", weight: "500 g", organic: "Yes", shelf_life: "14 days" }
    },
    {
        id: 20,
        name: "Butter",
        category: "Dairy",
        price: 130.00,
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop",
        description: "Creamy, unsalted butter made from fresh cream. Essential for baking, cooking, and spreading.",
        rating: 4.5,
        reviews: 145,
        inStock: true,
        details: { origin: "Local Dairy", weight: "250 g", organic: "Yes", shelf_life: "1 month" }
    }
];

// ===== IMAGE FALLBACK =====
function imgFallback(el) {
    el.onerror = null;
    el.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23ffcdd2"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c62828" font-size="20" font-family="Arial">FreshMart</text></svg>';
}

// ===== CART FUNCTIONS =====
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('#cartBadge');
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function addToCart(productId, quantity) {
    quantity = quantity || 1;
    let cart = getCart();
    const existingItem = cart.find(function(item) { return item.id === productId; });
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity });
    }
    saveCart(cart);
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    let cart = getCart().filter(function(item) { return item.id !== productId; });
    saveCart(cart);
    renderCart();
}

function updateQuantity(productId, change) {
    let cart = getCart();
    const item = cart.find(function(item) { return item.id === productId; });
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(function(i) { return i.id !== productId; });
        }
        saveCart(cart);
        renderCart();
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce(function(total, item) {
        const product = products.find(function(p) { return p.id === item.id; });
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = 'position:fixed;bottom:30px;right:30px;background:#c62828;color:white;padding:16px 28px;border-radius:12px;box-shadow:0 8px 25px rgba(0,0,0,0.2);z-index:10000;font-weight:600;font-size:1rem;';
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(function() {
        notif.style.transition = 'opacity 0.3s';
        notif.style.opacity = '0';
        setTimeout(function() { notif.remove(); }, 300);
    }, 2000);
}

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        if (query.length === 0) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        const matches = products.filter(function(p) { return p.name.toLowerCase().includes(query); });
        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No products found</div>';
        } else {
            searchResults.innerHTML = matches.slice(0, 5).map(function(product) {
                return '<div class="search-result-item" onclick="selectSearchResult(' + product.id + ')">' +
                    '<img src="' + product.image + '" alt="' + product.name + '" onerror="imgFallback(this)">' +
                    '<div class="search-result-info"><h4>' + product.name + '</h4><p>₹' + product.price.toFixed(2) + '</p></div>' +
                    '<span class="search-result-category">' + product.category + '</span>' +
                    '</div>';
            }).join('');
        }
        searchResults.classList.add('active');
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}

function selectSearchResult(productId) {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    if (searchInput) searchInput.value = '';
    if (searchResults) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
    }
    openProductPage(productId);
}

// ===== RENDER FUNCTIONS =====
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>';
    if (halfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="far fa-star"></i>';
    return starsHTML;
}

function renderProducts(filter) {
    filter = filter || 'all';
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(function(p) { return p.category.toLowerCase() === filter.toLowerCase(); });

    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#888;font-size:1.2rem;padding:40px;">No products found.</p>';
        return;
    }

    grid.innerHTML = filteredProducts.map(function(product, index) {
        return '<div class="product-card" onclick="openProductPage(' + product.id + ')" style="animation-delay:' + (index * 0.08) + 's">' +
            '<div class="product-image-wrapper">' +
                '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy" onerror="imgFallback(this)">' +
                '<span class="category-badge">' + product.category + '</span>' +
            '</div>' +
            '<div class="product-info">' +
                '<div class="product-rating"><span class="stars">' + getStarRating(product.rating) + '</span><span class="rating-count">(' + product.reviews + ')</span></div>' +
                '<h3>' + product.name + '</h3>' +
                '<p class="product-description">' + product.description + '</p>' +
                '<div class="product-price-row">' +
                    '<div><span class="product-price">₹' + product.price.toFixed(2) + '</span><span class="price-unit">/ ' + product.details.weight + '</span></div>' +
                    '<span class="stock-badge">In Stock</span>' +
                '</div>' +
                '<div class="product-actions" onclick="event.stopPropagation()">' +
                    '<button class="btn-primary" onclick="addToCart(' + product.id + ')"><i class="fas fa-cart-plus"></i> Add to Cart</button>' +
                    '<button class="btn-secondary" onclick="openProductPage(' + product.id + ')" title="View Details"><i class="fas fa-eye"></i></button>' +
                '</div>' +
            '</div>' +
        '</div>';
    }).join('');
}

function renderCategoryFilters() {
    const section = document.querySelector('.products-section .container');
    if (!section || document.getElementById('categoryFilters')) return;

    const filtersDiv = document.createElement('div');
    filtersDiv.className = 'category-filters';
    filtersDiv.id = 'categoryFilters';
    filtersDiv.innerHTML = 
        '<button class="filter-btn active" data-filter="all" onclick="filterProducts(\'all\')">All</button>' +
        '<button class="filter-btn" data-filter="fruit" onclick="filterProducts(\'fruit\')">Fruits</button>' +
        '<button class="filter-btn" data-filter="vegetable" onclick="filterProducts(\'vegetable\')">Vegetables</button>' +
        '<button class="filter-btn" data-filter="meat" onclick="filterProducts(\'meat\')">Meat</button>' +
        '<button class="filter-btn" data-filter="dairy" onclick="filterProducts(\'dairy\')">Dairy</button>';

    const title = section.querySelector('.section-title');
    if (title) {
        title.insertAdjacentElement('afterend', filtersDiv);
    }
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    renderProducts(category);
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartContainer = document.getElementById('cartContainer');
    if (!cartItemsContainer) return;

    const cart = getCart();
    if (cart.length === 0) {
        if (cartContainer) cartContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        return;
    }

    if (cartContainer) cartContainer.style.display = 'grid';
    if (emptyCart) emptyCart.style.display = 'none';

    cartItemsContainer.innerHTML = cart.map(function(item) {
        const product = products.find(function(p) { return p.id === item.id; });
        if (!product) return '';
        return '<div class="cart-item">' +
            '<img src="' + product.image + '" alt="' + product.name + '" onerror="imgFallback(this)">' +
            '<div class="cart-item-details"><h4>' + product.name + '</h4><p>' + product.category + ' &bull; ₹' + product.price.toFixed(2) + ' each</p></div>' +
            '<div class="cart-item-quantity">' +
                '<button class="qty-btn" onclick="updateQuantity(' + item.id + ', -1)">-</button>' +
                '<span style="font-weight:700;min-width:24px;text-align:center;">' + item.quantity + '</span>' +
                '<button class="qty-btn" onclick="updateQuantity(' + item.id + ', 1)">+</button>' +
            '</div>' +
            '<div class="cart-item-price">₹' + (product.price * item.quantity).toFixed(2) + '</div>' +
            '<button class="remove-btn" onclick="removeFromCart(' + item.id + ')" title="Remove item"><i class="fas fa-trash-alt"></i></button>' +
        '</div>';
    }).join('');

    const subtotal = getCartTotal();
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    document.getElementById('cartSubtotal').textContent = '₹' + subtotal.toFixed(2);
    document.getElementById('cartTax').textContent = '₹' + tax.toFixed(2);
    document.getElementById('cartTotal').textContent = '₹' + total.toFixed(2);
}

function renderProductDetail() {
    const container = document.getElementById('productDetail');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(function(p) { return p.id === productId; });

    if (!product) {
        container.innerHTML = '<p style="text-align:center;color:#c62828;font-size:1.2rem;">Product not found.</p>';
        return;
    }

    container.innerHTML = 
        '<div class="product-detail-image"><img src="' + product.image + '" alt="' + product.name + '" onerror="imgFallback(this)"></div>' +
        '<div class="product-detail-info">' +
            '<span class="category">' + product.category + '</span>' +
            '<h1>' + product.name + '</h1>' +
            '<div class="product-rating" style="margin-bottom:10px;"><span class="stars">' + getStarRating(product.rating) + '</span><span class="rating-count">(' + product.reviews + ' reviews)</span></div>' +
            '<div class="price">₹' + product.price.toFixed(2) + ' <span style="font-size:1rem;color:#999;font-weight:400;">/ ' + product.details.weight + '</span></div>' +
            '<p class="description">' + product.description + ' Grown with care and harvested at peak freshness to deliver the best quality to your kitchen. Perfect for health-conscious individuals and families who value organic, farm-fresh produce.</p>' +
            '<ul class="details-list">' +
                '<li><strong>Origin:</strong> ' + product.details.origin + '</li>' +
                '<li><strong>Weight:</strong> ' + product.details.weight + '</li>' +
                '<li><strong>Organic:</strong> ' + product.details.organic + '</li>' +
                '<li><strong>Shelf Life:</strong> ' + product.details.shelf_life + '</li>' +
            '</ul>' +
            '<div class="detail-actions">' +
                '<div class="quantity-selector"><button onclick="decreaseQty()">-</button><input type="text" id="detailQty" value="1" readonly><button onclick="increaseQty()">+</button></div>' +
                '<button class="btn-primary" onclick="addDetailToCart(' + product.id + ')"><i class="fas fa-cart-plus"></i> Add to Cart</button>' +
            '</div>' +
        '</div>';

    const relatedGrid = document.getElementById('relatedProducts');
    if (relatedGrid) {
        const related = products.filter(function(p) { return p.category === product.category && p.id !== product.id; }).slice(0, 3);
        if (related.length === 0) {
            relatedGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#888;padding:30px;">No related products found.</p>';
        } else {
            relatedGrid.innerHTML = related.map(function(p, index) {
                return '<div class="product-card" onclick="openProductPage(' + p.id + ')" style="animation-delay:' + (index * 0.1) + 's">' +
                    '<div class="product-image-wrapper"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy" onerror="imgFallback(this)"><span class="category-badge">' + p.category + '</span></div>' +
                    '<div class="product-info">' +
                        '<div class="product-rating"><span class="stars">' + getStarRating(p.rating) + '</span><span class="rating-count">(' + p.reviews + ')</span></div>' +
                        '<h3>' + p.name + '</h3>' +
                        '<div class="product-price-row"><div><span class="product-price">₹' + p.price.toFixed(2) + '</span><span class="price-unit">/ ' + p.details.weight + '</span></div><span class="stock-badge">In Stock</span></div>' +
                        '<div class="product-actions" onclick="event.stopPropagation()"><button class="btn-primary" onclick="addToCart(' + p.id + ')">Add to Cart</button><button class="btn-secondary" onclick="openProductPage(' + p.id + ')" title="View Details"><i class="fas fa-eye"></i></button></div>' +
                    '</div>' +
                '</div>';
            }).join('');
        }
    }
}

// ===== NAVIGATION HELPERS =====
function openProductPage(productId) {
    window.location.href = 'product.html?id=' + productId;
}

function increaseQty() {
    const input = document.getElementById('detailQty');
    input.value = parseInt(input.value) + 1;
}

function decreaseQty() {
    const input = document.getElementById('detailQty');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function addDetailToCart(productId) {
    const qty = parseInt(document.getElementById('detailQty').value);
    addToCart(productId, qty);
    document.getElementById('detailQty').value = 1;
}

// ===== LOGIN FORM VALIDATION =====
function initLoginForm() {
    var loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var isValid = true;

        if (!username) {
            showError('usernameError', 'Username is required');
            isValid = false;
        } else if (username.length < 3) {
            showError('usernameError', 'Username must be at least 3 characters');
            isValid = false;
        }

        if (!password) {
            showError('passwordError', 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            showError('passwordError', 'Password must be at least 6 characters');
            isValid = false;
        }

        if (!confirmPassword) {
            showError('confirmPasswordError', 'Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }

        if (isValid) {
            showNotification('Login successful! Welcome to FreshMart.');
            loginForm.reset();
        }
    });
}

function showError(elementId, message) {
    var el = document.getElementById(elementId);
    if (el) el.textContent = message;
}

function clearErrors() {
    ['usernameError', 'passwordError', 'confirmPasswordError'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.textContent = '';
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    initSearch();
    renderCategoryFilters();
    renderProducts();
    renderCart();
    renderProductDetail();
    initLoginForm();
});
