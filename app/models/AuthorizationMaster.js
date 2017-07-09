'use strict';

/**
	* T_SYS_CF_A_AuthorizationMaster Model
	*/

let crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	let T_SYS_CF_A_AuthorizationMaster = sequelize.define('T_SYS_CF_A_AuthorizationMaster', 
		{
            RecordId: {
                type : DataTypes.TEXT
            },
            UserAccessRequest: {
                type : DataTypes.TEXT
            },
            UserID: {
                type : DataTypes.STRING
            }, 
			 UserGroupId: {
                type : DataTypes.STRING
            },
			  ApprovedBy: {
                type : DataTypes.STRING
            },
			  ApprovedOn: {
                type : DataTypes.STRING
            },
			  ValidFrom: {
                type : DataTypes.STRING
            },
			  ValidTo: {
                type : DataTypes.STRING
            },  
            IsActive: {
                type : DataTypes.STRING
            }
		},
        {
            	associate: function(models) {
				//T_SYS_CF_A_AuthorizationMaster.belongsTo(models.User);
			}
		}
	);

	return T_SYS_CF_A_AuthorizationMaster;
};