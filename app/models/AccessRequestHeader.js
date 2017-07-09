'use strict';

/**
	* T_SYS_CF_A_AccessRequestHeader Model
	*/

let crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	let T_SYS_CF_A_AccessRequestHeader = sequelize.define('T_SYS_CF_A_AccessRequestHeader', 
		{
            RecordId: {
                type : DataTypes.TEXT
            },
            UserAccessRequest: {
                type : DataTypes.TEXT
            },
            System: {
                type : DataTypes.STRING
            }, 
			 UserID: {
                type : DataTypes.STRING
            },
			  CreatedBy: {
                type : DataTypes.STRING
            }
		},
        {
            	associate: function(models) {
				// T_SYS_CF_A_AccessRequestHeader.belongsTo(models.User);
			}
		}
	);

	return T_SYS_CF_A_AccessRequestHeader;
};