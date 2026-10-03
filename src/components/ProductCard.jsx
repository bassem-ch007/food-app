import { useState } from 'react'

function ProductCard({ product }) {
  // Chaque carte possède son propre state Like.
  const [liked, setLiked] = useState(false)

  return (
    <article className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            type="button"
            className={liked ? 'like-button liked' : 'like-button'}
            onClick={() => setLiked(!liked)}
            aria-label={liked ? `Unlike ${product.name}` : `Like ${product.name}`}
            aria-pressed={liked}
          >
            {liked ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
