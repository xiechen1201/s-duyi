function success(res, httpCode = 200, status = 0, data) {
    res.status(httpCode).json({
        code: status,
        data
    });
}

function error(res, httpCode = 500, status = 101, message = "error") {
    res.status(httpCode).json({
        code: status,
        message
    });
}

module.exports.response = {
    success,
    error
};
