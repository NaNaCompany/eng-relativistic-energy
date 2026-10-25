export const tool={
  "id": "E058",
  "slug": "eng-relativistic-energy",
  "title": "상대론 운동에너지 계산기",
  "title_en": "Relativistic Kinetic Energy Calculator",
  "category": "상대론",
  "category_en": "Relativity",
  "fields": [
    {
      "key": "m",
      "label": "정지질량 m",
      "label_en": "Rest mass m",
      "dimension": "mass",
      "example": 1,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "1"
    },
    {
      "key": "v",
      "label": "속력 v",
      "label_en": "Speed v",
      "dimension": "speed",
      "example": 179875474.79999998,
      "constraint": "nonnegative",
      "display_unit": "ms",
      "display_value": "179875474.8"
    }
  ],
  "result_label": "상대론 운동에너지 K",
  "result_label_en": "Relativistic kinetic energy K",
  "result_dimension": "energy",
  "formula": "K = (γ−1)mc²",
  "purpose": "광속에 가까운 물체의 병진 운동에너지 계산",
  "purpose_en": "Calculate translational kinetic energy using special relativity.",
  "assumptions": "m>0, 0≤v<c. 입력 m은 정지질량이며 결과는 운동에너지로 정지에너지를 포함하지 않는다. 낮은 속력에서 γ−1의 뺄셈 손실을 줄이는 동치식을 사용한다.",
  "assumptions_en": "Required: m>0 and 0≤v<c. m is rest mass. The result is kinetic energy, excluding rest energy. An equivalent expression avoids subtractive cancellation in γ−1 at low speed.",
  "sources": [
    {
      "label": "OpenStax · 5 9 relativistic energy",
      "url": "https://openstax.org/books/university-physics-volume-3/pages/5-9-relativistic-energy"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-relativistic-energy/",
  "repository": "https://github.com/NaNaCompany/eng-relativistic-energy",
  "output_unit": "J"
};
