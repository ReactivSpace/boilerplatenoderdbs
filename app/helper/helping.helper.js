'use strict';


const AWS = require('aws-sdk');
const config = require('../config/environment.config.json');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuidV1 = require('uuid');
const generator = require('generate-password');
const jwt = require('jsonwebtoken');
const passportStrategy = require('../config/passport');
const db = require('../config/sequelize.config');
const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');


let newConfig = {
    jwtOptions: {
        "secretOrKey": config.jwtOptions.secretOrKey || process.env.secretOrKey,
        "ignoreExpiration": config.jwtOptions.ignoreExpiration || process.env.ignoreExpiration
    }
}


const awsConfig = config.awsConfig;

const s3 = new AWS.S3({
    "accessKeyId": process.env.accessKeyId || awsConfig.accessKeyId,
    "secretAccessKey": process.env.secretAccessKey || awsConfig.secretAccessKey,
    "region": process.env.region || awsConfig.region
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.Bucket || config.Bucket,
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {fieldName: file.fieldname});
        },
        contentType: (req, file, cb) => {
            cb(null, file.mimetype);
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
});

function uploadFile(file) {
    return new Promise(function (fullfill, reject) {
        var stream = fs.createReadStream(file.path);
        var name = Date.now().toString();
        var data = {
            Key: name,
            ACL: 'public-read',
            Body: stream,
            ContentType: file.type,
            Bucket: process.env.Bucket || config.Bucket
        };
        s3.upload(data, function (err, data) {
            if (err) {
                reject(err);
            } else {
                fullfill(data)
            }
        })
    });
}

const generatePassowrd = () => {
    let password = generator.generate({
        length: 7,
        numbers: true
    });
    return password;

}


//sign jwt token
const signLoginData = (userInfo) => {
    return new Promise((resolve, reject) => {
        var token = jwt.sign(userInfo, newConfig.jwtOptions.secretOrKey, {expiresIn: 180000000});
        return resolve(token);

    });
}


//a middleware tp attach files and field to form data requests
const attachBodyAndFiles = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        req.body = fields;
        req.files = files;
        next();
    });

}




module.exports.upload = upload; //upload using multer-s3 module
module.exports.generatePassowrd = generatePassowrd;
module.exports.signLoginData = signLoginData;
module.exports.uploadFile = uploadFile; //upoad using aws javascript sdk
module.exports.attachBodyAndFiles = attachBodyAndFiles;

