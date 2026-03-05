# SHEH Travel — Sanity CMS Setup Guide

This guide walks you through every remaining step to get the Sanity CMS fully working with your SHEH Travel website.

---

## Table of Contents

1. [Install Dependencies](#step-1-install-dependencies)
2. [Create a Sanity Project](#step-2-create-a-sanity-project)
3. [Configure Environment Variables](#step-3-configure-environment-variables)
4. [Add CORS Origins in Sanity](#step-4-add-cors-origins-in-sanity)
5. [Verify the Build](#step-5-verify-the-build)
6. [Open Sanity Studio](#step-6-open-sanity-studio)
7. [Populate Your Content](#step-7-populate-your-content)
8. [Deploy to Vercel](#step-8-deploy-to-vercel)
9. [How the Fallback System Works](#how-the-fallback-system-works)
10. [Content Schema Reference](#content-schema-reference)
11. [Troubleshooting](#troubleshooting)

---

## Step 1: Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install --legacy-peer-deps
```

> **Why `--legacy-peer-deps`?** Some packages have peer dependency conflicts with React 19. This flag tells npm to skip strict peer checks. It's safe for this project.

Wait until installation completes with no errors. You should see a message like `added X packages`.

---

## Step 2: Create a Sanity Project

1. Go to **https://www.sanity.io** and click **"Get Started"** (or **"Log in"** if you already have an account).
2. Sign up with Google, GitHub, or email — it's free.
3. After logging in, go to **https://www.sanity.io/manage**.
4. Click **"Create new project"**.
5. Give it a name like **`SHEH Travel`**.
6. When asked for a dataset, keep the default name **`production`** and set it to **Public** (this is fine for read-only website data).
7. After creation, you'll see your **Project ID** on the project dashboard. It looks something like `a1b2c3d4`.

**Copy the Project ID** — you'll need it in the next step.

### Screenshot reference:

On the project dashboard at sanity.io/manage you will see:

```
Project: SHEH Travel
Project ID: a1b2c3d4      <-- This is what you need
Dataset: production
```

---

## Step 3: Configure Environment Variables

Open the file `.env.local` in the root of your project and replace the placeholder:

**Before:**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

**After (using your actual project ID):**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=a1b2c3d4
NEXT_PUBLIC_SANITY_DATASET=production
```

> Replace `a1b2c3d4` with **your** actual Project ID from Step 2.

---

## Step 4: Add CORS Origins in Sanity

Sanity needs to know which domains are allowed to access the Studio. Without this, the Studio at `/studio` will show an error.

1. Go to **https://www.sanity.io/manage** and open your project.
2. Click **"API"** in the left sidebar.
3. Under **"CORS Origins"**, click **"Add CORS origin"**.
4. Add these origins:

| Origin                          | Allow Credentials |
| ------------------------------- | ----------------- |
| `http://localhost:3000`         | ✅ Yes             |
| Your Vercel URL (add later)     | ✅ Yes             |

> For local development, `http://localhost:3000` is mandatory. After deploying to Vercel, come back and add your production URL (e.g. `https://sheh-travel.vercel.app`).

---

## Step 5: Verify the Build

Run these commands to make sure everything compiles:

```bash
npm run build
```

If the build succeeds, you'll see output like:

```
✓ Compiled successfully
✓ Generating static pages
Route (app)                              Size
┌ ○ /                                    ...
├ ○ /contact                             ...
├ ○ /packages                            ...
├ ○ /clients-certificates                ...
└ ○ /studio/[[...tool]]                  ...
```

> **Note:** If you see warnings about the Sanity project ID being empty, that's okay — it means the `.env.local` hasn't been set yet or you haven't restarted the terminal. The site still works perfectly using fallback data.

---

## Step 6: Open Sanity Studio

Start the development server:

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:3000/studio
```

You will see the **SHEH TRAVEL CMS** dashboard. This is your content management interface — it's built directly into your website.

The first time you open it, Sanity will ask you to log in with the same account you created in Step 2. After logging in, you'll see the content types in the left sidebar:

- Hero Section
- Package Category
- Travel Package
- Destination
- Corporate Client
- Certification
- Trust Section
- Contact Information
- Site Settings

---

## Step 7: Populate Your Content

Now it's time to add content. The website works with fallback/default data, so you only need to add content for things you want to **change**. Below is the recommended order and what to fill in for each content type.

### 7.1 — Site Settings (do this first)

Click **"Site Settings"** → **"Create"** (only create ONE document).

| Field               | What to enter                                              | Example                                                              |
| ------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| Site Name           | Your business name                                         | `SHEH Travel & Tours`                                                |
| Site Description    | Short description for SEO                                  | `Premium travel experiences for corporate and leisure travelers`      |
| Footer Description  | Text shown in the website footer                           | `Your trusted partner for premium travel experiences since 2010...`   |
| Address             | Business address                                           | `Level 15, Menara KL, Jalan Sultan, 50000 Kuala Lumpur`              |
| Phone               | Phone number                                               | `+603-2142-8888`                                                     |
| Email               | Business email                                             | `info@shehtravel.com`                                                |
| Facebook URL        | Full Facebook page URL                                     | `https://www.facebook.com/shehtravel`                                |
| Instagram URL       | Full Instagram page URL                                    | `https://www.instagram.com/shehtravel`                               |
| Twitter URL         | Full Twitter/X page URL                                    | `https://twitter.com/shehtravel`                                     |
| Google Maps Embed   | Google Maps **embed** URL for the contact page iframe       | See below                                                            |

**How to get the Google Maps Embed URL:**
1. Go to Google Maps and find your business location.
2. Click **Share** → **Embed a map**.
3. Copy the URL from the `src="..."` part of the iframe code. It starts with `https://www.google.com/maps/embed?pb=...`.

Click **"Publish"** when done.

---

### 7.2 — Hero Section

Click **"Hero Section"** → **"Create"** (only ONE document).

| Field              | What to enter                                 |
| ------------------ | --------------------------------------------- |
| Badge Text         | `Premium Travel Experiences`                  |
| Heading            | `Discover the World with SHEH Travel`         |
| Subtitle           | Your tagline paragraph                        |
| Background Image   | Upload a hero background image (landscape, at least 1920px wide) |
| Primary Button Text| `Explore Packages`                            |
| Primary Button Link| `/packages`                                   |
| Secondary Button Text | `Contact Us`                               |
| Secondary Button Link | `/contact`                                 |

Click **"Publish"**.

---

### 7.3 — Destinations

Click **"Destination"** → **"Create"** for each destination.

Create one document per destination. Here are the current defaults:

| Name          | Slug (click Generate) | Description                   | Order |
| ------------- | --------------------- | ----------------------------- | ----- |
| Maldives      | `maldives`            | Luxury overwater villas       | 1     |
| Italy         | `italy`               | Historic charm & cuisine      | 2     |
| Japan         | `japan`               | Culture & technology          | 3     |
| Morocco       | `morocco`             | Desert adventures             | 4     |
| New Zealand   | `new-zealand`         | Adventure paradise            | 5     |
| Greece        | `greece`              | Island hopping dreams         | 6     |
| Bali          | `bali`                | Tropical island retreat       | 7     |
| Switzerland   | `switzerland`         | Alpine adventures             | 8     |
| Dubai         | `dubai`               | Luxury experiences            | 9     |
| Phuket        | `phuket`              | Beach paradise                | 10    |

> **Important:** After typing the Name, click **"Generate"** next to the Slug field. The slug must match what's in the URL (e.g. `new-zealand`). Upload a photo for each destination.

Click **"Publish"** after each one.

---

### 7.4 — Package Categories

Click **"Package Category"** → **"Create"** for each category.

| Title                    | Slug (click Generate)       | Order |
| ------------------------ | --------------------------- | ----- |
| Island Paradise          | `islands`                   | 1     |
| Incredible Destinations  | `europe`                    | 2     |
| Asia Collection          | `asia`                      | 3     |
| Cultural Experiences     | `cultural`                  | 4     |
| Adventure                | `adventure`                 | 5     |
| Luxury                   | `luxury`                    | 6     |

> Upload an image for each category. Click **"Publish"** after each.

---

### 7.5 — Travel Packages

Click **"Travel Package"** → **"Create"** for each package.

For each package, fill in:

| Field             | What to enter                                                    |
| ----------------- | ---------------------------------------------------------------- |
| Title             | Package name (e.g. `Maldives Luxury Overwater Villa`)            |
| Category          | Select the category (e.g. `Island Paradise`)                     |
| Destination       | Select the destination (e.g. `Maldives`)                         |
| Display Category  | Badge text shown on card (e.g. `Island Paradise`)                |
| Image             | Upload a package photo                                           |
| Duration          | e.g. `5 Days 4 Nights`                                          |
| Price             | e.g. `RM 12,999`                                                |
| Description       | One-line description                                             |
| Highlights        | Click "Add item" for each tag (e.g. `Private Pool`, `Snorkeling`) |

> You can create as many packages as you want. The website will display all of them. Click **"Publish"** after each.

---

### 7.6 — Corporate Clients

Click **"Corporate Client"** → **"Create"** for each client.

| Field | What to enter                    |
| ----- | -------------------------------- |
| Name  | Client company name              |
| Logo  | Upload the company logo (PNG with transparent background works best) |
| Order | Display order number (1, 2, 3…) |

---

### 7.7 — Certifications

Click **"Certification"** → **"Create"** for each.

| Field       | What to enter                                     |
| ----------- | ------------------------------------------------- |
| Title       | e.g. `IATA Accredited`                            |
| Description | e.g. `Internationally recognized travel agency...` |
| Icon Type   | Choose from dropdown: **Award**, **Shield**, or **Check Circle** |
| Order       | Display order (1, 2, 3…)                          |

---

### 7.8 — Trust Section

Click **"Trust Section"** → **"Create"** (only ONE document).

| Field       | What to enter                                                      |
| ----------- | ------------------------------------------------------------------ |
| Heading     | e.g. `Why Companies Trust Us`                                      |
| Description | Your trust paragraph                                               |
| Statistics  | Click **"Add item"** for each stat:                                |
|             | - Value: `500+` / Label: `Corporate Clients`                      |
|             | - Value: `15+` / Label: `Years Experience`                        |
|             | - Value: `98%` / Label: `Satisfaction Rate`                       |

---

### 7.9 — Contact Information

Click **"Contact Information"** → **"Create"** for each contact card.

| Title           | Icon Type | Details (add one per line)                       | Order |
| --------------- | --------- | ------------------------------------------------ | ----- |
| Our Office      | Map Pin   | `Level 15, Menara KL...`                         | 1     |
| Phone           | Phone     | `+603-2142-8888`, `+6012-345-6789`               | 2     |
| Email           | Mail      | `info@shehtravel.com`, `corporate@shehtravel.com`| 3     |
| Business Hours  | Clock     | `Mon - Fri: 9:00 AM - 6:00 PM`, `Sat: 9AM - 1PM`| 4    |

---

## Step 8: Deploy to Vercel

### 8.1 — Push to GitHub

If you haven't already, create a Git repository and push your code:

```bash
git init
git add .
git commit -m "SHEH Travel with Sanity CMS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sheh-travel.git
git push -u origin main
```

> Make sure `.env.local` is in your `.gitignore` file (it should be by default) — never push secrets to GitHub.

### 8.2 — Import to Vercel

1. Go to **https://vercel.com** and log in (or sign up with GitHub).
2. Click **"Add New..."** → **"Project"**.
3. Select your **sheh-travel** GitHub repository.
4. Before clicking Deploy, expand **"Environment Variables"** and add:

| Key                              | Value                |
| -------------------------------- | -------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | Your Sanity project ID (e.g. `a1b2c3d4`) |
| `NEXT_PUBLIC_SANITY_DATASET`     | `production`         |

5. Click **"Deploy"**.

### 8.3 — Add Vercel URL to Sanity CORS

After deployment, Vercel gives you a URL like `https://sheh-travel.vercel.app`.

Go back to **sanity.io/manage** → your project → **API** → **CORS Origins** and add:

```
https://sheh-travel.vercel.app
```

With **Allow Credentials** checked ✅.

> If you add a custom domain later, add that too.

---

## How the Fallback System Works

The website is built so that **everything works even without Sanity configured**. Here's how:

1. Every page fetches data from Sanity using `.catch(() => null)`.
2. If Sanity returns `null` (no data or no project configured), the component uses **hardcoded default data**.
3. This means:
   - You can deploy the site immediately — it shows all the default content.
   - As you add content in Sanity Studio, it **automatically replaces** the defaults.
   - If you delete something from Sanity, the default reappears.

**You don't have to add everything at once.** Add content gradually. The site always works.

---

## Content Schema Reference

Quick reference of all 9 content types and their fields:

| Content Type         | Type       | Fields                                                                 |
| -------------------- | ---------- | ---------------------------------------------------------------------- |
| **Hero Section**     | Singleton  | badge, heading, subtitle, backgroundImage, primaryButtonText/Link, secondaryButtonText/Link |
| **Package Category** | Collection | title, slug, description, image, order                                 |
| **Travel Package**   | Collection | title, category (ref), destination (ref), displayCategory, image, duration, price, description, highlights |
| **Destination**      | Collection | name, slug, image, description, order                                  |
| **Corporate Client** | Collection | name, logo, order                                                      |
| **Certification**    | Collection | title, description, iconType (Award/Shield/CheckCircle), order         |
| **Trust Section**    | Singleton  | heading, description, stats [{value, label}]                           |
| **Contact Info**     | Collection | title, iconType (MapPin/Phone/Mail/Clock), details, order              |
| **Site Settings**    | Singleton  | siteName, siteDescription, logo, footerDescription, address, phone, email, facebookUrl, instagramUrl, twitterUrl, googleMapsEmbedUrl |

> **Singleton** = Create only ONE document of this type.
> **Collection** = Create as many as you need.

---

## Troubleshooting

### "Module not found" errors

Run `npm install --legacy-peer-deps` again. The Sanity packages may not have installed correctly.

### Studio shows a blank page or CORS error

Make sure you added `http://localhost:3000` (for local) or your Vercel URL (for production) to the CORS origins in sanity.io/manage → API → CORS Origins.

### Content not showing on the website

1. Make sure you clicked **"Publish"** on the document in Sanity Studio (not just saved as draft).
2. The website uses CDN caching. It may take 1-2 minutes for changes to appear.
3. For instant updates during development, you can restart the dev server (`Ctrl+C` then `npm run dev`).

### Build fails on Vercel

Make sure the environment variables `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set in the Vercel project settings (Settings → Environment Variables). Redeploy after adding them.

### Images not loading from Sanity

In `next.config.mjs`, verify that `cdn.sanity.io` is in the `remotePatterns` array (this has already been configured).

### Studio login not working

Make sure you're logged into Sanity with the same account that owns the project. You can manage team members at sanity.io/manage → your project → Members.

---

## Quick Start Checklist

- [ ] Run `npm install --legacy-peer-deps`
- [ ] Create Sanity project at sanity.io/manage
- [ ] Copy Project ID into `.env.local`
- [ ] Add `http://localhost:3000` to CORS origins
- [ ] Run `npm run build` to verify
- [ ] Run `npm run dev` and visit `http://localhost:3000/studio`
- [ ] Log into Studio and create **Site Settings** first
- [ ] Add your Destinations, Categories, then Packages
- [ ] Add Corporate Clients, Certifications, Trust Section, Contact Info
- [ ] Push to GitHub and deploy on Vercel
- [ ] Add Vercel URL to Sanity CORS origins
- [ ] Add environment variables in Vercel project settings
