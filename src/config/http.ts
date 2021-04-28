export class Http {

    status: "SUCCESS" | "ERROR"
    errors: unknown
    data: unknown
    message: string
    timestamp: number = new Date().getTime()

    static buildSuccess(data?: unknown, message?: string): Http {
        const response = new Http()
        response.status = "SUCCESS"
        response.data = data ?? null
        response.message = message || "Request processed successfully!"

        return response
    }

    static buildError(errors: unknown, message?: string): Http {
        const response = new Http()
        response.status = "ERROR"
        response.errors = errors
        response.message = message || "An error occurred while processing the request"

        return response
    }

}