// errors middleware
const errorsMiddleware = (err, req, res, next) => {
    return res.status(500).send(`Server error! ${err.message}`)
}

// errors handler
const errorsHandler = (_handler) => {
    return async (req, res, next) => {
        try {
            await _handler(req, res)
        }
        catch (ex) {
            next(ex)
        }
    }
}

module.exports.errors = errorsMiddleware
module.exports.handler = errorsHandler