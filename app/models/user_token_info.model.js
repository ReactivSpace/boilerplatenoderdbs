'use strict';

/**
	* UserTokenInfo Model
	*/

let crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	let UserTokenInfo = sequelize.define('UserTokenInfo', 
		{
            refresh_token: {
                type : DataTypes.TEXT
            },
            access_token_time_identifier: {
                type : DataTypes.TEXT
            },
            device_info: {
                type : DataTypes.STRING
            }
		},
        {
            	associate: function(models) {
				//UserTokenInfo.belongsTo(models.User);
			}
		}
	);

	return UserTokenInfo;
};