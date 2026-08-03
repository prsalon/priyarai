# PR Salon Jagun Website

Official website of **PR Salon & Nail Art, Jagun, Assam**

🌐 Website: https://prsalon.in

---

# Version

Current Version: **v1.2.1**

---

# Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages
- Progressive Web App (PWA)

---

# Features

- Responsive Design
- Mobile Friendly
- Installable PWA
- WhatsApp Booking
- Call Now Button
- Google Maps Location
- Dynamic Price List
- Service Search
- Offer Mode
- Gallery with Lightbox
- Open / Closed Status
- SEO Optimized
- BeautySalon Schema
- Sitemap
- Robots.txt

---

# Project Structure

```
prsalon/
│
├── index.html
├── style.css
├── script.js
├── images/
├── favicon.ico
├── site.webmanifest
├── sitemap.xml
├── robots.txt
├── CNAME
└── README.md
```

---

# Updating Prices

Open:

```
script.js
```

Find:

```javascript
const services = [
```

Edit the prices.

Example:

```javascript
{
    category:"Hair",
    name:"Hair Spa",
    price:700,
    offer:599
}
```

---

# Enable Offers

Open:

```
script.js
```

Change

```javascript
const offerEnabled = false;
```

to

```javascript
const offerEnabled = true;
```

---

# Git Workflow

After making changes:

```bash
git add .
git commit -m "Describe changes"
git push
```

---

# Hosting

Hosted using:

- GitHub Pages

Domain:

https://prsalon.in

---

# Future Roadmap

- Better Gallery
- Google Reviews
- Category Filters
- Appointment Booking
- Admin Dashboard
- Analytics

---

# Developer

Project Owner:
**Samar Limboo**

Salon:
**PR Salon & Nail Art**

Location:
Jagun, Assam, India