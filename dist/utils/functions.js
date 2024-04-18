"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnToIp = void 0;
function ConnToIp(conn) {
    if (typeof conn === 'string' && /^[0-9a-fA-F]+$/.test(conn)) {
        //@ts-ignore
        const ipAddress = conn.match(/.{1,2}/g).map((h) => String.fromCharCode(parseInt(h, 16))).join('');
        return ipAddress;
    }
    else {
        return "";
    }
}
exports.ConnToIp = ConnToIp;
//# sourceMappingURL=functions.js.map