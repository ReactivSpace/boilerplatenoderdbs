/**
 * Created by hassan on 7/7/17.
 */
'use strict';

/**
 * UserTokenInfo Model
 */


module.exports = function(sequelize, DataTypes) {

    let UserRole = sequelize.define('UserRole',
        {
            role: {
                type : DataTypes.STRING
            }
        },
        {
            associate: function(models) {

                UserRole.hasOne(models.User);
            }
        }
    );

    return UserRole;
};