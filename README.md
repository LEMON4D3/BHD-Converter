# BHD Converter

A web application that converts text into different numeral/encoding systems in real-time.

## Features

- **Text** — Input plain text
- **Binary** — Convert text to Binary representation
- **Hexadecimal** — Convert text to Hexadecimal representation
- **Decimal** — Convert text to Decimal representation

## Tech Stack

- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) — Type-safe JavaScript
- [Montserrat](https://fonts.google.com/specimen/Montserrat) — Google Font

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bhd-converter.git
   cd bhd-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

1. Select a conversion mode from the **Header** or **Footer** buttons
2. Type your text in the input area *(only available in Text mode)*
3. Switch between modes to see the converted output instantly

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Main page & components
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── context/
│   └── pageContext.tsx # Global state management
└── utils/
    └── converter.ts    # Conversion logic
```

## License

MIT License