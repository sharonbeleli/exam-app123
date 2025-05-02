
# FixMind – Landing Page for Technical Articles

Minimal static site ready to deploy on **GitHub Pages** or **Vercel**.

## Project structure
```
.
├── index.html
├── style.css
└── script.js
```

## Local dev
Open `index.html` in a browser or use any static server.

## Deploy to GitHub + Vercel

1. Create a new GitHub repo and push these files:
```bash
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

2. On Vercel dashboard:
   - **New Project → Import Git Repository**  
   - Select your repo  
   - Framework preset: **Other (Static)**  
   - Build command: _empty_  
   - Output directory: `.`  

3. Done. Every push to `main` redeploys automatically.

## Customize
* Replace dummy Mailchimp `action` URL in `index.html`.
* Add real article links or integrate a CMS / Base44 API.
* Extend CSS/JS as needed.

---
Enjoy 🤘
