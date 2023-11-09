"use strict";
var _a, _b, _c;
{
    let age = 17;
    let result = age > 18 ? "Adult" : "Not Adult";
    console.log(result);
    const user = {
        id: 101,
        name: "hasib",
        // email: 'h@gmail.com',
        address: {
            // permanent: "nothing",
            present: "Rangpur",
        },
    };
    const address = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanent) !== null && _b !== void 0 ? _b : "No Permanent address ";
    console.log(address);
    console.log((_c = user === null || user === void 0 ? void 0 : user.address) === null || _c === void 0 ? void 0 : _c.permanent);
}
