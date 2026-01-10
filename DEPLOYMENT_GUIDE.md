# 🌐 Domain Connection Guide: Hostinger to Vercel

This guide details how to securely connect your domain `rankak.in` (purchased on Hostinger) to your Vercel deployment.

## ⚠️ Important: SSL & Security
Vercel automatically provisions a **free SSL certificate** (HTTPS) for your domain. You do **not** need to buy one from Hostinger. This ensures your site is secure and avoids "Not Secure" warnings.

---

## 🛡️ Vercel Free Tier Survival Guide
To ensure `rankak.in` scales to 1000+ users without hitting limits:

### 1. Bandwidth (100GB/mo)
*   **Optimization**: All images are compressed to WebP.
*   **Caching**: We use `Cache-Control: public, max-age=31536000, immutable` for assets. This means users only download images **once**.
*   **CDN**: Vercel's Edge Network automatically serves your content from the closest server to the user (e.g., Mumbai for Indian users).

### 2. Serverless Functions (10s Limit)
*   **Strategy**: We bypass Vercel functions entirely for the database.
*   **Direct Connection**: The app connects **directly** to Supabase from the user's browser.
*   **Zero Latency**: No "cold starts" or timeouts because there is no middleman server.

### 3. Database (Supabase Free Tier)
*   **Connection Pooling**: Supabase handles thousands of concurrent connections.
*   **Security**: RLS policies ensure this direct connection is safe.

---

## Step 1: Vercel Configuration
1.  Go to your **Vercel Dashboard**.
2.  Select your project (`rankak-mobile-landing`).
3.  Navigate to **Settings** > **Domains**.
4.  Enter `rankak.in` in the input field and click **Add**.
5.  Select the recommended option (usually **Add rankak.in and www.rankak.in**).

Vercel will now show you a set of **DNS Records** (A Record and CNAME) that are "Invalid" or "Configuring". Keep this tab open.

---

## Step 2: Hostinger DNS Configuration
1.  Log in to your **Hostinger Dashboard**.
2.  Go to **Domains** and select `rankak.in`.
3.  Find the **DNS / Nameservers** section.
4.  **Delete** any existing "A" records that point to Hostinger (Parked) or other IPs to avoid conflicts.

### Add the A Record (for rankak.in)
*   **Type**: `A`
*   **Name**: `@` (or leave blank if Hostinger requires it)
*   **Points to**: `76.76.21.21` (This is Vercel's IP)
*   **TTL**: `3600` (or default)

### Add the CNAME Record (for www.rankak.in)
*   **Type**: `CNAME`
*   **Name**: `www`
*   **Points to**: `cname.vercel-dns.com`
*   **TTL**: `3600` (or default)

---

## Step 3: Verification
1.  Go back to the **Vercel Domains** tab.
2.  It may take a few minutes (up to 24h, but usually fast) for the status to turn **Valid** (Green).
3.  Once valid, Vercel will automatically generate the SSL certificate.

## ✅ Success Criteria
*   Visiting `https://rankak.in` loads your app.
*   Visiting `http://rankak.in` automatically redirects to `https`.
*   The browser address bar shows a **Lock Icon** (Secure).
