
'use strict';

var PromiseReturns = require('bluebird'),
    StandardError = require('standard-error'),
    _ = require('lodash'),
    AWS = require('aws-sdk'),
    fs = require('fs');

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validateUrl(url) {
    var r = new RegExp('/^(ftp|http|https):\/\/[^ "]+$/');
    return r.test(url);
}

function rejectPromise(message) {
    winston.error(message);
    return new PromiseReturns(function (resolve, reject) {
        reject(new StandardError({
            status: 'Error',
            message: message,
            msgCode: '409'
        }));
    });
}



function putS3Object(s3, params) {
    return new PromiseReturns(function (resolve, reject) {
        s3.putObject(params, function (err) {
            if (err) {
                return rejectPromiseReturns(reject, err)
            }
            resolve();
        });
    });
}

function uploadImageToS3(imageFile) {

    return new PromiseReturns(function (resolve) {
        if (imageFile) {
            var file = imageFile;
            var fileName = file.originalname;
            var filePath = config.s3.host_name + config.s3.bucket + '/' + config.s3.paths.original + fileName;
            var s3Key = config.s3.paths.original + fileName;

            AWS.config.update(config.s3.credentials);
            var s3 = new AWS.S3({params: {Bucket: config.s3.bucket}});
            var params = {
                Key: s3Key,
                Body: fs.createReadStream(file.path),
                ACL: 'public-read',
                ContentEncoding: 'base64',
                ContentType: 'application/octet-stream'
            };
            var obj = {
                s3: s3,
                params: params,
                filePath: filePath
            }
            return resolve(obj);
        }
        else {
            resolve(null);
        }
    });
}

function escapingSpecialCharacters(string) {

    var escaped = string.replace(/([\!\*\+\&\|\(\)\[\]\{\}\^\~\?\:\"])/g, "\\$1");
    return escaped;
}

function catchException(err) {

    winston.error(err);
    return rejectPromise(err.message);
}


exports.validateEmail = validateEmail;
exports.rejectPromise = rejectPromise;
exports.validateUrl = validateUrl;
exports.uploadImageToS3 = uploadImageToS3;
exports.putS3Object = putS3Object;
exports.escapingSpecialCharacters = escapingSpecialCharacters;
exports.catchException = catchException;
