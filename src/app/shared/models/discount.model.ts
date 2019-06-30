export class Discount {

  constructor(
    public productCode: string,
    public description: string,
    public condition: Function,
    public modifier: Function
  ) {}


}
