export function ConnToIp(conn: string): string {
    if (typeof conn === 'string' && /^[0-9a-fA-F]+$/.test(conn)) {
        //@ts-ignore
        const ipAddress = conn.match(/.{1,2}/g).map((h) => String.fromCharCode(parseInt(h, 16))).join('');
        return ipAddress
    } else {
        return ""
    }    
}