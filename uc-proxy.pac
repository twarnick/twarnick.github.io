function FindProxyForURL(url,host)
{
    if (dnsDomainIs(host, "licensesp.exitgames.com"))
	return "DIRECT";
    
    // No proxy for private (RFC 1918) IP addresses (intranet sites)
    if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
         return "DIRECT";
    }
 
    // No proxy for localhost
    if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {
        return "DIRECT";
    }
 
    // Proxy all
    return "HTTP 94.237.100.254:3128";
}

