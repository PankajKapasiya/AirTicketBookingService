const {StatusCodes} = require('http-status-codes');

class ServiceError extends Error{
    constructor(
        message ,
        explanation, 
        statuscode= StatusCodes.INTERNAL_SERVER_ERROR
    ){ 

        this.name = 'Service error',
        this.message = message,
        this.explanation =explanation,
        this.statuscode = statuscode
    }
}

modeul.exports = ServiceError;