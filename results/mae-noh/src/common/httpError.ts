
class HTTPError extends Error {
    constructor(
        private statusCode: number,
        message?: string
    ) {
        super(message)
        this.name = `HTTPError`
        this.statusCode = statusCode
    }
    showAlert() {
        alert(`HTTPError occurred: ${this.message}`)
    }
}

export default HTTPError