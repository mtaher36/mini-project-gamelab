const { ResponseError } = require("../error/response-error.js");

const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }

    if (err instanceof ResponseError) {
        res.status(err.statusResponse).json({
            status: err.status,
            statusResponse: err.statusResponse,
            message: err.message,
            data: err.data,
        }).end();
    } else {
        res.status(500).json({
            errors: err.message
        }).end();
    }
};

module.exports = {
    errorMiddleware
};
