'use strict';

/**
	* T_SYS_CF_A_RoleMaster Model
	*/

let crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	let T_SYS_CF_A_RoleMaster = sequelize.define('T_SYS_CF_A_RoleMaster', 
		{
            RoleID: {
                type : DataTypes.TEXT
            },
            RoleName: {
                type : DataTypes.TEXT
            },
            ObjectID: {
                type : DataTypes.STRING
            }, 
			 AppObjectName: {
                type : DataTypes.STRING
            },
			  PermissionID: {
                type : DataTypes.STRING
            },
			  PermObjectName: {
                type : DataTypes.STRING
            },
			  IsActive: {
                type : DataTypes.STRING
            },
			  ValidFrom: {
                type : DataTypes.STRING
            },  
            ValidTo: {
                type : DataTypes.STRING
            }
		},
        {
            	associate: function(models) {
				//T_SYS_CF_A_RoleMaster.belongsTo(models.User);
			}
		}
	);

	return T_SYS_CF_A_RoleMaster;
};