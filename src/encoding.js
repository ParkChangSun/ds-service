const data = {
  // 아니요 0 예 1
  timezone: { 주간: 0, 야간: 1 },
  orderer: { 공공: 0, 민간: 1, 기타: 2 },
  season: { 겨울: 1, 봄: 2, 여름: 3, 가을: 4 },
  day: {
    일요일: 1,
    월요일: 2,
    화요일: 3,
    수요일: 4,
    목요일: 5,
    금요일: 6,
    토요일: 7,
  },
  process: {
    해체작업: 0,
    정비작업: 1,
    굴착작업: 2,
    마감작업: 3,
    "형틀 및 목공": 4,
    쌓기작업: 5,
    평탄작업: 6,
    운반작업: 7,
    설치작업: 8,
    조립작업: 9,
    설비작업: 10,
    "보수 및 교체작업": 11,
    준비작업: 12,
    장비이동: 13,
    이동: 14,
    "확인 및 점검작업": 15,
    "부설 및 다짐작업": 16,
    절단작업: 17,
    타설작업: 18,
    정리작업: 19,
    철거작업: 20,
    상차작업: 21,
    전기배선작업: 22,
    용접작업: 23,
    청소작업: 24,
    매설작업: 25,
    벌목작업: 26,
    도장작업: 27,
    연결작업: 28,
    자재이동: 29,
    양중작업: 30,
    전기작업: 31,
    인양작업: 32,
    천공작업: 33,
    장비청소: 34,
    "상차 및 하역작업": 35,
    기타: 36,
    반출작업: 37,
    "작업장 출입": 38,
    "물뿌리기 작업": 39,
    측량작업: 40,
    "항타 및 항발작업": 41,
    적재작업: 42,
    거치작업: 43,
    철근조립작업: 44,
    다짐작업: 45,
    양생작업: 46,
    제거작업: 47,
    자재정리: 48,
    절취작업: 49,
    점검: 50,
    수정작업: 51,
    고소작업: 52,
    "장약 및 발파작업": 53,
    정지작업: 54,
    고정작업: 55,
    인발작업: 56,
    교체작업: 57,
    "돌붙임 및 줄눈 작업": 58,
    토사하역: 59,
  },
  place: {
    도로교량: 0,
    업무시설: 1,
    부지조성: 2,
    제방: 3,
    공동주택: 4,
    숙박시설: 5,
    도로: 6,
    노유자시설: 7,
    하수도: 8,
    옹벽: 9,
    교육연구시설: 10,
    기타: 11,
    철도교량: 12,
    절토사면: 13,
    근린생활시설: 14,
    공공폐수처리시설: 15,
    "관광 휴게시설": 16,
    "문화 및 집회시설": 17,
    계류시설: 18,
    공장: 19,
    하수처리시설: 20,
    방파제: 21,
    종교시설: 22,
    단독주택: 23,
    "자동차 관련시설": 24,
    "동물 및 식물 관련시설": 25,
    운수시설: 26,
    창고시설: 27,
    판매시설: 28,
    상수도: 29,
    철도터널: 30,
    "교정 및 군사시설": 31,
    도로터널: 32,
    용수전용댐: 33,
    "일반 및 고속철도": 34,
    방송통신시설: 35,
    의료시설: 36,
    소각장: 37,
    배수펌프장: 38,
    환경오염방지시설: 39,
    관개수로: 40,
    복개구조물: 41,
    제철공장: 42,
    지하철: 43,
    호안: 44,
    운동시설: 45,
    "위험물 저장 및 처리시설": 46,
    파제제: 47,
    석유화학공장: 48,
    수련시설: 49,
    수문: 50,
    다목적댐: 51,
    간척매립: 52,
    묘지관련시설: 53,
    홍수전용댐: 54,
    보: 55,
    장례시설: 56,
    수처리설비시설: 57,
    위락시설: 58,
    중수도: 59,
    지하차도: 60,
    갑문: 61,
  },
  part: {
    기중기: 0,
    강관동바리: 1,
    기타: 2,
    작업발판: 3,
    롤러: 4,
    거푸집: 5,
    건물: 6,
    비계: 7,
    "항타 및 항발기": 8,
    시스템동바리: 9,
    흙막이가시설: 10,
    타워크레인: 11,
    굴착기: 12,
    안전시설물: 13,
    슬래브: 14,
    옹벽: 15,
    공구류: 16,
    자재: 17,
    굴착사면: 18,
    지게차: 19,
    덤프트럭: 20,
    철골부재: 21,
    창호: 22,
    개구부: 23,
    데크플레이트: 24,
    벽체: 25,
    천정패널: 26,
    차량: 27,
    사다리: 28,
    콘크리트펌프: 29,
    방음벽: 30,
    철근: 31,
    고소작업차: 32,
    콘크리트믹서트럭: 33,
    "기타 가시설": 34,
    건설폐기물: 35,
    띠장: 36,
    로더: 37,
    가설계단: 38,
    특수건설기계: 39,
    조적벽체: 40,
    질병: 41,
    "전주, 전선": 42,
    핀: 43,
    철망: 44,
    작업대차: 45,
    지지대: 46,
    PSC빔: 47,
    경사면: 48,
    "터널 갱구부": 49,
    절토사면: 50,
    부석: 51,
    "터널 막장면": 52,
    배관: 53,
    콘크리트살포기: 54,
    "교각 기초": 55,
    벽돌: 56,
    공기압축기: 57,
    비산물: 58,
    복공판: 59,
    "교량 바닥판": 60,
    성토사면: 61,
    버팀대: 62,
    강박스: 63,
    가설도로: 64,
    거더: 65,
    지하벽체: 66,
    지주가설재: 67,
    천공기: 68,
    낙하물방지망: 69,
    체인블럭: 70,
    담장: 71,
    브라켓: 72,
    "터널 천단부": 73,
    파이프서포트: 74,
    덕트: 75,
    엄지말뚝: 76,
    와이어로프: 77,
    현장타설말뚝: 78,
    버팀보: 79,
    불도저: 80,
    특수거푸집: 81,
    돌담: 82,
    모터그레이더: 83,
    볼트: 84,
    기성말뚝: 85,
    지반: 86,
    수평연결재: 87,
    레일: 88,
    "보강토 옹벽": 89,
    콘크리트뱃칭플랜트: 90,
    암사면: 91,
    지하매설물: 92,
    잭서포트: 93,
    어스오거: 94,
    석축: 95,
    트러스: 96,
    콘크리트피니셔: 97,
    준설선: 98,
    "교대 기초": 99,
    몰탈혼합기: 100,
    방호선반: 101,
    유증기: 102,
    파형강판: 103,
    전도방지재: 104,
    노상안정기: 105,
    위험물저장탱크: 106,
    선라이트: 107,
    슬레이트: 108,
    안전핀: 109,
    가물막이: 110,
    RCS발판: 111,
    아스팔트살포기: 112,
    벽이음: 113,
    아스팔트피니셔: 114,
    가새: 115,
    쇄석기: 116,
    주탑: 117,
  },
  bid_percent: {
    "90% 이상": 0,
    "70~74%": 1,
    "85~89%": 2,
    "75~79%": 3,
    "80~84%": 4,
    "60~64%": 5,
    "60% 미만": 6,
    "65~69%": 7,
    기타: 8,
  },
  safety_plan: {
    "대상현장(1/2종)": 0,
    "대상현장(1/2종외)": 1,
    비대상현장: 2,
    기타: 3,
  },
  process_price: {
    "500억 ~ 1,000억원 미만": 0,
    기타: 1,
    "20억 ~ 50억원 미만": 2,
    "5억 ~ 10억원 미만": 3,
    "10억 ~ 20억원 미만": 4,
    "150억 ~ 200억원 미만": 5,
    "50억 ~ 100억원 미만": 6,
    "1,000만 ~ 2,000만원 미만": 7,
    "1억 ~ 2억원 미만": 8,
    "1,000만원 미만": 9,
    "3억 ~ 5억원 미만": 10,
    "2,000만 ~ 4,000만원 미만": 11,
    "100억 ~ 150억원 미만": 12,
    "300억 ~ 500억원 미만": 13,
    "2억 ~ 3억원 미만": 14,
    "1,000억원 이상": 15,
    "200억 ~ 300억원 미만": 16,
    "4,000만 ~ 1억원 미만": 17,
  },
  total_price: {
    "1,000억원 이상": 0,
    "10억 ~ 20억원 미만": 1,
    "500억 ~ 1,000억원 미만": 2,
    "50억 ~ 100억원 미만": 3,
    "300억 ~ 500억원 미만": 4,
    "100억 ~ 150억원 미만": 5,
    "5억 ~ 10억원 미만": 6,
    "20억 ~ 50억원 미만": 7,
    "200억 ~ 300억원 미만": 8,
    "1억 ~ 2억원 미만": 9,
    "2,000만 ~ 4,000만원 미만": 10,
    "150억 ~ 200억원 미만": 11,
    "3억 ~ 5억원 미만": 12,
    "1,000만 ~ 2,000만원 미만": 13,
    "4,000만 ~ 1억원 미만": 14,
    "1,000만원 미만": 15,
    "2억 ~ 3억원 미만": 16,
    기타: 17,
  },
  man_count: {
    "100~299인": 0,
    "20~49인": 1,
    "19인 이하": 2,
    "50~99인": 3,
    "500인 이상": 4,
    "300~499인": 5,
    기타: 6,
  },
  process_percent: {
    "50~59%": 0,
    "20~29%": 1,
    "60~69%": 2,
    "90% 이상": 3,
    "70~79%": 4,
    "10~19%": 5,
    "80~89%": 6,
    "10% 미만": 7,
    "40~49%": 8,
    "30~39%": 9,
    기타: 10,
  },
  process_type: {
    토목: 0,
    기타: 1,
    건축: 2,
  },
  process_type2: {
    교량공사: 0,
    기타: 1,
    "도로 및 포장공사": 2,
    가설공사: 3,
    미장공사: 4,
    철근콘크리트공사: 5,
    전기설비공사: 6,
    관공사: 7,
    토공사: 8,
    "해체 및 철거공사": 9,
    "건축 토공사": 10,
    하천공사: 11,
    수장공사: 12,
    철골공사: 13,
    터널공사: 14,
    조적공사: 15,
    "건축물 부대공사": 16,
    도장공사: 17,
    "지붕 및 홈통공사": 18,
    기계설비공사: 19,
    "철도 및 궤도공사": 20,
    강구조물공사: 21,
    방수공사: 22,
    항만공사: 23,
    "창호 및 유리공사": 24,
    목공사: 25,
    "타일 및 돌공사": 26,
    산업설비공사: 27,
    지반개량공사: 28,
    "프리캐스트 콘크리트공사": 29,
    조경공사: 30,
    지정공사: 31,
    금속공사: 32,
    "관공사 부대공사": 33,
    말뚝공사: 34,
    지반조사: 35,
    "댐 및 제방공사": 36,
    "특수 건축물공사": 37,
    통신설비공사: 38,
  },
  incident_object2: {
    "기중기(이동식크레인 등)": 0,
    강관동바리: 1,
    기타: 2,
    작업발판: 3,
    롤러: 4,
    거푸집: 5,
    건물: 6,
    비계: 7,
    "항타 및 항발기": 8,
    시스템동바리: 9,
    흙막이가시설: 10,
    타워크레인: 11,
    굴착기: 12,
    안전시설물: 13,
    슬래브: 14,
    옹벽: 15,
    공구류: 16,
    자재: 17,
    굴착사면: 18,
    지게차: 19,
    덤프트럭: 20,
    철골부재: 21,
    창호: 22,
    개구부: 23,
    데크플레이트: 24,
    벽체: 25,
    천정패널: 26,
    차량: 27,
    사다리: 28,
    콘크리트펌프: 29,
    방음벽: 30,
    철근: 31,
    "고소작업차(고소작업대 등)": 32,
    콘크리트믹서트럭: 33,
    "기타 가시설": 34,
    건설폐기물: 35,
    띠장: 36,
    로더: 37,
    가설계단: 38,
    특수건설기계: 39,
    조적벽체: 40,
    질병: 41,
    "전주, 전선": 42,
    핀: 43,
    철망: 44,
    작업대차: 45,
    지지대: 46,
    PSC빔: 47,
    경사면: 48,
    "터널 갱구부": 49,
    절토사면: 50,
    부석: 51,
    "터널 막장면": 52,
    배관: 53,
    콘크리트살포기: 54,
    "교각 기초": 55,
    벽돌: 56,
    공기압축기: 57,
    비산물: 58,
    복공판: 59,
    "교량 바닥판": 60,
    성토사면: 61,
    버팀대: 62,
    강박스: 63,
    가설도로: 64,
    거더: 65,
    지하벽체: 66,
    지주가설재: 67,
    천공기: 68,
    낙하물방지망: 69,
    체인블럭: 70,
    담장: 71,
    브라켓: 72,
    "터널 천단부": 73,
    파이프서포트: 74,
    덕트: 75,
    엄지말뚝: 76,
    와이어로프: 77,
    현장타설말뚝: 78,
    버팀보: 79,
    불도저: 80,
    "특수거푸집(갱폼 등)": 81,
    돌담: 82,
    모터그레이더: 83,
    볼트: 84,
    기성말뚝: 85,
    지반: 86,
    수평연결재: 87,
    레일: 88,
    "보강토 옹벽": 89,
    콘크리트뱃칭플랜트: 90,
    암사면: 91,
    지하매설물: 92,
    잭서포트: 93,
    어스오거: 94,
    석축: 95,
    트러스: 96,
    콘크리트피니셔: 97,
    준설선: 98,
    "교대 기초": 99,
    몰탈혼합기: 100,
    방호선반: 101,
    유증기: 102,
    파형강판: 103,
    전도방지재: 104,
    노상안정기: 105,
    위험물저장탱크: 106,
    선라이트: 107,
    슬레이트: 108,
    안전핀: 109,
    가물막이: 110,
    RCS발판: 111,
    아스팔트살포기: 112,
    벽이음: 113,
    아스팔트피니셔: 114,
    가새: 115,
    쇄석기: 116,
    주탑: 117,
  },
};

export default data;