export const logError = (errorName, errorPayload) => {
    // @TODO: use Sentry or DataDog to log error.
    console.error(errorName, errorPayload)
}