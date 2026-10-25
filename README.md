# 상대론 운동에너지 계산기

광속에 가까운 물체의 병진 운동에너지 계산

- Plan ID: E058
- App: https://nanalab.kr/eng-relativistic-energy/
- Repository: https://github.com/NaNaCompany/eng-relativistic-energy
- Formula: `K = (γ−1)mc²`
- Output: 상대론 운동에너지 K

## Model

m>0, 0≤v<c. 입력 m은 정지질량이며 결과는 운동에너지로 정지에너지를 포함하지 않는다. 낮은 속력에서 γ−1의 뺄셈 손실을 줄이는 동치식을 사용한다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `2.24688794684204e+16`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
