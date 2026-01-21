class CartTool extends HTMLElement {
  constructor() {
    super();
    const buttons = this.querySelectorAll('.cartTool-item');
    buttons.forEach((button) => {
      button.addEventListener('click',(event) => {
        const id = event.target.dataset.popup;
        document.getElementById(id).classList.add('show');
        document.querySelector('.previewCart').classList.add('active-tool');
      })
    })
  }
}

customElements.define('cart-item-tool', CartTool);

class CartCancel extends HTMLElement {
  constructor() {
    super();
    
    this.querySelector('button').addEventListener('click',(event) => {
      document.querySelector('.popup-toolDown.show').classList.remove('show');
      document.querySelector('.previewCart').classList.remove('active-tool');
    })
  }
}

customElements.define('cart-cancel-popup', CartCancel);

class CartNote extends HTMLElement {
  constructor() {
    super();
    
    this.querySelector('[data-update-note]').addEventListener('click', async (event) => {
      const saveButton = event.target;
      const originalText = saveButton.textContent.trim();
      
      // Disable button and show loading state
      saveButton.disabled = true;
      const loadingText = saveButton.getAttribute('data-saving-text') || 'Saving...';
      saveButton.textContent = loadingText;
      
      try {
        const textarea = this.querySelector('textarea.text-area') || this.querySelector('#Cart-note') || this.querySelector('textarea');
        this.val = textarea ? textarea.value : '';
        const body = JSON.stringify({ note: this.val });
        
        const response = await fetch(`${routes.cart_update_url}`, {...fetchConfig(), ...{ body }});
        
        if (response.ok) {
          // Close popup
          document.querySelector('.popup-toolDown.show')?.classList.remove('show');
          document.querySelector('.previewCart')?.classList.remove('active-tool');
          
          // Refresh cart drawer to show updated note
          Shopify.getCart((cart) => {
            if (window.sharedFunctions?.updateSidebarCart) {
              window.sharedFunctions.updateSidebarCart(cart);
            }
          });
        } else {
          console.error('Failed to update cart note');
          saveButton.textContent = originalText;
        }
      } catch (error) {
        console.error('Error updating cart note:', error);
        saveButton.textContent = originalText;
      } finally {
        saveButton.disabled = false;
      }
    })
  }
}

customElements.define('cart-note', CartNote);

class CouponCode extends HTMLElement {
  constructor() {
    super();
    if (localStorage.getItem('storedDiscount')){
      this.querySelector('input[name="discount"]').value = localStorage.getItem('storedDiscount');  
    }
    this.querySelector('[data-update-coupon]').addEventListener('click', (event) => {
      this.val = this.querySelector('input[name="discount"]').value;
      localStorage.setItem('storedDiscount', this.val);
      fetch(`/discount/${this.val}`)
          .then((response) => response.text())
          .then((responseText) => {
        	
      });
      document.querySelector('.popup-toolDown.show').classList.remove('show');
      document.querySelector('.previewCart').classList.remove('active-tool');
      Shopify.getCart((cart) => {window.sharedFunctions?.updateSidebarCart(cart)});
    })
  }
}

customElements.define('coupon-code', CouponCode);