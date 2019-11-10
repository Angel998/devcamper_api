class ErrorResponse extends Error {
  custom = true;
  statusCode = 500;

  constructor(message = "Ocurrio un error inesperado", statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
