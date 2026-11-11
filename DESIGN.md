# DESIGN.md — Personal Portfolio Design System & Rules

Dokumen ini adalah panduan utama (**Single Source of Truth**) untuk desain dan implementasi UI/UX website Personal Portfolio. Seluruh komponen, halaman, warna, tipografi, dan interaksi wajib mengikuti aturan di bawah ini.

---

## 1. Design Philosophy & Aesthetic Direction

- **Gaya Utama**: **Neo-Brutalist Editorial & Design-Canvas Aesthetic** (terinspirasi dari workspace *design tool* seperti Figma yang dipadukan dengan tipografi editorial bersih dan aksen *hard-shadow* kontras tinggi).
- **Kesan Visual**: Bersih (*clean*), tajam (*crisp*), kreatif, modern, dan interaktif tanpa terlihat ramai (*cluttered*).
- **Prinsip Utama**:
  1. **High Contrast Monochrome + Single Vibrant Accent**: Didominasi latar putih bersih (`#FFFFFF`) dan hitam pekat (`#0D0D0D`), dengan **Mint Emerald Green (`#00D67E`)** sebagai satu-satunya warna aksen utama.
  2. **Design-Tool Motifs**: Menggunakan elemen visual khas kanvas desainer seperti *selection bounding box* dengan titik *anchor handle* di sekeliling teks/label penting.
  3. **Hard Offset Shadows**: Menggunakan bayangan tegas tanpa *blur* (*solid offset shadow*) berwarna hitam atau hijau mint pada tombol utama, foto profil, dan *badge* ikon.
  4. **Sharp & Structured Framing**: Gambar proyek dan kontainer utama dibingkai dengan garis tegas (`1px` hingga `2px solid #111111`) dan sudut tajam (`0px`–`4px`), dikontraskan dengan *pill tag* (`9999px`) untuk kategori dan tombol sosial.

---

## 2. Color Palette & Design Tokens

Gunakan variabel CSS / token Tailwind berikut secara konsisten:

### Surface & Backgrounds
| Token | Hex | Penggunaan |
| :--- | :--- | :--- |
| `--bg-primary` | `#FFFFFF` | Latar belakang utama (Hero, About, Services) |
| `--bg-secondary` | `#F7F8FA` | Latar belakang alternatif lembut (Projects section) |
| `--bg-dark` | `#0D0D0D` | Latar belakang kontras gelap (Marquee ribbon, CTA Banner, Primary Button) |

### Brand & Accent Colors
| Token | Hex | Penggunaan |
| :--- | :--- | :--- |
| `--accent-primary` | `#00D67E` | Aksen utama: *Selection box border & handles*, *button hard shadow*, *active nav dot*, *logo badge*, *brush stroke* dekoratif, *service icon box*, *active social button* |
| `--accent-hover` | `#00BF70` | State hover untuk elemen beraksen hijau |

### Typography / Ink Colors
| Token | Hex | Penggunaan |
| :--- | :--- | :--- |
| `--text-primary` | `#0D0D0D` | Judul utama (H1, H2, H3), teks navigasi aktif, nama brand |
| `--text-secondary` | `#666666` | Paragraf deskripsi, sub-teks proyek, keterangan waktu/lokasi |
| `--text-muted` | `#8E8E93` | Teks *copyright*, tab tidak aktif, meta sekunder |
| `--text-inverse` | `#FFFFFF` | Teks di atas latar belakang `--bg-dark` (`#0D0D0D`) |

### Borders & Shadows
| Token | Value | Penggunaan |
| :--- | :--- | :--- |
| `--border-strong` | `#111111` | Bingkai foto profil, kartu gambar proyek, garis pemisah *Services*, *pill tag* kategori |
| `--border-subtle` | `#E4E4E7` | Lingkaran ikon sosial media default, garis bantu tipis |
| `--shadow-accent` | `4px 4px 0px #00D67E` | Bayangan tegas untuk Primary CTA Button (`Get In Touch`, `Contact Me`) |
| `--shadow-dark` | `8px 8px 0px #111111` | Bayangan tegas untuk bingkai foto Hero |
| `--shadow-icon` | `2px 2px 0px #111111` | Bayangan kecil untuk logo navbar dan kotak ikon *Services* |

---

## 3. Typography System

### Font Family
- **Heading & Display (`--font-display`)**: `'Plus Jakarta Sans'`, `'Syne'`, atau `'Outfit'` (Geometric Sans-Serif dengan karakter tegas dan modern).
- **Body & UI (`--font-sans`)**: `'Plus Jakarta Sans'` atau `'Inter'`, sans-serif.

### Type Scale & Hierarchy
| Elemen | Ukuran (Desktop) | Ukuran (Mobile) | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `56px` (`3.5rem`) | `36px` (`2.25rem`) | `700` (Bold) | `1.15` | `-0.02em` |
| **Statement / Manifesto (H2)** | `36px` (`2.25rem`) | `26px` (`1.625rem`) | `700` (Bold) | `1.3` | `-0.015em` |
| **Section Heading (H2)** | `32px` (`2rem`) | `24px` (`1.5rem`) | `700` (Bold) | `1.25` | `-0.01em` |
| **Service / Project Title (H3)** | `20px`–`22px` | `18px` | `700` (Bold) | `1.35` | `-0.01em` |
| **Body Copy** | `15px`–`16px` | `14px`–`15px` | `400` (Regular) | `1.65` | `0em` |
| **Eyebrow / Selection Box** | `14px` (`0.875rem`) | `13px` | `600` (SemiBold) | `1.2` | `0em` |
| **Nav Links & Buttons** | `14px` (`0.875rem`) | `14px` | `600` (SemiBold) | `1.0` | `0.01em` |
| **Category Pill Tag** | `12px` (`0.75rem`) | `12px` | `500` (Medium) | `1.0` | `0.01em` |

---

## 4. Signature UI Motifs & Components

### 4.1. Canvas Selection Box Badge (Eyebrow Frame)
Digunakan pada sapaan Hero (`Hi everyone 👋, I'am ...`), label seksi (`Projects`), dan *contact handle* di Footer.
- **Kontainer**: `display: inline-flex`, `padding: 6px 16px`, `border: 1.5px solid #00D67E` (atau `#111111`), `background: #FFFFFF`, `position: relative`.
- **Corner & Midpoint Handles**: Terdapat **6 atau 8 kotak kecil** (`6px × 6px`) berwarna `#00D67E` dengan `border: 1px solid #111111` yang diposisikan absolut di tiap sudut (`top-left`, `top-right`, `bottom-left`, `bottom-right`) serta titik tengah atas & bawah (`top-center`, `bottom-center`).

### 4.2. Primary CTA Button (Neo-Brutalist Button)
Digunakan untuk tombol aksi utama seperti `Get In Touch ↗` dan `Contact Me ↗`.
- **Visual**:
  - Background: `#0D0D0D`
  - Teks: `#FFFFFF`, `font-weight: 600`, `font-size: 14px`, `padding: 12px 22px`
  - Ikon Panah (`↗`): Warna `#00D67E`, ukuran `16px`, di sebelah kanan teks
  - Shadow: Hard offset `4px 4px 0px #00D67E`
- **Interaksi Hover & Active**:
  - **Hover**: Tombol bergeser `translate(-1px, -1px)` dengan shadow membesar menjadi `6px 6px 0px #00D67E`.
  - **Active / Click**: Tombol menekan ke dalam `translate(3px, 3px)` dengan shadow mengecil menjadi `1px 1px 0px #00D67E`.

### 4.3. Secondary Action Link (`Download CV`)
- Teks berwarna `#0D0D0D`, `font-weight: 600`, `font-size: 14px`, tanpa background/border, dilengkapi ikon unduh (`↓` / tray) di sebelah kanan.
- **Hover**: Garis bawah (*underline*) atau pergeseran ikon `2px` ke bawah.

### 4.4. Social Media Icon Buttons
- Berbentuk lingkaran penuh (`width: 38px`, `height: 38px`, `border-radius: 9999px`).
- **Default**: `border: 1px solid #D4D4D8`, `background: #FFFFFF`, ikon `#0D0D0D`.
- **Active / Highlight / Hover**: `background: #00D67E`, `border: 1.5px solid #111111`, `box-shadow: 2px 2px 0px #111111`, ikon `#0D0D0D`.

### 4.5. Angled Marquee Divider (Crossed Ribbon)
Pemisah dinamis antara Hero dan seksi di bawahnya:
- **Pita Utama**: Bar hitam (`#0D0D0D`) selebar layar penuh (`100vw`), tinggi `56px`–`64px`, dimiringkan sedikit (`transform: rotate(-1.5deg)`).
- **Pita Latar (Aksen)**: Bar hijau (`#00D67E`) di belakang pita hitam dengan kemiringan berlawanan (`transform: rotate(1.2deg)`), terlihat menyembul di sisi atas-kiri dan bawah-kanan.
- **Konten Marquee**: Teks putih (`18px`, `font-weight: 600`) berisi keahlian utama (mis. `Web Design`, `Mobile App Design`, `Brand Identity`, `UI/UX Design`) yang dipisahkan oleh ikon bintang 4-sudut (`✦`) berwarna putih.

### 4.6. Circular Scroll Badge
- Lingkaran teks melingkar (*rotating SVG text*: `"explore more about me • explore more about me •"`) berdiameter `80px`–`90px` dengan ikon panah bawah (`↓`) di tengah lingkaran.
- Ditempatkan di area kiri-bawah foto profil pada Hero.

---

## 5. Layout, Grid & Spacing System

- **Max Container Width**: `1200px` (dengan `padding-inline: 24px` pada mobile, `48px` pada tablet, dan `64px` pada desktop).
- **Section Vertical Padding**: `80px`–`112px` pada desktop, `56px`–`72px` pada mobile.
- **Grid System**:
  - **Hero**: 12-kolom (7 kolom teks di kiri, 5 kolom visual potret di kanan).
  - **Services List**: Baris vertikal *full-width* dengan *grid* internal `1fr auto auto` (Deskripsi Layanan | Statistik Proyek | Gambar Preview).
  - **Projects Showcase**: Grid 3 kolom (`grid-template-columns: repeat(3, 1fr)`, `gap: 28px`) pada desktop, 2 kolom pada tablet, 1 kolom pada mobile.

---

## 6. Section-by-Section Layout Rules

### 6.1. Header / Navbar
- **Tinggi**: `80px`, latar transparan/putih bersih.
- **Kiri (Brand Logo)**: Ikon lingkaran hijau (`#00D67E`) berbingkai hitam tipis dengan simbol petir/inisial putih + teks nama tebal (`David` / `Iqbal`).
- **Kanan (Navigasi)**: Daftar tautan horizontal (`Home`, `About`, `Services`, `Projects`, `Contact`) dengan jarak `gap: 32px`.
- **Indikator Aktif**: Titik bulat hijau (`•` berukuran `6px`, warna `#00D67E`) tepat di kiri teks menu yang sedang aktif (`font-weight: 700`, `#0D0D0D`). Menu tidak aktif berwarna `#666666`.

### 6.2. Hero Section
- **Kolom Kiri**:
  1. *Canvas Selection Box Badge* (`Hi everyone 👋, I'am ...`).
  2. Judul H1 2 baris yang kuat (`Visual Designer Based in ...`).
  3. Paragraf perkenalan singkat (`max-width: 460px`, 2–3 baris).
  4. Baris CTA (`Get In Touch ↗` + `Download CV`) dengan `gap: 24px`.
  5. Baris `Find me on:` diikuti deretan tombol ikon bulat sosial media.
- **Kolom Kanan**:
  1. Bingkai foto potret vertikal (`aspect-ratio: 4/5`, `max-width: 360px`) dengan `border: 2px solid #111111` dan `box-shadow: 8px 8px 0px #111111`.
  2. Ornamen vektor garis *zig-zag* hitam (`〽`) di sudut kiri atas bingkai foto.
  3. Ornamen sapuan garis tebal diagonal hijau (`#00D67E`, `border-radius: 999px`) di belakang sudut kanan bawah bingkai foto.
  4. *Circular Scroll Badge* di sisi kiri bawah foto.

### 6.3. About & Credentials Section
- **Statement Headline**: Teks H2 rata tengah (`text-align: center`, `max-width: 760px`, `margin-inline: auto`) yang merangkum nilai utama (*value proposition*).
- **Interactive Tab Navigation**:
  - Berada di bawah *statement headline*, rata tengah, dengan item seperti `Education`, `Skills`, `Work Experience` (`gap: 28px`).
  - Tab aktif ditandai dengan titik hijau (`•`) di depannya dan teks tebal (`#0D0D0D`).
- **Tab Content Area**:
  - Menampilkan isi tab yang dipilih secara bersih di bagian tengah (`max-width: 640px`, rata tengah untuk teks ringkas atau grid terstruktur untuk daftar *skills* & pengalaman).

### 6.4. Services / Capabilities Section
- Daftar baris vertikal di mana setiap item layanan dipisahkan oleh garis bawah `1px solid #111111`.
- **Struktur Baris**:
  - **Bagian Kiri**: Kotak ikon hijau (`40px × 40px`, `background: #00D67E`, `border: 1.5px solid #111111`, `box-shadow: 2px 2px 0px #111111`, berisi ikon bintang putih `✦`) di samping judul layanan (`H3`) dan deskripsi 2 baris di bawahnya.
  - **Bagian Tengah/Kanan**: Metrik pencapaian (contoh: `23 Project Completed`, `0 Running Project`) dengan angka tebal.
  - **Gambar Preview (Floating / Inline Card)**: Gambar *mockup* karya berukuran kompak dengan `border: 1.5px solid #111111` yang tampil di sisi kanan baris layanan.

### 6.5. Projects Section (`My Latest Projects`)
- **Header Seksi**:
  - *Canvas Selection Box Badge* bertuliskan `Projects` (rata tengah).
  - Judul H2 `My Latest Projects` (rata tengah).
  - Baris sub-header: Teks pengantar pendek di sisi kiri, dan tombol `Contact Me ↗` di sisi kanan.
- **Project Cards (3 Kolom)**:
  - **Thumbnail**: Rasio `4:3` atau `1:1`, sudut tajam (`border-radius: 0px`), `border: 1.5px solid #111111`, `overflow: hidden`. Saat *hover*, gambar melakukan *subtle zoom* (`scale(1.03)`).
  - **Judul Proyek (H3)**: `margin-top: 16px`, `font-size: 20px`, `font-weight: 700`, `#0D0D0D`.
  - **Deskripsi Singkat**: Maksimal 2 baris (`line-clamp-2`), `font-size: 14px`, `#666666`, `margin-top: 8px`.
  - **Category Pill**: Di bagian paling bawah kartu (`margin-top: 14px`), `border: 1px solid #111111`, `border-radius: 9999px`, `padding: 5px 14px`, `font-size: 12px`, `font-weight: 500`, background transparan/putih.
- **Carousel / Next Trigger**: Tombol bulat putih (`44px × 44px`, `border: 1px solid #111111`) dengan panah kanan (`→`) yang mengambang di tepi kanan kartu ketiga.

### 6.6. Footer & Dark CTA Banner
- **Dark CTA Block**:
  - Latar belakang `#0D0D0D`, `padding: 56px 0`.
  - **Kiri**: Pertanyaan ajakan kolaborasi berukuran besar (`H2` putih, mis. *"Have an Interesting Idea?"*).
  - **Kanan**: Kotak *Canvas Selection Box* berlatar putih dengan teks kontak (mis. `t.me/...` atau email) lengkap dengan titik *handle* hijau `#00D67E`, dihubungkan oleh garis siku tipis hijau ke *pill badge* hijau (`Telegram` / `Email`).
- **Bottom Copyright Bar**:
  - Latar putih (`#FFFFFF`), `padding: 20px 0`, teks rata tengah atau kanan berwarna `#8E8E93` (`12px`).

---

## 7. Do's and Don'ts (Design Guardrails)

### DO (Wajib Dilakukan)
- Gunakan kontras tinggi antara latar putih (`#FFFFFF`), teks/elemen hitam (`#0D0D0D`), dan aksen hijau mint (`#00D67E`).
- Gunakan *Canvas Selection Box* (bingkai dengan titik *handle* hijau) hanya untuk *eyebrow badge* atau *contact highlight* agar tetap ikonik dan tidak berlebihan.
- Pertahankan garis tepi tegas (`1px`–`2px solid #111111`) pada bingkai foto dan kartu proyek.
- Pastikan ruang kosong (*whitespace*) antar seksi lega agar tata letak terasa bersih dan editorial.

### DON'T (Dilarang Dilakukan)
- **Jangan** menggunakan *soft drop-shadow* kabur yang besar (`box-shadow: 0 20px 40px rgba(0,0,0,0.1)`) pada tombol atau kartu — selalu gunakan *hard offset shadow* atau garis tepi tegas (`1px solid #111`).
- **Jangan** menggunakan *gradient* warna-warni (ungu/biru/pink) atau efek *glassmorphism* (`backdrop-blur`) yang bertabrakan dengan estetika Neo-Brutalist bersih ini.
- **Jangan** membulatkan sudut gambar kartu proyek (`rounded-2xl` dilarang pada *thumbnail* proyek; gunakan sudut tajam `rounded-none` atau maksimal `rounded-sm`).
- **Jangan** menambahkan warna aksen kedua di luar `#00D67E`.
