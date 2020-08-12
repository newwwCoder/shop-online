const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
    ac.grant("user")
        .readAny("article")
        .createAny('article')

    ac.grant("admin")
        .extend('user')
        .deleteAny('article')
        .updateAny('article')
        .createAny('admin')


    return ac;
})();