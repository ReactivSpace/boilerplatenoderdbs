/**
 * Created by hassan on 7/7/17.
 */
'use strict';

/**
 * UserTokenInfo Model
 */


module.exports = function(sequelize, DataTypes) {

    let UserRoleMapping = sequelize.define('UserRoleMapping',
        {
            UserId: {
                type : DataTypes.INTEGER
            },
            RoleId: {
                type : DataTypes.INTEGER
            },
            name: {
                type : DataTypes.STRING
            }
        }
    );

    return UserRoleMapping;
};