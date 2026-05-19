---
title: "How DNS Works: The Domain Name System Explained"
description: "DNS translates domain names into IP addresses — but the process involves multiple servers, caching layers, and propagation delays. Here's exactly how it works."
date: 2026-05-18
category: guides
author: "Tom Brennan"
keywords: ["how DNS works", "domain name system explained", "DNS resolution", "DNS propagation", "what is DNS"]
draft: false
---

Every time you type a URL into a browser, a remarkable lookup process happens in milliseconds — one most people never think about. DNS, the Domain Name System, is the internet's phone book: it translates human-readable domain names like `example.com` into the numeric IP addresses computers actually use to find each other. Understanding how it works helps you troubleshoot propagation delays, configure hosting correctly, and make sense of why a domain change can take 48 hours to go global.

## What DNS Actually Does

Computers communicate using IP addresses — strings of numbers like `142.250.80.46`. Humans are terrible at remembering those. DNS is the system that bridges the gap: you type `google.com`, DNS looks up which IP address belongs to that name, and your browser connects to the right server.

Without DNS, you would need to know the exact IP address of every website you wanted to visit. DNS makes the internet navigable.

## The Hierarchy: Root, TLD, and Authoritative Servers

DNS isn't a single database — it's a distributed hierarchy of servers, each responsible for a portion of the namespace.

**Root Name Servers** sit at the top of the hierarchy. There are 13 sets of root servers worldwide (operated by organizations including ICANN, NASA, and Verisign), each identified by a letter A through M. They don't know where `example.com` is, but they know who's responsible for `.com`.

**TLD (Top-Level Domain) Name Servers** handle specific extensions. The `.com` TLD servers know which authoritative server to ask for any `.com` domain. Similarly, `.org`, `.net`, `.co.uk` each have their own TLD servers.

**Authoritative Name Servers** are the final authority for a specific domain. When you register a domain and point it to a hosting provider, you're telling the TLD registry which authoritative name servers hold your DNS records. These servers contain your actual records — A records, MX records, CNAMEs, and so on.

## The Resolution Process Step by Step

When you type a URL and press Enter, here's what happens:

**1. Browser cache check.** Your browser first checks if it recently looked up this domain. If it resolved `example.com` five minutes ago, it may have cached the result and skips DNS entirely.

**2. Operating system cache.** If the browser has no cached result, it asks the OS. Your computer maintains its own DNS cache. You can view it on Windows with `ipconfig /displaydns` or flush it with `ipconfig /flushdns`.

**3. Recursive resolver query.** If neither cache has the answer, the OS queries a recursive resolver — usually provided by your ISP or a public DNS service (like 8.8.8.8 from Google or 1.1.1.1 from Cloudflare). This server does the heavy lifting on your behalf.

**4. Root server query.** The recursive resolver asks a root server: "Where can I find the name servers for `.com`?" The root server responds with the address of the `.com` TLD servers.

**5. TLD server query.** The recursive resolver asks the `.com` TLD server: "Where are the authoritative name servers for `example.com`?" The TLD server responds with the addresses of `example.com`'s authoritative name servers.

**6. Authoritative server query.** The recursive resolver queries `example.com`'s authoritative name server directly: "What is the IP address for `example.com`?" The authoritative server returns the A record — for example, `93.184.216.34`.

**7. Response returned.** The recursive resolver passes the IP address back to your OS, which passes it to the browser. The browser can now make an HTTP request to that IP address. The whole process typically takes 20–120 milliseconds.

## DNS Record Types

Authoritative name servers store several types of records:

- **A record** — Maps a domain to an IPv4 address (e.g., `example.com → 93.184.216.34`)
- **AAAA record** — Maps a domain to an IPv6 address
- **CNAME record** — Creates an alias from one name to another (e.g., `www.example.com → example.com`)
- **MX record** — Specifies which servers handle email for a domain
- **TXT record** — Stores text information, commonly used for domain verification (Google, email authentication like SPF/DKIM)
- **NS record** — Specifies which name servers are authoritative for a domain

## TTL and Propagation Delays

Every DNS record has a TTL (Time To Live) value — a number of seconds that tells resolvers how long to cache the result before asking again. A TTL of 3600 means resolvers cache your record for one hour.

This is why DNS changes don't happen instantly. When you update an A record, every recursive resolver that has cached the old record will continue serving it until the TTL expires. If your TTL was 86400 (24 hours), some users might see the old IP for up to 24 hours after your change.

**Best practice:** Before migrating a site, lower your TTL to 300 (5 minutes) a day or two in advance. After the migration is stable, raise it back to 3600 or higher for better performance.

**"DNS propagation" explained:** There's no central signal that tells all resolvers worldwide to update. Each resolver checks in on its own schedule based on TTL. Propagation simply means waiting for cached records to expire globally — it's not a push, it's a pull.

## Public DNS vs ISP DNS

Your ISP provides a default recursive resolver, but you can switch to public alternatives:

- **Google Public DNS** (8.8.8.8 / 8.8.4.4) — Fast and reliable globally
- **Cloudflare** (1.1.1.1 / 1.0.0.1) — Privacy-focused, often the fastest resolver tested
- **OpenDNS** (208.67.222.222) — Offers content filtering options

Switching to a faster resolver can reduce DNS lookup times, though for most users the difference is modest (10–30ms).

## Why DNS Matters for Hosting

When you set up web hosting, DNS is the glue that connects your domain to your server. Typically you either:

- **Change your nameservers** to point to your host's nameservers (they then manage all your DNS records)
- **Update individual A/CNAME records** while keeping your registrar's nameservers (more control, more complexity)

Understanding DNS also helps you configure subdomains, set up email (MX records), verify domain ownership with third-party services (TXT records), and troubleshoot connectivity issues. Tools like `dig` (on Mac/Linux) or `nslookup` (Windows) let you query DNS records directly and see exactly what's being served.

DNS is one of those foundational technologies that quietly powers everything — and understanding it makes you a more effective developer, sysadmin, or website owner.
