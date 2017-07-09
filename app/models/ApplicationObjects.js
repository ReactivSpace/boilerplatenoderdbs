'use strict';

/**
	* T_SYS_CF_A_ApplicationObjects Model
	*/

let crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	let T_SYS_CF_A_ApplicationObjects = sequelize.define('T_SYS_CF_A_ApplicationObjects', 
		{
            RecordId: {
                type : DataTypes.TEXT
            },
            AppObjectId: {
                type : DataTypes.TEXT
            },
            AppObjectName: {
                type : DataTypes.STRING
            }, 
			 ApplicationRecordId: {
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
				//T_SYS_CF_A_ApplicationObjects.belongsTo(models.User);
			}
		}
	);

	return T_SYS_CF_A_ApplicationObjects;
};