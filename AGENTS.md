# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 14 (App Router)** website for Profabrics, a fabric supplier. It is a single-project repo (not a monorepo) with no database, no Docker, and no external services except an optional SMTP server for the contact form.

### Running the app

- `npm run dev` starts the Next.js dev server on port 3000.
- `npm run build` produces a production build; `npm start` serves it.

### Lint / Test

- There are **no lint or test scripts** configured in this project. No ESLint, no Jest, no testing framework.
- The only validation available is `npm run build`, which runs Next.js compilation and type/validity checks.

### Contact form (SMTP)

- The `/api/contact` route uses Nodemailer and requires env vars in `.env.local`: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO`.
- Without these, the contact form gracefully shows an error message. The rest of the site works without SMTP.

### Fabric data

- All product data is hardcoded in `data/fabrics.js` (no API or database).
