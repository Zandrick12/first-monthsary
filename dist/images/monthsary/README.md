# 📸 How to Add Your Girlfriend's Photos

Welcome! To replace the placeholder images with your girlfriend's actual photos, simply copy your pictures into this directory (`public/images/monthsary/`) with the filenames below.

## Image Filenames Guide

| Filename | Where It Appears | Recommended Orientation |
| :--- | :--- | :--- |
| `featured-love.jpg` | **Hero Section** (Featured portrait framed with flowers) | Portrait (vertical) or Square |
| `photo-1.jpg` | **Gallery Photo #1** ("My favorite smile 🌸") | Portrait or Square |
| `photo-2.jpg` | **Gallery Photo #2** ("The prettiest girl in my world 💗") | Square or Portrait |
| `photo-3.jpg` | **Gallery Photo #3** ("My happiness, in one picture.") | Portrait |
| `photo-4.jpg` | **Gallery Photo #4** ("A face I'll never get tired of seeing.") | Square |
| `photo-5.jpg` | **Gallery Photo #5** ("My favorite person, always.") | Portrait |
| `photo-6.jpg` | **Gallery Photo #6** ("And somehow, I keep falling for you. 💚") | Landscape (horizontal) or Square |
| `photo-7.jpg` | **Gallery Photo #7** ("Every gentle moment with you is magic ✨") | Square or Portrait |
| `photo-8.jpg` | **Gallery Photo #8** ("My heart found its favorite home in you 🌷") | Portrait |

### 💡 Pro Tips:
1. **File formats**: You can use `.jpg`, `.jpeg`, or `.png`. If you use `.png` or different filenames, just update the filenames in `src/config/monthsary.config.ts`.
2. **Prevent Face Cropping**:
   - In `src/config/monthsary.config.ts`, each photo has an `objectPosition` setting (such as `"center 20%"` or `"center top"`).
   - If a photo crops her forehead or chin, adjust the percentage (e.g. `"center 15%"` moves the view up toward her face).
3. **Captions**:
   - You can edit any captions and memory tags directly in `src/config/monthsary.config.ts`.
