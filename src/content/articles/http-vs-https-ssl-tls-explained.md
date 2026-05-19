---
title: "HTTP vs HTTPS: How SSL/TLS Encryption Actually Works"
description: "HTTPS isn't just a padlock icon — it's an encryption system that protects every byte between your visitor and your server. Here's what it does and how it works."
date: 2026-05-18
category: guides
author: "James Whitfield"
keywords: ["HTTP vs HTTPS", "SSL TLS explained", "how HTTPS works", "SSL certificate explained", "website encryption"]
draft: false
---

Most website owners know they need HTTPS — browsers flag HTTP sites as "Not Secure," Google uses it as a ranking signal, and modern hosting setups provision SSL certificates automatically. But few people understand what HTTPS actually does at a technical level, why it matters beyond the green padlock, or what TLS 1.3 means compared to older protocols.

## The Problem HTTP Can't Solve

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. When your browser requests a page and a server sends it back, that's HTTP at work. The problem: HTTP transmits everything in plain text.

This means anyone sitting between your user and your server — an ISP, a network operator, a malicious actor on a shared WiFi network — can read every byte of the exchange. Login credentials, form data, payment information, session cookies that keep users logged in: all visible in plain text over HTTP.

HTTPS adds a layer of encryption (SSL/TLS) that makes intercepted traffic unreadable. Even if someone captures the packets, they see scrambled ciphertext, not data.

## SSL vs TLS: Clearing Up the Terminology

You'll see both "SSL" and "TLS" used, sometimes interchangeably. Here's the actual history:

**SSL (Secure Sockets Layer)** was the original protocol, developed by Netscape in the mid-1990s. SSL 2.0 and 3.0 both had serious vulnerabilities and are now deprecated.

**TLS (Transport Layer Security)** is SSL's successor, developed by the IETF. TLS 1.0 (1999) and 1.1 (2006) are also now deprecated due to known weaknesses. TLS 1.2 (2008) remains widely used. TLS 1.3 (2018) is the current standard — faster and more secure.

When people say "SSL certificate," they almost always mean a TLS certificate. The name stuck for historical reasons. What matters is whether your server is configured to use TLS 1.2 or 1.3 (both acceptable), not the naming convention.

## The TLS Handshake: How Encryption is Established

Before any encrypted data flows, the browser and server need to agree on how to communicate. This negotiation is called the TLS handshake, and it happens before a single byte of your webpage is sent.

**Step 1: Client Hello.** The browser sends a message listing which TLS versions and cipher suites it supports, plus a random number it generated.

**Step 2: Server Hello.** The server responds by selecting the TLS version and cipher suite from the client's list, and sends its own random number plus its SSL/TLS certificate.

**Step 3: Certificate verification.** The browser examines the server's certificate. It checks:
- Is the certificate issued by a trusted Certificate Authority (CA)?
- Does the domain on the certificate match the domain being visited?
- Is the certificate within its validity period?
- Has the certificate been revoked?

If any check fails, the browser shows a security warning.

**Step 4: Key exchange.** The browser and server use asymmetric cryptography (typically using Diffie-Hellman or RSA) to agree on a shared session key. Crucially, this key is never transmitted — both sides independently calculate the same key from the exchange.

**Step 5: Symmetric encryption begins.** From here forward, all data is encrypted using the agreed session key with a symmetric cipher (AES-256 in modern configurations). Symmetric encryption is much faster than asymmetric, which is why the handshake uses asymmetric only to establish the key.

TLS 1.3 streamlined this process — the handshake now completes in one round trip instead of two, reducing latency by 100ms or more.

## Certificate Authorities and the Chain of Trust

A certificate by itself means nothing — anyone can create one. What makes a certificate trusted is its signature from a Certificate Authority (CA) that your browser already trusts.

Browsers and operating systems ship with a pre-installed list of trusted root CAs. When a server presents a certificate signed by one of those CAs (or by an intermediate CA chaining back to a root CA), the browser trusts it.

Major public CAs include DigiCert, Sectigo, GlobalSign, and Let's Encrypt. Let's Encrypt democratized HTTPS by offering free, automated certificates — it's now the most widely used CA in the world and what most hosting providers use for their free SSL offerings.

## Certificate Types: DV, OV, and EV

Not all certificates provide the same level of identity verification:

**Domain Validation (DV)** — The CA verifies only that you control the domain (typically by having you place a file on the server or add a DNS record). This is what Let's Encrypt provides. It proves the connection is encrypted but not who owns the site.

**Organization Validation (OV)** — The CA verifies the domain plus basic organizational information (business name, country). Requires documentation review. Takes days, not minutes.

**Extended Validation (EV)** — The most rigorous vetting, requiring full legal entity verification. EV certificates used to show the company name in the browser address bar (the "green bar"), but major browsers removed this distinction in 2019. EV certificates are now primarily used for internal compliance requirements rather than visible user trust signals.

For most websites, a DV certificate from Let's Encrypt is entirely appropriate.

## What HTTPS Protects (and What It Doesn't)

HTTPS guarantees three things:

1. **Confidentiality** — The data in transit cannot be read by third parties
2. **Integrity** — The data cannot be tampered with in transit without detection
3. **Authentication** — You're talking to the server that owns that domain, not an impersonator

What HTTPS does **not** protect:

- **Server security** — A hacked server still exposes data, regardless of HTTPS
- **Malicious site owners** — A fraudulent site can have a valid HTTPS certificate. The padlock means the connection is encrypted; it does not mean the site is trustworthy
- **Data after it reaches the server** — HTTPS only covers data in transit

## HTTPS and Performance

A common misconception is that HTTPS is slower than HTTP. This was marginally true with older TLS versions due to handshake overhead. With TLS 1.3, the performance gap is negligible — and HTTPS enables HTTP/2 and HTTP/3, which are significantly faster than HTTP/1.1 due to multiplexing and header compression.

In practice, migrating from HTTP to HTTPS often slightly improves performance for users because it unlocks HTTP/2 support.

## Mixed Content: The Hidden HTTPS Trap

A site with HTTPS can still serve "mixed content" — HTTP resources (images, scripts, stylesheets) loaded on an HTTPS page. Browsers block active mixed content (scripts, iframes) entirely and warn on passive mixed content (images). If your HTTPS site loads scripts over HTTP, browsers will block them, potentially breaking functionality.

When migrating from HTTP to HTTPS, ensure all internal links, CSS references, JavaScript sources, and image URLs are updated to use HTTPS or protocol-relative URLs. Most modern hosting setups and CMS platforms handle this automatically, but it's worth verifying after migration.

HTTPS is no longer optional for any site that handles user data — and even for purely informational sites, it's the baseline expectation of users and search engines alike.
