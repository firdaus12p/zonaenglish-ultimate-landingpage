# Content, Data, dan WhatsApp Integration

## Key Research Data (JANGAN DIUBAH)

Data ini adalah core value proposition dari ZonaEnglish:

### Three-Phase Research Evolution

- **Phase 1**: Guru Fluent B2-C1 only → **10% retention** after 3 months
- **Phase 2**: Guru Fluent + International Curriculum → **27% retention** after 3 months
- **Phase 3**: NBSN Method + Complete System → **95% retention** after 18 months

### Critical Statistics

- **95%**: Siswa bertahan hingga 18 bulan (190 dari 200 siswa)
- **8 years**: Research period (2015-2024)
- **90%**: Anak cepat lupa karena stres
- **7/10**: Anak bingung karena materi terlalu tinggi
- **4/10**: Anak alami brain fog & fokus lemah
- **3-7x**: Peningkatan kemampuan lebih cepat

## 7 Pillars Ekosistem (Urutan Penting)

1. **Teacher Fluency B2-C1** (10% contribution)
2. **Kurikulum Internasional Adaptasi Muslim** (15% contribution)
3. **Metode NBSN** (60% contribution - GAME CHANGER)
4. **Sistem Kelas & Pendampingan** (3 pendamping, 5 model kelas)
5. **Aplikasi ZonaEnglish** (Daily test, reward, AI tracking)
6. **Teknologi AI & Internet** (GPT, Gemini, Perplexity, Grok)
7. **Kemitraan DocterBee** (Brain health, 4/10 anak brain fog)

## WhatsApp Integration Pattern

### Phone Number

`6282188080688` (format: country code + number, no spaces/dashes)

### URL Format

```
https://wa.me/6282188080688?text=MESSAGE
```

### Pre-filled Message Patterns

Semua messages dimulai dengan "Assalamu'alaikum":

1. **Main CTA (Daftar):**

   ```
   Assalamu%27alaikum,%20saya%20ingin%20mendaftarkan%20anak%20ke%20ZonaEnglish
   ```

2. **Secondary CTA (Konsultasi):**

   ```
   Assalamu%27alaikum,%20saya%20ingin%20konsultasi%20tentang%20ZonaEnglish
   ```

3. **Floating Button (General Info):**
   ```
   Assalamu%27alaikum,%20saya%20ingin%20informasi%20tentang%20ZonaEnglish
   ```

### WhatsApp Elements Locations

- **Floating button**: `.whatsapp-float` (fixed bottom-right, 60x60px desktop, 56x56px mobile)
- **Hero CTA**: 2 buttons (Daftarkan Anak + Pelajari Lebih Lanjut)
- **Final CTA section**: 2 buttons (Daftar Sekarang + Konsultasi Gratis)
- **Footer text**: Phone number as clickable link

### SVG Icon (Inline)

```html
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.737 5.477..." />
</svg>
```

White fill, #25d366 background color (WhatsApp official green)

## Section IDs dan Navigation

Navbar uses hash anchors ke sections:

- `#masalah` - Problem statement (90% lupa karena stres)
- `#riset` - Research data (10% → 27% → 95%)
- `#ekosistem` - 7 pillars explanation
- `#hasil` - Results for children (6 outcomes)
- `#testimoni` - Testimonials (3 cards dengan avatars)
- `#faq` - FAQ accordion (6 questions)
- `#daftar` - Final CTA section

## Content Language Rules

### Indonesian (Bahasa Indonesia)

- **All UI text**: Navbar, buttons, headings, body copy
- **Formal Indonesian**: Professional tone untuk educational product
- **Islamic context**: "Assalamu'alaikum", "shalat", "Muslim Indonesia"

### Typography Guidelines

- **Headings**: Bold, impactful (font-weight: 700-900)
- **Body**: Clear, readable (line-height: 1.6-1.8)
- **Emphasis**: `<strong>` untuk key terms (Human Intelligence, NBSN, etc.)
- **Lists**: Detailed, specific benefits (tidak generic)

### Cultural Sensitivity

- Maintain Islamic greetings di semua WhatsApp messages
- Kurikulum ditekankan sebagai "adaptasi Muslim Indonesia"
- Halal content (±80% materi international di-filter)
- References to prayer (shalat) dan Islamic values
- Target audience: Muslim Indonesian parents

## Emoji Usage

Emojis digunakan ekstensif untuk visual appeal:

- Section icons: 🎯, 📊, 🏗️, 💬, 🧠, ⚡, 😊, 👑, 🎥, ❗, ❓
- Stats/features: Numbers dan benefits dengan emoji context
- Maintain emoji consistency when editing content
