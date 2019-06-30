export class Product {

  constructor(
    public code: string,
    public name: string,
    public price: number,
    public img: string,
    public quantity: number
  ) {}

  increaseQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    (this.quantity > 0) && (this.quantity -= 1);
  }
}
