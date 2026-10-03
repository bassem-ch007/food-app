import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Classic Burger',
    category: 'Burgers',
    description: 'Juicy beef, crisp lettuce and our signature sauce.',
    price: 8.99,
    image: '/images/burger.jpg',
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    category: 'Pizza',
    description: 'Fresh mozzarella, tomato and a touch of basil.',
    price: 11.99,
    image: '/images/pizza.jpg',
  },
  {
    id: 3,
    name: 'Creamy Pasta',
    category: 'Pasta',
    description: 'A comforting bowl of pasta with creamy parmesan.',
    price: 10.49,
    image: '/images/pasta.jpg',
  },
  {
    id: 4,
    name: 'Chocolate Cake',
    category: 'Desserts',
    description: 'Rich chocolate layers for a little sweet escape.',
    price: 5.99,
    image: '/images/cake.jpg',
  },
  {
    id: 5,
    name: 'Cheeseburger',
    category: 'Burgers',
    description: 'Melty cheddar, grilled beef and a toasted bun.',
    price: 9.49,
    image: '/images/cheeseburger.jpg',
  },
  {
    id: 6,
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    description: 'Golden crust, melted cheese and spicy pepperoni.',
    price: 13.49,
    image: '/images/pepperoni.jpg',
  },
  {
    id: 7,
    name: 'Berry Pancakes',
    category: 'Desserts',
    description: 'Fluffy pancakes topped with berries and syrup.',
    price: 6.99,
    image: '/images/pancakes.jpg',
  },
  {
    id: 8,
    name: 'Fresh Orange Juice',
    category: 'Drinks',
    description: 'Freshly squeezed oranges. A glass of sunshine.',
    price: 3.99,
    image: '/images/drink.jpg',
  },
]

const categories = ['All', 'Burgers', 'Pizza', 'Pasta', 'Desserts', 'Drinks']

function App() {
  // Ces deux states mémorisent la catégorie et le thème choisis.
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [darkMode, setDarkMode] = useState(false)

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="navbar">
        <div className="container navbar-content">
          <div className="brand">
            <span className="brand-icon" aria-hidden="true">🍴</span>
            <span>Food<span className="brand-accent">App</span><span className="brand-dot">.</span></span>
          </div>
          <div className="navbar-actions">
            <span className="navbar-note">Good food. Good mood.</span>
            <button
              type="button"
              className="theme-button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={darkMode}
            >
              <span aria-hidden="true">{darkMode ? '☀' : '☾'}</span>
              {darkMode ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      </header>

      <main className="container main-content">
        <section className="categories" aria-labelledby="categories-title">
          <h2 id="categories-title">Categories</h2>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={selectedCategory === category ? 'category-button active' : 'category-button'}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <span className="eyebrow">A LITTLE SOMETHING FOR EVERY CRAVING</span>
          <h1 id="intro-title">Discover our <span>food.</span></h1>
          <p>Fresh favorites, comforting classics and sweet little treats.<br />Find something you love, one bite at a time.</p>
          <span className="intro-decoration" aria-hidden="true">✳</span>
        </section>

        <section aria-labelledby="products-title">
          <div className="products-heading">
            <div>
              <span className="eyebrow">MADE TO MAKE YOU HAPPY</span>
              <h2 id="products-title">Our Products</h2>
            </div>
            <span className="product-count" aria-live="polite">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="container footer">
        <span>FoodApp. <span className="footer-note">Simple food, simple pleasures.</span></span>
        <span>Made with a little <span className="footer-heart">♥</span></span>
      </footer>
    </div>
  )
}

export default App
