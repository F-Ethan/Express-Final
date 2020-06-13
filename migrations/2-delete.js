'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "Delted" to table "users"
 * changeColumn "Admin" on table "users"
 *
 **/

var info = {
    "revision": 2,
    "name": "delete",
    "created": "2020-05-03T05:43:08.721Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "users",
            "Delted",
            {
                "type": Sequelize.BOOLEAN,
                "field": "Delted",
                "allowNull": false,
                "default": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Admin",
            {
                "type": Sequelize.BOOLEAN,
                "field": "Admin",
                "allowNull": false,
                "default": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
