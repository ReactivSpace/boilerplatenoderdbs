'use strict';

/**
	* T_SYS_CF_A_Permissions Model
	*/

let crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	let T_SYS_CF_A_Permissions = sequelize.define('T_SYS_CF_A_Permissions', 
		{
            RecordId: {
                type : DataTypes.TEXT
            },
            PermissionObjectId: {
                type : DataTypes.TEXT
            },
            PermObjectName: {
                type : DataTypes.STRING
            }, 
			 CreatedBy: {
                type : DataTypes.STRING
            },
			  CreatedOn: {
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
				//T_SYS_CF_A_Permissions.belongsTo(models.User);
			}
		}
	);

	return T_SYS_CF_A_Permissions;
};