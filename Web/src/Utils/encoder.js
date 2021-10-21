export function encoder (url) {
    var hash = 0, i, chr;
    if (url.length === 0) return hash;
    for (i = 0; i < url.length; i++) {
        chr   = url.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    
    var shortUrl = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
    shortUrl += possible.charAt(Math.floor(Math.random() * possible.length));
    shortUrl+=Math.abs(hash)%26;
    return shortUrl;
}