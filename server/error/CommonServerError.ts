export class CommonServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CommonServerError';
    Object.setPrototypeOf(this, CommonServerError.prototype);
  }
}
