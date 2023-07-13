class Product {
  // title;
  // imageUrl;
  // description;
  // price;

  constructor(title,image,disc,price){
    this.title = title
    this.imageUrl = image
    this.description = disc
    this.price = price
  }
}


class ShoppingCart{
    items = []
    addProduct(product){
      this.items.push(product)
      this.totalOutput = `<h2>Total: \$${0}</h2>`
    }
   render(){
    const cartEl = document.createElement('section')
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `
    cartEl.className = 'cart'
    return cartEl
   }
}


class ProductItem {
  constructor(product){
    this.product = product
  }

  addToCart(){
    console.log(this.product);
  }


  render(){
    const prodEl = document.createElement('li')
    prodEl.className = 'product-item'
    prodEl.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
       <div class="product-item__content">
      <h2>${this.product.title}</h2>
      <h3>${this.product.price}</h3>
      <p>${this.product.description}</p>
      <button>Add to Cart</button>
      </div>
      </div>`
      const addToCard = prodEl.querySelector('button')
      addToCard.addEventListener('click', this.addToCart.bind(this))
      return prodEl
    }
}

class ProductList{
  products = [
    new Product('A pillow','https://m.media-amazon.com/images/I/4121uGID41L.jpg',19.99,' A soft pillow' ),
    new Product('A pillow','https://rugsforyou.in/wp-content/uploads/2021/03/Beautiful_Kashmiri_Floor_Carpet_Red_Floral_Pattern_Design_2-1.jpg',89.99,' A soft pillow' ),
    new Product('A pillow','https://m.media-amazon.com/images/I/4121uGID41L.jpg',49.99,' A soft pillow' ),
    new Product('A pillow','https://rugsforyou.in/wp-content/uploads/2021/03/Beautiful_Kashmiri_Floor_Carpet_Red_Floral_Pattern_Design_2-1.jpg',19.99,' A soft pillow' )
  ]

  render(){
   
    const prodList = document.createElement('ul')
    prodList.className = 'product-list'
    for (const prod of this.products){
      const productItem = new ProductItem(prod)
      const prodEl = productItem.render()
      prodList.append(prodEl)
    }
  return prodList
   }}

   class Shop{
    render(){
      const renderHook = document.getElementById('app')
      const cart = new ShoppingCart()
      const cartEl = cart.render()
      const productList = new ProductList()
      const prodListEl = productList.render()

      renderHook.append(cartEl)
      renderHook.append(prodListEl)
    }
   }

   const shop = new Shop()
   shop.render()
