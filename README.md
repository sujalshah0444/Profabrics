# Profabrics — Premium Fabric & Clothing Website

A sleek, modern, and professional website for **Profabrics**, a premium fabric and clothing supplier based in **Kathmandu, Nepal**.

---

## 🎨 Design Philosophy

- **Aesthetic**: Refined luxury minimalism — neutral tones, editorial typography, generous white space
- **Fonts**: Cormorant Garamond (display) + Jost (body) — fashion-forward and distinctive
- **Colors**: Warm white, cream, charcoal, stone grey, and gold accents
- **Motion**: Subtle fade-up animations, hover reveals on fabric cards, smooth transitions

---

## 📁 Project Structure

```
profabrics/
├── app/
│   ├── globals.css          # Global styles, animations, custom classes
│   ├── layout.js            # Root layout with metadata
│   ├── page.js              # Homepage
│   ├── collections/
│   │   └── page.js          # Fabric collections with category filter
│   ├── about/
│   │   └── page.js          # About Us + mission + values
│   ├── contact/
│   │   └── page.js          # Contact form + Google Map
│   └── wholesale/
│       └── page.js          # Wholesale/tailor section + pricing tiers
├── components/
│   ├── Navbar.js            # Sticky, responsive navbar with mobile menu
│   ├── Footer.js            # Full footer with links, socials, address
│   └── FabricCard.js        # Reusable fabric product card
├── data/
│   └── fabrics.js           # Fabric catalogue data
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd profabrics

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, intro, featured fabrics, categories, testimonials |
| `/collections` | Full fabric catalogue with category filter tabs |
| `/about` | Brand story, mission, values, imagery |
| `/contact` | Contact form, address, hours, embedded Google Map |
| `/wholesale` | Trade account info, benefits, pricing tiers |

---

## ✏️ Customisation

### Update Business Details
Edit contact info in:
- `components/Footer.js` — address, phone, email, hours
- `app/contact/page.js` — contact info block and map embed
- `app/layout.js` — page title and meta description

### Update the Google Map
In `app/contact/page.js`, replace the `src` of the `<iframe>` with your actual Google Maps embed URL:
1. Go to Google Maps → search your address
2. Click Share → Embed a map → Copy HTML
3. Replace the iframe `src` value

### Add/Edit Fabrics
Edit `data/fabrics.js` to add new fabrics or update existing ones:
```js
{
  id: 9,
  name: 'Your Fabric Name',
  material: 'Material Type',
  price: 'NPR X,XXX/m',
  badge: 'New',        // or null
  image: 'https://...',
  description: 'Short description',
  category: 'Cotton & Linen',
}
```

### Add Real Images
Replace Unsplash placeholder URLs with your own fabric photography. Recommended ratio: **3:4 portrait**.

### Activate Social Links
In `components/Footer.js`, update the `href="#"` on Facebook, Instagram, Pinterest links.

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework, file-based routing |
| **Tailwind CSS** | Utility-first styling |
| **Google Fonts** | Cormorant Garamond + Jost |
| **Unsplash** | Placeholder fabric images |

---

## 📦 Dependencies

```json
{
  "next": "14.2.3",
  "react": "^18",
  "react-dom": "^18",
  "tailwindcss": "^3.3.0"
}
```

---

Built with ❤️ for Profabrics, Kathmandu, Nepal.
