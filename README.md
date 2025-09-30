📈 Stock Portfolio Manager

A full-stack web application built with React, Node.js, Express, and TailwindCSS that allows users to manage a stock portfolio.

Users can:

➕ Add new stocks with name, price, and quantity

✏️ Edit stock details

🗑️ Delete stocks

📊 View per-stock value (price × quantity)

💰 See total portfolio value

🚀 Tech Stack

Frontend: React, React Router, TailwindCSS

Backend: Node.js, Express

API: RESTful endpoints (/api/stocks)

State Management: React Hooks (useState, useEffect)

📂 Project Structure
stock-portfolio/
│── backend/            # Node.js + Express backend
│   ├── server.js
│   └── routes/
│       └── stockRoutes.js
│
│── stock-portfolio-frontend/   # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── tailwind.config.js
│
└── README.md

⚙️ Installation & Setup
1. Clone the repo
git clone https://github.com/your-username/stock-portfolio.git
cd stock-portfolio

2. Setup backend
cd backend
npm install
npm run dev


Backend runs on http://localhost:8080

3. Setup frontend
cd stock-portfolio-frontend
npm install
npm run dev


Frontend runs on http://localhost:5173

🖼️ Screenshots
<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/0586dd2d-bfdf-46b3-8de6-b56652addf4b" />

