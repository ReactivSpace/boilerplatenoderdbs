'use strict';

/**
	* T_SYS_CF_A_UserGroup Model
	*/

let crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	let T_SYS_CF_A_UserGroup = sequelize.define('T_SYS_CF_A_UserGroup', 
		{
            RecordId: {
                type : DataTypes.TEXT
            },
            UserGroupId: {
                type : DataTypes.TEXT
            },
            UserGroupName: {
                type : DataTypes.STRING
            }, 
			 System: {
                type : DataTypes.STRING
            },
			  RoleID: {
                type : DataTypes.STRING
            },
			  RoleName: {
                type : DataTypes.STRING
            },
			  ObjectID: {
                type : DataTypes.STRING
            },
			  AppObjectName: {
                type : DataTypes.STRING
            },  ObjectValue: {
                type : DataTypes.STRING
            },  PrimaryOwner: {
                type : DataTypes.STRING
            },  PrimaryApprover: {
                type : DataTypes.STRING
            },  DeputyApprover: {
                type : DataTypes.STRING
            },  CreatedBy: {
                type : DataTypes.STRING
            },  CreatedOn: {
                type : DataTypes.STRING
            },
			 ValidFrom: {
                type : DataTypes.STRING
            },
			 ValidTo: {
                type : DataTypes.STRING
            },
			 IsGlobal: {
                type : DataTypes.STRING
            },
			 IsActive: {
                type : DataTypes.STRING
            }
		},
        {
            	associate: function(models) {
				//T_SYS_CF_A_UserGroup.belongsTo(models.User);
			}
		}
	);

	return T_SYS_CF_A_UserGroup;
};