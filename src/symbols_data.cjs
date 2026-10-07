// Comprehensive Electrical Symbols Data (40 Industrial Symbols)
// Comparing IEC 60617 (European/EPLAN) vs NFPA 79 / ANSI Y32.2 / IEEE 315 (North American/AutoCAD Electrical)
const SYMBOLS_DATA = [
  // --- 1. 반도체 & 능동 소자 (Active & Semiconductor) ---
  {
    id: "sym-npn",
    nameKo: "NPN 트랜지스터 (BJT)",
    nameEn: "NPN Bipolar Junction Transistor",
    category: "반도체·스위칭",
    iecDesc: "원형 외곽선 내에 베이스(B), 컬렉터(C), 이미터(E)를 표시하며, 이미터의 화살표가 베이스에서 '바깥쪽(Not Pointing iN)'을 향함 (IEC 60617-5)",
    nfpaDesc: "IEEE 315 / ANSI Y32.2 규격에 따라 이미터 화살표가 외부로 방출되는 방향으로 동일 표기. 테두리 원은 선택적임",
    standardComparison: "기호 기본 형상은 양대 규격 모두 동일. 실무 PLC 싱크(Sink) 입력 인터페이스(NPN 센서)의 오픈 컬렉터 스위칭 소자로 널리 사용됨.",
    practicalUse: "PLC 싱크(Sink) 입력 모듈 연동 센서 출력단, DC 24V 소형 릴레이 구동 드라이버 트랜지스터",
    wiringCaution: "NPN 센서는 출력선(Black)이 부하를 통해 +24V에 연결되며, 동작 시 0V로 전류를 끌어당김(Sink). PNP 전용 모듈에 오결선 시 신호 미인식.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="15" y1="50" x2="40" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="40" y1="26" x2="40" y2="74" stroke="currentColor" stroke-width="4.5"/>
      <line x1="40" y1="38" x2="68" y2="22" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="22" x2="68" y2="12" stroke="currentColor" stroke-width="2.5"/>
      <line x1="40" y1="62" x2="68" y2="78" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="78" x2="68" y2="88" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="68,78 54,72 61,65" fill="currentColor"/>
      <text x="18" y="44" font-size="10" font-weight="bold" fill="currentColor">B</text>
      <text x="73" y="24" font-size="10" font-weight="bold" fill="currentColor">C</text>
      <text x="73" y="86" font-size="10" font-weight="bold" fill="currentColor">E</text>
    </svg>`
  },
  {
    id: "sym-pnp",
    nameKo: "PNP 트랜지스터 (BJT)",
    nameEn: "PNP Bipolar Junction Transistor",
    category: "반도체·스위칭",
    iecDesc: "원형 외곽선 내에 베이스(B), 컬렉터(C), 이미터(E)를 표시하며, 이미터의 화살표가 '베이스 안쪽(Pointing iN)'을 향함 (IEC 60617-5)",
    nfpaDesc: "IEEE 315 / NFPA 79 규격에 따라 이미터 단자의 화살표가 베이스 접합면을 향해 안쪽으로 표기됨",
    standardComparison: "글로벌 안전 표준(CE, IEC 61131-2, NFPA 79)에서 권장하는 소싱(Source) 입출력 소자. 지락 시 퓨즈 차단으로 기동을 방지하는 Fail-Safe 특성 보유.",
    practicalUse: "유럽계/글로벌 안전 PLC 소싱(Source) 입력 카드, 세이프티 센서 OSSD 1/2 출력, 24V 하이사이드 스위칭",
    wiringCaution: "PNP 센서는 검출 시 +24V 전위를 출력선으로 내보냄. 신호선이 프레임 0V와 쇼트(지락)되면 퓨즈가 트립되어 비의도 기동 차단.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="15" y1="50" x2="40" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="40" y1="26" x2="40" y2="74" stroke="currentColor" stroke-width="4.5"/>
      <line x1="40" y1="38" x2="68" y2="22" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="22" x2="68" y2="12" stroke="currentColor" stroke-width="2.5"/>
      <line x1="40" y1="62" x2="68" y2="78" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="78" x2="68" y2="88" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="43,63 56,69 49,76" fill="currentColor"/>
      <text x="18" y="44" font-size="10" font-weight="bold" fill="currentColor">B</text>
      <text x="73" y="24" font-size="10" font-weight="bold" fill="currentColor">C</text>
      <text x="73" y="86" font-size="10" font-weight="bold" fill="currentColor">E</text>
    </svg>`
  },
  {
    id: "sym-mosfet-n",
    nameKo: "N-채널 MOSFET (전력 소자)",
    nameEn: "N-Channel Power MOSFET",
    category: "반도체·스위칭",
    iecDesc: "게이트(G), 드레인(D), 소스(S)와 3단 분리 채널 바, 소스 기판에서 안쪽을 향하는 화살표 표기 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 / IEEE 315 규격에서 드레인-소스 간 내부 기생 바디 다이오드(Body Diode)를 함께 명시하는 경우가 많음",
    standardComparison: "전압 구동형 고속 스위칭 소자로 전원공급장치(SMPS) 및 서보 모터 PWM 인버터 브릿지 회로의 핵심 소자.",
    practicalUse: "DC-DC 컨버터 고주파 스위칭, SMPS 1차측 PWM 스위칭, 서보/BLDC 드라이버 하단 FET",
    wiringCaution: "게이트 산화막(SiO2)이 정전기(ESD)에 극히 취약하므로 취급 시 어스 접지 밴드 필수. 게이트 저항(Rg) 미부착 시 링잉 발진 소손 발생.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="15" y1="50" x2="35" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="35" y1="30" x2="35" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="28" x2="42" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="45" x2="42" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="62" x2="42" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="33" x2="68" y2="33" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="33" x2="68" y2="14" stroke="currentColor" stroke-width="2.5"/>
      <line x1="42" y1="67" x2="68" y2="67" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="67" x2="68" y2="86" stroke="currentColor" stroke-width="2.5"/>
      <line x1="42" y1="50" x2="68" y2="50" stroke="currentColor" stroke-width="2"/>
      <line x1="68" y1="50" x2="68" y2="67" stroke="currentColor" stroke-width="2"/>
      <polygon points="43,50 54,45 54,55" fill="currentColor"/>
      <text x="18" y="44" font-size="10" font-weight="bold" fill="currentColor">G</text>
      <text x="72" y="24" font-size="10" font-weight="bold" fill="currentColor">D</text>
      <text x="72" y="86" font-size="10" font-weight="bold" fill="currentColor">S</text>
    </svg>`
  },
  {
    id: "sym-mosfet-p",
    nameKo: "P-채널 MOSFET (전력 소자)",
    nameEn: "P-Channel Power MOSFET",
    category: "반도체·스위칭",
    iecDesc: "게이트(G), 드레인(D), 소스(S) 단자와 함께 기판 화살표가 바깥쪽을 향함 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 규격에 따라 화살표 외부 방출 방향 표기",
    standardComparison: "하이 사이드(High-side) 전원 스위칭 시 부트스트랩 회로 없이 음(-)의 게이트 전압으로 직접 도통 제어 가능.",
    practicalUse: "전자기판 역극성 방지 하이사이드 스위칭, 직류 부하 전원 공급 온/오프 제어",
    wiringCaution: "소스 단자가 양(+)극 전원에 결선되며, 게이트 전압이 소스보다 낮아야 ON 됨. 내압 및 Rds(on) 저항이 N채널 대비 큼.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="15" y1="50" x2="35" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="35" y1="30" x2="35" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="28" x2="42" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="45" x2="42" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="62" x2="42" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="33" x2="68" y2="33" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="33" x2="68" y2="14" stroke="currentColor" stroke-width="2.5"/>
      <line x1="42" y1="67" x2="68" y2="67" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="67" x2="68" y2="86" stroke="currentColor" stroke-width="2.5"/>
      <line x1="42" y1="50" x2="68" y2="50" stroke="currentColor" stroke-width="2"/>
      <line x1="68" y1="50" x2="68" y2="67" stroke="currentColor" stroke-width="2"/>
      <polygon points="58,50 47,45 47,55" fill="currentColor"/>
      <text x="18" y="44" font-size="10" font-weight="bold" fill="currentColor">G</text>
      <text x="72" y="24" font-size="10" font-weight="bold" fill="currentColor">S</text>
      <text x="72" y="86" font-size="10" font-weight="bold" fill="currentColor">D</text>
    </svg>`
  },
  {
    id: "sym-igbt",
    nameKo: "IGBT (절연 게이트 양극 트랜지스터)",
    nameEn: "IGBT (Insulated Gate Bipolar Transistor)",
    category: "반도체·스위칭",
    iecDesc: "MOSFET의 전압 구동형 게이트(G) 입력과 BJT의 고전력 컬렉터(C)-이미터(E) 출력이 결합된 심볼 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 규격에서도 게이트 절연 바와 이미터 화살표를 조합하여 고전압 인버터 스위치로 공통 표기",
    standardComparison: "모터 드라이브 인버터의 표준 전력 스위치. 역병렬 프리휠링 다이오드(FWD)와 한 패키지로 내장되는 경우가 기본임.",
    practicalUse: "3상 가변 주파수 인버터(VFD), 서보 앰프 전력단, 고주파 유도가열기, 대용량 UPS 인버터 브릿지",
    wiringCaution: "모터 인덕턴스 역기전력 흡수를 위한 FWD 다이오드가 필수. 게이트 구동 전압 미달 시 불포화 영역 진입으로 소자 순시 열폭주 파괴.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="15" y1="50" x2="36" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="36" y1="28" x2="36" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="43" y1="26" x2="43" y2="74" stroke="currentColor" stroke-width="4.5"/>
      <line x1="43" y1="36" x2="68" y2="22" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="22" x2="68" y2="12" stroke="currentColor" stroke-width="2.5"/>
      <line x1="43" y1="64" x2="68" y2="78" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="78" x2="68" y2="88" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="68,78 54,72 61,65" fill="currentColor"/>
      <text x="18" y="44" font-size="10" font-weight="bold" fill="currentColor">G</text>
      <text x="73" y="24" font-size="10" font-weight="bold" fill="currentColor">C</text>
      <text x="73" y="86" font-size="10" font-weight="bold" fill="currentColor">E</text>
    </svg>`
  },
  {
    id: "sym-scr",
    nameKo: "사이리스터 / SCR",
    nameEn: "SCR (Silicon Controlled Rectifier / Thyristor)",
    category: "반도체·스위칭",
    iecDesc: "다이오드 심볼의 캐소드 근처에 게이트(G) 제어 단자가 인출된 형상 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 / IEEE 315 규격 동일. 애노드(A), 캐소드(K), 게이트(G) 3단자",
    standardComparison: "게이트 펄스로 턴온(ON)된 후 전류가 유지전류(Holding Current) 이하로 떨어지거나 역바이어스 될 때까지 도통 상태 유지.",
    practicalUse: "대용량 히터 전력제어기(SCR 유닛), DC 모터 속도제어 정류기, 전력 위상제어 릴레이",
    wiringCaution: "직류(DC) 회로에서 턴온되면 게이트 신호를 꺼도 스스로 꺼지지 않음(전원 차단 필요). 방열판 온도 상승 시 열폭주 주의.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="50" y1="12" x2="50" y2="35" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="28,35 72,35 50,65" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="28" y1="65" x2="72" y2="65" stroke="currentColor" stroke-width="3.5"/>
      <line x1="50" y1="65" x2="50" y2="88" stroke="currentColor" stroke-width="2.5"/>
      <line x1="50" y1="65" x2="24" y2="80" stroke="currentColor" stroke-width="2.5"/>
      <text x="56" y="24" font-size="10" font-weight="bold" fill="currentColor">A</text>
      <text x="56" y="86" font-size="10" font-weight="bold" fill="currentColor">K</text>
      <text x="16" y="78" font-size="10" font-weight="bold" fill="currentColor">G</text>
    </svg>`
  },
  {
    id: "sym-triac",
    nameKo: "트라이액 (TRIAC / 양방향 사이리스터)",
    nameEn: "TRIAC (Bidirectional Triode Thyristor)",
    category: "반도체·스위칭",
    iecDesc: "두 개의 역병렬 다이오드 삼각형이 겹쳐지고 게이트(G)가 결합된 심볼 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 규격 동일. MT1, MT2(또는 A1, A2)와 G 단자로 구성",
    standardComparison: "교류(AC) 양방향 전류를 게이트 펄스로 제어하는 무접점 교류 스위칭 소자. 전자식 SSR(Solid State Relay)의 내부 핵심 소자.",
    practicalUse: "단상 AC 히터 전력 조절기, AC 팬 모터 속도 제어, 전자식 반도체 릴레이(SSR) 출력단",
    wiringCaution: "유도성(L) 부하 구동 시 전압-전류 위상차로 인해 dV/dt 턴오프 실패 발생. 스너버(RC Snubber) 회로 필수 병렬 연결.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="50" y1="12" x2="50" y2="35" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="34,35 66,35 50,55" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="50,45 34,65 66,65" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="30" y1="35" x2="70" y2="35" stroke="currentColor" stroke-width="2.5"/>
      <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" stroke-width="2.5"/>
      <line x1="50" y1="65" x2="50" y2="88" stroke="currentColor" stroke-width="2.5"/>
      <line x1="66" y1="65" x2="80" y2="80" stroke="currentColor" stroke-width="2.5"/>
      <text x="56" y="24" font-size="10" font-weight="bold" fill="currentColor">MT2</text>
      <text x="56" y="86" font-size="10" font-weight="bold" fill="currentColor">MT1</text>
      <text x="82" y="76" font-size="10" font-weight="bold" fill="currentColor">G</text>
    </svg>`
  },
  {
    id: "sym-optocoupler",
    nameKo: "포토커플러 / 광절연기",
    nameEn: "Optocoupler / Photocoupler",
    category: "반도체·스위칭",
    iecDesc: "내부 발광 LED와 수광 포토트랜지스터가 파선 또는 화살표로 광학 결합된 직사각형 박스 심볼 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 규격에서 LED 발광 기호와 포토트랜지스터를 격리 대향 배치하여 절연 배리어 명시",
    standardComparison: "1차측 제어 전압과 2차측 부하 전압 간 수천 볼트 갈바닉 절연(Galvanic Isolation)을 제공하여 노이즈 침입 원천 차단.",
    practicalUse: "PLC 디지털 I/O 모듈 절연 인터페이스, 인버터 게이트 드라이버 신호 절연, 통신 라인 절연",
    wiringCaution: "1차측 LED 구동 전류(If)를 적정 범위(5~15mA)로 유지해야 하며, 장기 사용 시 전류 전달비(CTR) 경년 열화 고려 설계 필요.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <rect x="18" y="20" width="64" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- LED side -->
      <line x1="8" y1="36" x2="28" y2="36" stroke="currentColor" stroke-width="2"/>
      <polygon points="28,26 28,46 42,36" fill="currentColor"/>
      <line x1="42" y1="26" x2="42" y2="46" stroke="currentColor" stroke-width="2"/>
      <line x1="42" y1="36" x2="28" y2="64" stroke="currentColor" stroke-width="0"/>
      <line x1="8" y1="64" x2="38" y2="64" stroke="currentColor" stroke-width="2"/>
      <line x1="42" y1="36" x2="38" y2="64" stroke="currentColor" stroke-width="2"/>
      <!-- light arrows -->
      <line x1="43" y1="46" x2="55" y2="52" stroke="currentColor" stroke-width="1.5"/>
      <polygon points="55,52 49,49 52,46" fill="currentColor"/>
      <!-- Transistor side -->
      <line x1="60" y1="30" x2="60" y2="70" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="40" x2="74" y2="30" stroke="currentColor" stroke-width="2"/>
      <line x1="74" y1="30" x2="92" y2="30" stroke="currentColor" stroke-width="2"/>
      <line x1="60" y1="60" x2="74" y2="70" stroke="currentColor" stroke-width="2"/>
      <line x1="74" y1="70" x2="92" y2="70" stroke="currentColor" stroke-width="2"/>
      <polygon points="74,70 65,66 69,61" fill="currentColor"/>
    </svg>`
  },

  // --- 2. 다이오드류 (Diodes) ---
  {
    id: "sym-diode",
    nameKo: "다이오드 (정류 다이오드)",
    nameEn: "Diode (Rectifier Diode)",
    category: "기초 전장",
    iecDesc: "정삼각형 꼭짓점에 수직 차단선(Cathode)이 접하는 형태로, 삼각형 화살표 방향이 애노드(A)에서 캐소드(K)로 순방향 전류 흐름을 나타냄 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 / NFPA 79 규격에서도 동일하게 삼각형과 수직선의 조합으로 표기되며 단자 기호로 (+) A, (-) K 표기 병기",
    standardComparison: "IEC와 NFPA/ANSI 기호 형태가 완전히 일치함. 릴레이 코일의 역기전력 방전용 플라이백(Freewheeling) 다이오드로 빈번히 사용.",
    practicalUse: "DC 솔레노이드 밸브/릴레이 코일 역기전력 흡수, 전원 역접속 방지(Reverse Polarity Protection), 정류 회로",
    wiringCaution: "DC 릴레이 코일에 플라이백 다이오드 병렬 설치 시 캐소드(줄무늬 띠)를 반드시 코일의 +24V 측에, 애노드를 0V 측에 연결해야 함. 역결선 시 코일 ON 순간 전원 쇼트 단락 발생.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="12" y1="50" x2="38" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="38,30 38,70 68,50" fill="currentColor"/>
      <line x1="68" y1="26" x2="68" y2="74" stroke="currentColor" stroke-width="4.5"/>
      <line x1="68" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <text x="24" y="42" font-size="10" font-weight="bold" fill="currentColor">A(+)</text>
      <text x="72" y="42" font-size="10" font-weight="bold" fill="currentColor">K(-)</text>
    </svg>`
  },
  {
    id: "sym-schottky",
    nameKo: "쇼트키 다이오드 (고속 저전압강하)",
    nameEn: "Schottky Barrier Diode",
    category: "기초 전장",
    iecDesc: "캐소드 수직선 양 끝에 'S'자 형태의 꺾임 날개가 부가된 심볼 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 규격 동일. 일반 실리콘 PN 접합 다이오드(0.7V) 대비 순방향 전압강하(Vf 0.2~0.3V)가 낮고 역회복 시간이 극히 짧음",
    standardComparison: "양대 규격 동일. 고주파 스위칭 전원(SMPS) 2차측 정류 및 OR-ing 이중화 전원 공급 다이오드로 표준 사용.",
    practicalUse: "SMPS 출력단 정류, 이중화 24V 전원 다이오드 오어링(ORing), 역전류 방지",
    wiringCaution: "일반 정류 다이오드보다 역방향 누설 전류(Ir)가 크고 고온에서 증가하므로 방열 설계와 역내압 마진(최소 2배) 검토 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="12" y1="50" x2="38" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="38,30 38,70 68,50" fill="currentColor"/>
      <!-- S-shaped cathode -->
      <line x1="68" y1="30" x2="68" y2="70" stroke="currentColor" stroke-width="3.5"/>
      <line x1="68" y1="30" x2="60" y2="30" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="30" x2="60" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="68" y1="70" x2="76" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="70" x2="76" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="68" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <text x="24" y="42" font-size="10" font-weight="bold" fill="currentColor">A</text>
      <text x="75" y="42" font-size="10" font-weight="bold" fill="currentColor">K</text>
    </svg>`
  },
  {
    id: "sym-zener",
    nameKo: "제너 다이오드 (정전압 다이오드)",
    nameEn: "Zener Diode",
    category: "차단기·보호",
    iecDesc: "캐소드 수직선 양 끝이 한쪽은 꺾이고 반대쪽은 꺾인 꺾은선(Z형) 형태 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 규격 동일. 역방향 항복 전압(Zener Breakdown Voltage)에서 일정한 전압을 유지하는 특성",
    standardComparison: "IEC와 NFPA/ANSI 모두 동일한 꺾임 캐소드 기호 사용. 전압 레퍼런스 및 과전압 클램핑 보호용으로 적용.",
    practicalUse: "아날로그 센서 신호선 과전압 보호, 전원 제어 전압 레퍼런스, 게이트 과전압 억제",
    wiringCaution: "역방향으로 바이어스되어 정전압을 유지하므로, 전류 제한 저항을 직렬로 배치하지 않으면 과전류로 즉시 열화 파손됨.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="12" y1="50" x2="38" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="38,30 38,70 68,50" fill="currentColor"/>
      <line x1="68" y1="30" x2="68" y2="70" stroke="currentColor" stroke-width="3.5"/>
      <line x1="68" y1="30" x2="60" y2="36" stroke="currentColor" stroke-width="3"/>
      <line x1="68" y1="70" x2="76" y2="64" stroke="currentColor" stroke-width="3"/>
      <line x1="68" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <text x="24" y="42" font-size="10" font-weight="bold" fill="currentColor">A</text>
      <text x="75" y="42" font-size="10" font-weight="bold" fill="currentColor">K</text>
    </svg>`
  },
  {
    id: "sym-led",
    nameKo: "발광 다이오드 (LED)",
    nameEn: "Light Emitting Diode (LED)",
    category: "기초 전장",
    iecDesc: "다이오드 기호 몸체 바깥쪽을 향해 나가는 두 개의 대각선 화살표(빛 방출) 표기 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 / NFPA 79 규격 동일. 표시등 및 조광형 버튼의 광원으로 표기",
    standardComparison: "양대 규격 동일. 제어반 조작반(OP Panel)의 인디케이터 램프 및 센서 동작 표시등의 기본 소자.",
    practicalUse: "제어반 상태 표시등, 센서 동작/전원 인디케이터, 광통신 발광 소자",
    wiringCaution: "순방향 전압 강하(적색 약 1.8~2.0V, 백색/청색 약 3.0~3.3V)를 고려한 직렬 전류 제한 저항 계산(R = (Vcc - Vf) / If) 필수. 역전압 내성(Vr)이 낮아 역결선 시 소손 주의.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="12" y1="50" x2="38" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="38,30 38,70 68,50" fill="currentColor"/>
      <line x1="68" y1="26" x2="68" y2="74" stroke="currentColor" stroke-width="4.5"/>
      <line x1="68" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <!-- light arrows -->
      <line x1="52" y1="26" x2="66" y2="12" stroke="currentColor" stroke-width="2"/>
      <polygon points="66,12 59,16 63,20" fill="currentColor"/>
      <line x1="64" y1="28" x2="78" y2="14" stroke="currentColor" stroke-width="2"/>
      <polygon points="78,14 71,18 75,22" fill="currentColor"/>
      <text x="24" y="42" font-size="10" font-weight="bold" fill="currentColor">A(+)</text>
      <text x="72" y="42" font-size="10" font-weight="bold" fill="currentColor">K(-)</text>
    </svg>`
  },
  {
    id: "sym-diode-bridge",
    nameKo: "브릿지 다이오드 (전파 정류기)",
    nameEn: "Bridge Rectifier",
    category: "전원",
    iecDesc: "마름모꼴(다이아몬드) 브릿지 형태 내부에 4개의 다이오드가 순환 결선된 심볼 (IEC 60617-5)",
    nfpaDesc: "ANSI Y32.2 규격에서 4개의 다이오드 브릿지 또는 마름모 내부에 AC(~, ~) 단자와 DC(+,-) 단자 명시",
    standardComparison: "교류(AC) 전원을 맥류 직류(DC)로 전파 정류하는 단상 브릿지 정류 블록. SMPS 및 브레이크 정류기 핵심 소자.",
    practicalUse: "모터 전자 브레이크 DC 전원 정류기, 선형 파워서플라이 정류단, 계측 회로 절대값 변환",
    wiringCaution: "AC 입력 2단자와 DC 출력 (+, -) 2단자의 결선 혼동 금지. AC 라인 서지 보호를 위한 바리스터(MOV) 전단 병렬 설치 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="15" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="85" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="50" y1="15" x2="50" y2="25" stroke="currentColor" stroke-width="2.5"/>
      <line x1="50" y1="85" x2="50" y2="75" stroke="currentColor" stroke-width="2.5"/>
      <text x="8" y="54" font-size="11" font-weight="bold" fill="currentColor">~</text>
      <text x="87" y="54" font-size="11" font-weight="bold" fill="currentColor">~</text>
      <text x="46" y="14" font-size="11" font-weight="bold" fill="currentColor">+</text>
      <text x="47" y="96" font-size="12" font-weight="bold" fill="currentColor">-</text>
    </svg>`
  },

  // --- 3. 수동 소자류 (Passive Components) ---
  {
    id: "sym-resistor",
    nameKo: "저항기 (고정 저항기)",
    nameEn: "Resistor (Fixed Resistor)",
    category: "ECAD·EPLAN·CAD",
    iecDesc: "가로가 긴 직사각형 박스(Rectangle Box) 형태로 표기 (IEC 60617-4)",
    nfpaDesc: "지그재그 톱니 모양(Zig-Zag / 3~5개 산)으로 표기 (IEEE 315 / ANSI Y32.2 / NFPA 79)",
    standardComparison: "전기 도면에서 가장 극명한 차이를 보이는 대표 심볼. IEC(유럽/EPLAN)는 직사각형 박스, NFPA/ANSI(북미/AutoCAD Electrical)는 지그재그 선형.",
    practicalUse: "통신 종단 저항(CAN/RS485 120Ω), LED 전류 제한, 브레이크 방전 저항, 분압 회로",
    wiringCaution: "저항값(Ω)뿐만 아니라 허용 전력 용량(Watt, P = I²R) 검토 필수. 재생 저항은 고열이 발생하므로 제어반 상단 환기부 이격 배치.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- IEC Box top half -->
      <line x1="10" y1="32" x2="25" y2="32" stroke="currentColor" stroke-width="2.5"/>
      <rect x="25" y="24" width="50" height="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="75" y1="32" x2="90" y2="32" stroke="currentColor" stroke-width="2.5"/>
      <text x="35" y="18" font-size="9" font-weight="bold" fill="currentColor">IEC (Box)</text>
      <!-- NFPA Zig-zag bottom half -->
      <line x1="10" y1="72" x2="22" y2="72" stroke="currentColor" stroke-width="2.5"/>
      <polyline points="22,72 28,62 38,82 48,62 58,82 68,62 74,82 78,72" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="78" y1="72" x2="90" y2="72" stroke="currentColor" stroke-width="2.5"/>
      <text x="31" y="58" font-size="9" font-weight="bold" fill="currentColor">NFPA (Zigzag)</text>
    </svg>`
  },
  {
    id: "sym-potentiometer",
    nameKo: "가변 저항기 / 전위차계",
    nameEn: "Potentiometer / Variable Resistor",
    category: "ECAD·EPLAN·CAD",
    iecDesc: "직사각형 박스 측면 또는 대각선에 가변 조정 화살표(Wiper)가 접하는 심볼 (IEC 60617-4)",
    nfpaDesc: "지그재그 저항선 중앙에 화살표 와이퍼 단자가 접촉하는 3단자 심볼 (ANSI Y32.2)",
    standardComparison: "IEC는 박스에 화살표, NFPA는 지그재그에 화살표. 속도 볼륨이나 아날로그 미세 조정용 3단자 가변기.",
    practicalUse: "인버터 주파수 수동 설정 볼륨(0~10V), 아날로그 센서 영점 오프셋 조정 볼륨",
    wiringCaution: "양단에 +10V와 0V를 결선하고 와이퍼 단자에서 아날로그 입력 신호를 인출함. 전원과 와이퍼 단자 오결선 시 볼륨 회전 극단에서 단락 쇼트 발생.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <rect x="25" y="42" width="50" height="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <!-- Wiper -->
      <line x1="50" y1="82" x2="50" y2="60" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="50,58 45,67 55,67" fill="currentColor"/>
      <text x="54" y="86" font-size="10" font-weight="bold" fill="currentColor">Wiper</text>
    </svg>`
  },
  {
    id: "sym-varistor",
    nameKo: "바리스터 (MOV / 서지 흡수 소자)",
    nameEn: "Varistor (Metal Oxide Varistor / MOV)",
    category: "차단기·보호",
    iecDesc: "직사각형 저항 박스를 관통하는 사선과 하단 꺾임 바 표기 (IEC 60617-4)",
    nfpaDesc: "ANSI Y32.2 규격에서 전압 의존형 비선형 저항기(VDR) 심볼로 동일 표기",
    standardComparison: "평상시에는 고절연 상태를 유지하다가 서지 과전압 유입 시 저항이 급감하여 대지 또는 반대 극으로 서지를 바이패스 방전함.",
    practicalUse: "AC 전원 입력단 낙뢰 서지 보호(SPD 내부 소자), 솔레노이드/모터 접점 개폐 서지 흡수",
    wiringCaution: "반복적인 서지 흡수로 열화되면 누설전류 증가로 열폭주(Thermal Runaway) 소손 가능. 온도 퓨즈(Thermal Fuse)와 직렬 연동 설계 필요.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <rect x="25" y="42" width="50" height="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <!-- Non-linear slash line -->
      <line x1="28" y1="74" x2="38" y2="74" stroke="currentColor" stroke-width="2.5"/>
      <line x1="38" y1="74" x2="68" y2="26" stroke="currentColor" stroke-width="2.5"/>
      <text x="32" y="32" font-size="9" font-weight="bold" fill="currentColor">MOV</text>
    </svg>`
  },
  {
    id: "sym-thermistor",
    nameKo: "서미스터 (온도 감지 저항 / PTC·NTC)",
    nameEn: "Thermistor (PTC / NTC)",
    category: "히터·온도",
    iecDesc: "저항 박스 관통 사선에 온도 기호(+t° 또는 -t°)가 부기된 심볼 (IEC 60617-4)",
    nfpaDesc: "ANSI Y32.2 규격 동일. 온도 계수에 따라 정특성(PTC) 및 부특성(NTC) 명시",
    standardComparison: "PTC는 온도 상승 시 저항이 급증하여 모터 권선 과열 보호 및 돌입전류 억제에 사용되며, NTC는 온도 측정에 사용됨.",
    practicalUse: "모터 권선 과열 감지(PTC 센서), SMPS 전원 투입 시 초기 돌입전류 제한(NTC)",
    wiringCaution: "모터 내장 PTC 서미스터는 전용 모터 보호 계전기(Thermistor Relay)에 결선해야 하며 일반 디지털 입력에 직접 연결 불가.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <rect x="25" y="42" width="50" height="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="30" y1="72" x2="40" y2="72" stroke="currentColor" stroke-width="2.5"/>
      <line x1="40" y1="72" x2="70" y2="28" stroke="currentColor" stroke-width="2.5"/>
      <text x="56" y="24" font-size="10" font-weight="bold" fill="currentColor">+t°</text>
    </svg>`
  },
  {
    id: "sym-capacitor",
    nameKo: "커패시터 / 콘덴서 (무극성)",
    nameEn: "Capacitor (Non-Polarized)",
    category: "기초 전장",
    iecDesc: "동일한 간격의 두 평행 수직 직선 플레이트 표기 (IEC 60617-4)",
    nfpaDesc: "ANSI Y32.2 / IEEE 315 규격에서는 한쪽 직선, 다른 한쪽을 곡선 호(Arc)로 표기하여 외측 전극 구분",
    standardComparison: "IEC는 완벽한 2개 평행선, NFPA/ANSI는 한쪽 곡선 플레이트로 도면 작성 시 명확히 구별됨.",
    practicalUse: "AC 노이즈 감쇄용 X/Y 커패시터, 스너버(Snubber) 회로, 고주파 바이패스 필터",
    wiringCaution: "AC 전원선 간에는 X-커패시터(Line-to-Line), 선간-접지 간에는 안전 인증을 받은 Y-커패시터(Line-to-Ground)를 반드시 정합 사용.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="12" y1="50" x2="44" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="44" y1="28" x2="44" y2="72" stroke="currentColor" stroke-width="3.5"/>
      <line x1="56" y1="28" x2="56" y2="72" stroke="currentColor" stroke-width="3.5"/>
      <line x1="56" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <text x="38" y="20" font-size="10" font-weight="bold" fill="currentColor">C</text>
    </svg>`
  },
  {
    id: "sym-capacitor-polar",
    nameKo: "전해 커패시터 (유극성 콘덴서)",
    nameEn: "Polarized Electrolytic Capacitor",
    category: "기초 전장",
    iecDesc: "평행 플레이트 중 양극(+) 플레이트 옆에 '+' 부호를 명시하거나 음극 플레이트를 채움 블록으로 표기 (IEC 60617-4)",
    nfpaDesc: "ANSI Y32.2 규격에서 평평한 플레이트가 (+), 곡선 플레이트가 (-) 단자이며 '+' 극성 명시",
    standardComparison: "극성 유무가 절대적인 소자로, 양대 규격 모두 (+) 기호나 형상 차이로 극성을 엄격히 구별 표기함.",
    practicalUse: "SMPS 2차측 DC 24V 리플 평활(Smoothing), 대용량 인버터 DC 링크 버스 커패시터 뱅크",
    wiringCaution: "극성 역결선 시 내부 전해액 비등으로 캔 폭발 및 화재 발생. 내전압(Vdc) 마진을 작동 전압의 1.3~1.5배 이상 확보 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="12" y1="50" x2="44" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="44" y1="28" x2="44" y2="72" stroke="currentColor" stroke-width="3.5"/>
      <!-- curved negative plate -->
      <path d="M 58 28 Q 52 50 58 72" fill="none" stroke="currentColor" stroke-width="3.5"/>
      <line x1="55" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <text x="32" y="38" font-size="12" font-weight="bold" fill="currentColor">+</text>
      <text x="64" y="38" font-size="14" font-weight="bold" fill="currentColor">-</text>
    </svg>`
  },
  {
    id: "sym-inductor",
    nameKo: "인덕터 / 코일 / 리액터",
    nameEn: "Inductor / Reactor Coil",
    category: "EMC·접지",
    iecDesc: "연속된 반원 루프(Loop) 호 3~4개로 표기 (IEC 60617-4)",
    nfpaDesc: "ANSI Y32.2 / IEEE 315 규격 동일 형상. 철심 코어 유무에 따라 상단 실선/점선 병기",
    standardComparison: "급격한 전류 변화를 억제하는 유도성 소자. AC 라인 리액터 및 DC 초크 코일로 전장반에 다수 적용.",
    practicalUse: "인버터 입력측 AC 라인 리액터(고조파 저감), SMPS 출력 LC 노이즈 필터, 통신 공통모드 초크(CMC)",
    wiringCaution: "대용량 AC 리액터는 자속 누설로 주변 신호선에 전자기 유도 노이즈를 유발하므로 센서/통신 케이블과 200mm 이상 이격 배치.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="10" y1="55" x2="20" y2="55" stroke="currentColor" stroke-width="2.5"/>
      <path d="M 20 55 A 10 10 0 0 1 40 55 A 10 10 0 0 1 60 55 A 10 10 0 0 1 80 55" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="55" x2="90" y2="55" stroke="currentColor" stroke-width="2.5"/>
      <!-- iron core lines -->
      <line x1="22" y1="36" x2="78" y2="36" stroke="currentColor" stroke-width="2"/>
      <line x1="22" y1="31" x2="78" y2="31" stroke="currentColor" stroke-width="2"/>
      <text x="45" y="24" font-size="10" font-weight="bold" fill="currentColor">L</text>
    </svg>`
  },

  // --- 4. 변압기류 (Transformers) ---
  {
    id: "sym-transformer",
    nameKo: "제어용 변압기 (CPT / 단상)",
    nameEn: "Control Power Transformer (CPT)",
    category: "전원",
    iecDesc: "두 개의 서로 겹치는(교차하는) 원 2개로 표기 (IEC 60617-6)",
    nfpaDesc: "서로 마주보는 2개의 인덕터 코일과 중앙의 철심 평행선 2개로 표기 (IEEE 315 / ANSI Y32.2)",
    standardComparison: "IEC는 겹치는 두 원(Circles), NFPA/ANSI는 마주보는 코일선(Coils). 북미 규격 제어반(UL 508A)에서 제어 전원 강압용 CPT 필수 지정.",
    practicalUse: "3상 480V/380V 주전원에서 단상 120V/220V 제어 전원으로 전압 강압 및 절연",
    wiringCaution: "UL 508A에 따라 CPT 1차측에 한류형 퓨즈(Class CC) 필수 설치, 2차측 접지 X2(중성선) 단자를 PE에 본딩하거나 절연 감시 장치 구성 필요.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- IEC representation left -->
      <circle cx="36" cy="40" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="36" cy="60" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="36" y1="12" x2="36" y2="24" stroke="currentColor" stroke-width="2.5"/>
      <line x1="36" y1="76" x2="36" y2="88" stroke="currentColor" stroke-width="2.5"/>
      <text x="22" y="10" font-size="8" font-weight="bold" fill="currentColor">IEC (Circles)</text>
      <!-- NFPA representation right -->
      <path d="M 68 24 A 6 6 0 0 1 68 36 A 6 6 0 0 1 68 48 A 6 6 0 0 1 68 60 A 6 6 0 0 1 68 72" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M 80 24 A 6 6 0 0 0 80 36 A 6 6 0 0 0 80 48 A 6 6 0 0 0 80 60 A 6 6 0 0 0 80 72" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="74" y1="24" x2="74" y2="72" stroke="currentColor" stroke-width="1.5"/>
      <text x="62" y="10" font-size="8" font-weight="bold" fill="currentColor">NFPA (Coils)</text>
    </svg>`
  },
  {
    id: "sym-transformer-3p",
    nameKo: "3상 변압기 (Y-Δ / Δ-Y 결선)",
    nameEn: "3-Phase Power Transformer",
    category: "전원",
    iecDesc: "3개의 교차 원 또는 3상 각 상 코일과 결선 기호(Y, Δ)를 사각 박스 내에 표기 (IEC 60617-6)",
    nfpaDesc: "ANSI Y32.2 규격에서 1차측 3개 코일과 2차측 3개 코일 및 Wye/Delta 벡터 그룹 기호 병기",
    standardComparison: "글로벌 공장 메인 수전 변압기 및 고조파 저감용 위상변위 변압기. 2차측 중성점(Neutral) 접지 시공 필수.",
    practicalUse: "수전 3상 440V/380V에서 구동 전원 3상 220V 또는 200V 강압 공급",
    wiringCaution: "1차-2차 간 위상차(30도 위상 지연 등 Dyn11)가 발생하므로 병렬 운전 시 극성과 벡터 그룹 일치 필수 검토.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <circle cx="50" cy="38" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="50" cy="62" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="32" y1="24" x2="16" y2="14" stroke="currentColor" stroke-width="2"/>
      <line x1="50" y1="20" x2="50" y2="8" stroke="currentColor" stroke-width="2"/>
      <line x1="68" y1="24" x2="84" y2="14" stroke="currentColor" stroke-width="2"/>
      <line x1="32" y1="76" x2="16" y2="86" stroke="currentColor" stroke-width="2"/>
      <line x1="50" y1="80" x2="50" y2="92" stroke="currentColor" stroke-width="2"/>
      <line x1="68" y1="76" x2="84" y2="86" stroke="currentColor" stroke-width="2"/>
      <text x="44" y="42" font-size="12" font-weight="bold" fill="currentColor">Δ</text>
      <text x="45" y="66" font-size="12" font-weight="bold" fill="currentColor">Y</text>
    </svg>`
  },

  // --- 5. 차단기 및 보호 기기류 (Breakers & Protection) ---
  {
    id: "sym-mccb",
    nameKo: "배선차단기 (MCCB)",
    nameEn: "Molded Case Circuit Breaker (MCCB)",
    category: "차단기·보호",
    iecDesc: "주접점 개폐 기호에 열동 트립(과부하 직사각형 바)과 전자 트립(단락 순시 화살표) 기호가 부가된 3극 심볼 (IEC 60617-7)",
    nfpaDesc: "ANSI Y32.2 규격에서 스위치 접점에 반원형 과전류 트립 기호와 수동 조작 핸들 기호 결합",
    standardComparison: "배선 및 전력 기기의 과부하 및 단락 보호 차단기. 제어반 상류 단락정격(SCCR)을 만족하는 핵심 차단 장치.",
    practicalUse: "제어반 메인 인입 전원 차단기, 모터 분기 회로 보호, 대용량 SMPS 1차측 전원 보호",
    wiringCaution: "차단기 용량(AT/AF)뿐만 아니라 설치 장소의 가용 단락 전류(AIC 정격)를 반드시 상회해야 함. 3극 상 시퀀스(L1/L2/L3) 정합 결선.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="50" y1="10" x2="50" y2="28" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="50" cy="30" r="3" fill="currentColor"/>
      <!-- blade disconnected -->
      <line x1="50" y1="30" x2="66" y2="58" stroke="currentColor" stroke-width="3"/>
      <circle cx="50" cy="70" r="3" fill="currentColor"/>
      <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" stroke-width="2.5"/>
      <!-- thermal / magnetic box -->
      <rect x="36" y="44" width="12" height="18" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="42" y1="44" x2="42" y2="62" stroke="currentColor" stroke-width="2"/>
      <text x="56" y="24" font-size="9" font-weight="bold" fill="currentColor">MCCB</text>
    </svg>`
  },
  {
    id: "sym-elcb",
    nameKo: "누전차단기 (ELCB / RCD / GFCI)",
    nameEn: "Earth Leakage Circuit Breaker / RCD / GFCI",
    category: "차단기·보호",
    iecDesc: "MCCB 심볼에 영상변류기(ZCT, 타원형 링)와 누설전류 감도(예: IΔn 30mA) 트립 기구 결합 표기 (IEC 60617-7)",
    nfpaDesc: "ANSI/NFPA 규격에서 Ground Fault Circuit Interrupter(GFCI)로 명시되며 잔류전류 검출 차단기 표기",
    standardComparison: "인체 감전 보호(30mA 0.03초 고속형) 및 지락 화재 방지(100~500mA)를 위한 필수 보호기.",
    practicalUse: "수분 접촉 위험 설비(습식 공정), 외함 인체 접촉 장비 전원, 단상 콘센트 전원 라인",
    wiringCaution: "중성선(N상)이 부하를 통과하지 않고 접지와 혼식되거나 중성선 결선 누락 시 정상 전류를 누전으로 오인하여 오트립(False Trip) 발생.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="50" y1="10" x2="50" y2="28" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="50" cy="30" r="3" fill="currentColor"/>
      <line x1="50" y1="30" x2="66" y2="58" stroke="currentColor" stroke-width="3"/>
      <circle cx="50" cy="70" r="3" fill="currentColor"/>
      <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" stroke-width="2.5"/>
      <!-- ZCT oval loop -->
      <ellipse cx="50" cy="48" rx="22" ry="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/>
      <text x="16" y="52" font-size="8" font-weight="bold" fill="currentColor">IΔn</text>
      <text x="56" y="24" font-size="9" font-weight="bold" fill="currentColor">ELCB</text>
    </svg>`
  },
  {
    id: "sym-mpcb",
    nameKo: "모터보호단자대 (MPCB / MMS)",
    nameEn: "Manual Motor Starter (MMS / MPCB)",
    category: "차단기·보호",
    iecDesc: "차단기(과전류/단락)와 과부하 계전기(열동 트립), 수동 모터 조작 스위치가 단일 기구로 통합된 3상 심볼 (IEC 60617-7)",
    nfpaDesc: "UL 508 Type E / Type F Self-Protected Combination Motor Controller 심볼",
    standardComparison: "유럽 장비(IEC)에서 모터 분기 회로에 MCCB와 TOR 대신 단일 모터보호단자대(MMS)를 사용하여 판넬 공간 대폭 절감.",
    practicalUse: "3상 펌프/팬/컨베이어 모터 분기 보호, 마그네트 스위치(MC) 전단 직결 모터 스타터",
    wiringCaution: "모터 명판 정격전류(FLA)에 맞춰 전면 다이얼 전류 정정을 정확히 세팅해야 모터 소손 방지 가능.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <rect x="25" y="20" width="50" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- manual knob -->
      <circle cx="50" cy="38" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="50" y1="28" x2="50" y2="48" stroke="currentColor" stroke-width="3"/>
      <!-- thermal & magnetic symbol -->
      <path d="M 40 64 L 46 54 L 54 54 L 60 64" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="32" y="74" font-size="9" font-weight="bold" fill="currentColor">MMS / MPCB</text>
    </svg>`
  },
  {
    id: "sym-tor",
    nameKo: "열동형 과부하 계전기 (TOR / EOCR)",
    nameEn: "Thermal Overload Relay (TOR / EOCR)",
    category: "차단기·보호",
    iecDesc: "직사각형 내부 바이메탈 열동 소자 기호와 연동 보조접점(95-96 NC, 97-98 NO) 표기 (IEC 60617-7)",
    nfpaDesc: "ANSI Y32.2 규격에서 히터 코일(S자 곡선 히터)과 과부하 래치 트립 접점으로 표기",
    standardComparison: "모터 과부하 시 바이메탈 만곡으로 보조 b접점(95-96)을 열어 마그네트 코일 전원을 차단하는 아날로그/전자식 보호 장치.",
    practicalUse: "전자접촉기(MC) 하단 직결 모터 과부하 및 결상 보호",
    wiringCaution: "트립 후 바이메탈 냉각 전에는 리셋되지 않음(수동/자동 리셋 레버 위치 확인 필수). 보조접점 95-96은 안전 차단 제어선에 직렬 결선.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="50" y1="12" x2="50" y2="35" stroke="currentColor" stroke-width="2.5"/>
      <!-- Bimetal heater U-shape -->
      <path d="M 38 35 L 38 60 A 12 12 0 0 0 62 60 L 62 35" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="68" x2="50" y2="88" stroke="currentColor" stroke-width="2.5"/>
      <text x="68" y="44" font-size="8" font-weight="bold" fill="currentColor">95</text>
      <text x="68" y="66" font-size="8" font-weight="bold" fill="currentColor">96(NC)</text>
      <text x="18" y="24" font-size="9" font-weight="bold" fill="currentColor">TOR</text>
    </svg>`
  },
  {
    id: "sym-fuse",
    nameKo: "퓨즈 (한류형 전력 퓨즈)",
    nameEn: "Fuse (Current Limiting Fuse)",
    category: "차단기·보호",
    iecDesc: "직사각형 박스 중심을 직선 도선이 관통하는 형태로 표기 (IEC 60617-7)",
    nfpaDesc: "양단 단자 사이에 물결 모양 곡선(Wave / S자 선형)으로 도선 연결 표기 (IEEE 315 / ANSI Y32.2)",
    standardComparison: "IEC는 관통선 직사각형, NFPA/ANSI는 S자 웨이브 선형. 북미 전장 설계(UL 508A)에서는 피크 통과전류(Ip)를 억제하는 Class CC/J 한류 퓨즈 다용.",
    practicalUse: "제어 변압기(CPT) 1차/2차 보호, 파워서플라이 인입 보호, PLC 전원 분기선 단락 보호",
    wiringCaution: "단락 차단 후 반드시 동일 규격(암페어 정격, 전압 정격, 속단/지연 Time-delay 특성)의 정품 퓨즈로 교체해야 화재 방지.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- IEC representation top -->
      <line x1="10" y1="32" x2="90" y2="32" stroke="currentColor" stroke-width="2.5"/>
      <rect x="28" y="24" width="44" height="16" fill="var(--panel, white)" stroke="currentColor" stroke-width="2.5"/>
      <text x="32" y="18" font-size="8" font-weight="bold" fill="currentColor">IEC (Box)</text>
      <!-- NFPA representation bottom -->
      <line x1="10" y1="72" x2="30" y2="72" stroke="currentColor" stroke-width="2.5"/>
      <path d="M 30 72 Q 40 60 50 72 T 70 72" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="70" y1="72" x2="90" y2="72" stroke="currentColor" stroke-width="2.5"/>
      <text x="31" y="58" font-size="8" font-weight="bold" fill="currentColor">NFPA (Wave)</text>
    </svg>`
  },
  {
    id: "sym-spd",
    nameKo: "서지보호장치 (SPD)",
    nameEn: "Surge Protective Device (SPD)",
    category: "차단기·보호",
    iecDesc: "사각 박스 내에 바리스터 기호 또는 번개 화살표와 접지 단자가 표시된 심볼 (IEC 60617-7 / IEC 61643)",
    nfpaDesc: "ANSI / NFPA 780 규격에서 피뢰기 / 서지 억제기(Surge Suppressor) 기호로 명시",
    standardComparison: "낙뢰 및 전력 계통 스위칭 서지로부터 판넬 내부 PLC 및 정밀 계측기를 보호하는 1차 보호 기기.",
    practicalUse: "판넬 메인 인입선(L1/L2/L3/N)과 PE 접지선 사이 병렬 연결",
    wiringCaution: "SPD 리드선(도선 길이)은 인덕턴스에 의한 전압 강하를 줄이기 위해 총 배선 길이를 500mm 이하로 최단거리 직결 시공 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <rect x="25" y="20" width="50" height="55" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- lightning bolt -->
      <polygon points="52,26 42,46 51,46 47,66 61,42 50,42" fill="currentColor"/>
      <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" stroke-width="2.5"/>
      <line x1="50" y1="75" x2="50" y2="90" stroke="currentColor" stroke-width="2.5"/>
      <text x="36" y="86" font-size="8" font-weight="bold" fill="currentColor">PE</text>
      <text x="36" y="16" font-size="8" font-weight="bold" fill="currentColor">SPD</text>
    </svg>`
  },

  // --- 6. 접점 및 스위칭류 (Contacts & Switches) ---
  {
    id: "sym-contact-no",
    nameKo: "a접점 (상시 개로 / NO 접점)",
    nameEn: "Normally Open Contact (NO Contact)",
    category: "ECAD·EPLAN·CAD",
    iecDesc: "두 평행 수직선 사이에 간격이 벌어져 분리된 형태 (IEC 60617-7)",
    nfpaDesc: "수평 도선 사이에 접촉 블레이드(Blade)가 단자 위에 열려있는 사선 접촉 형태 (ANSI Y32.2 / JIC)",
    standardComparison: "전기 시퀀스의 가장 기본 접점. IEC는 평행 분리선, NFPA/JIC는 단자 핀 위의 경사 블레이드로 표시.",
    practicalUse: "푸시버튼 기동 스위치, 릴레이/전자접촉기 자기유지(Self-holding) 접점",
    wiringCaution: "조작 전에는 열려있고 조작 시 닫힘. 릴레이 단자 번호 표기 시 13-14 또는 3-4 등 끝자리 3-4 부여.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- IEC left -->
      <line x1="10" y1="36" x2="30" y2="36" stroke="currentColor" stroke-width="2.5"/>
      <line x1="30" y1="24" x2="30" y2="48" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="24" x2="42" y2="48" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="36" x2="62" y2="36" stroke="currentColor" stroke-width="2.5"/>
      <text x="18" y="18" font-size="8" font-weight="bold" fill="currentColor">IEC (NO)</text>
      <!-- NFPA right -->
      <line x1="10" y1="74" x2="32" y2="74" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="34" cy="74" r="3" fill="currentColor"/>
      <line x1="34" y1="74" x2="56" y2="58" stroke="currentColor" stroke-width="3"/>
      <circle cx="58" cy="74" r="3" fill="currentColor"/>
      <line x1="60" y1="74" x2="82" y2="74" stroke="currentColor" stroke-width="2.5"/>
      <text x="18" y="58" font-size="8" font-weight="bold" fill="currentColor">NFPA (NO)</text>
    </svg>`
  },
  {
    id: "sym-contact-nc",
    nameKo: "b접점 (상시 폐로 / NC 접점)",
    nameEn: "Normally Closed Contact (NC Contact)",
    category: "ECAD·EPLAN·CAD",
    iecDesc: "평행 수직선 사이에 대각선 관통선이 접촉하여 통전 상태를 표시 (IEC 60617-7)",
    nfpaDesc: "수평 도선 단자 아래에 블레이드가 닫혀 접촉해 있는 형태 (ANSI Y32.2 / JIC)",
    standardComparison: "안전 인터록의 핵심 접점. IEC는 대각선 관통선, NFPA/JIC는 단자에 붙어있는 닫힌 블레이드.",
    practicalUse: "비상정지(E-Stop) 회로, 모터 정/역 인터록(Interlock), 도어 안전 스위치",
    wiringCaution: "비상정지 및 안전 계통은 단선 시 안전 정지(Fail-Safe)를 보장하기 위해 반드시 b접점(NC)으로 구성. 단자 번호 11-12 또는 1-2(끝자리 1-2).",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- IEC left -->
      <line x1="10" y1="36" x2="30" y2="36" stroke="currentColor" stroke-width="2.5"/>
      <line x1="30" y1="24" x2="30" y2="48" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="24" x2="42" y2="48" stroke="currentColor" stroke-width="3"/>
      <line x1="26" y1="46" x2="46" y2="26" stroke="currentColor" stroke-width="2.5"/>
      <line x1="42" y1="36" x2="62" y2="36" stroke="currentColor" stroke-width="2.5"/>
      <text x="18" y="18" font-size="8" font-weight="bold" fill="currentColor">IEC (NC)</text>
      <!-- NFPA right -->
      <line x1="10" y1="74" x2="32" y2="74" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="34" cy="74" r="3" fill="currentColor"/>
      <line x1="32" y1="71" x2="60" y2="71" stroke="currentColor" stroke-width="3.5"/>
      <circle cx="58" cy="74" r="3" fill="currentColor"/>
      <line x1="60" y1="74" x2="82" y2="74" stroke="currentColor" stroke-width="2.5"/>
      <text x="18" y="58" font-size="8" font-weight="bold" fill="currentColor">NFPA (NC)</text>
    </svg>`
  },
  {
    id: "sym-relay-coil",
    nameKo: "릴레이 코일 (제어 계전기)",
    nameEn: "Relay Coil / Contactor Coil",
    category: "ECAD·EPLAN·CAD",
    iecDesc: "직사각형 사각 박스(Rectangle)에 단자선 인출 (IEC 60617-7)",
    nfpaDesc: "원형(Circle) 기호 내부에 코일 식별자(예: CR, M) 표기 (IEEE 315 / JIC)",
    standardComparison: "IEC(유럽/EPLAN)는 직사각형 사각 박스, NFPA/JIC(북미)는 원형(Circle) 심볼로 도면상 가장 확연한 차이점.",
    practicalUse: "PLC 출력 신호 증폭 및 전기적 절연, 시퀀스 논리 제어, 전원 인터록",
    wiringCaution: "코일 단자 A1(+), A2(-) 극성 엄격 구분(다이오드 내장형 릴레이의 경우 역결선 시 다이오드 쇼트 파괴). 서지 킬러(Varistor/RC) 병렬 설치 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- IEC left -->
      <line x1="14" y1="50" x2="26" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <rect x="26" y="36" width="34" height="28" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="72" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <text x="14" y="28" font-size="9" font-weight="bold" fill="currentColor">IEC (A1/A2)</text>
      <!-- NFPA right -->
      <line x1="72" y1="50" x2="78" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="86" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <text x="81" y="54" font-size="10" font-weight="bold" fill="currentColor">M</text>
      <text x="74" y="28" font-size="9" font-weight="bold" fill="currentColor">NFPA (CR)</text>
    </svg>`
  },
  {
    id: "sym-contactor-3p",
    nameKo: "전자접촉기 주접점 (3극 MC)",
    nameEn: "Magnetic Contactor Main Contacts (3-Pole)",
    category: "모터·서보·인버터",
    iecDesc: "3개의 a접점에 수직 개폐 레버와 기계적 연동 파선이 결합된 형태 (IEC 60617-7)",
    nfpaDesc: "ANSI Y32.2 규격에서 모터 주전원선(L1, L2, L3)에 배치된 3극 개폐 접점 표기",
    standardComparison: "모터 주전원을 직접 개폐하는 대용량 접점. 소호실(Arc Chute)을 갖추어 아크 차단 능력을 가짐.",
    practicalUse: "3상 대용량 모터 직입기동(DOL), 정/역회전 마그네트 스위치, 히터 주전원 개폐",
    wiringCaution: "주접점 소손 및 용착(Welding) 시 안전 PLC가 감지할 수 있도록 미러 접점(Mirror Contact, b접점)을 안전 인터록 피드백(EDM) 회로에 연동.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- 3 poles -->
      <g stroke="currentColor" stroke-width="2.5">
        <line x1="25" y1="18" x2="25" y2="35"/><circle cx="25" cy="37" r="2.5" fill="currentColor"/><line x1="25" y1="37" x2="38" y2="58" stroke-width="3"/><circle cx="25" cy="67" r="2.5" fill="currentColor"/><line x1="25" y1="67" x2="25" y2="84"/>
        <line x1="50" y1="18" x2="50" y2="35"/><circle cx="50" cy="37" r="2.5" fill="currentColor"/><line x1="50" y1="37" x2="63" y2="58" stroke-width="3"/><circle cx="50" cy="67" r="2.5" fill="currentColor"/><line x1="50" y1="67" x2="50" y2="84"/>
        <line x1="75" y1="18" x2="75" y2="35"/><circle cx="75" cy="37" r="2.5" fill="currentColor"/><line x1="75" y1="37" x2="88" y2="58" stroke-width="3"/><circle cx="75" cy="67" r="2.5" fill="currentColor"/><line x1="75" y1="67" x2="75" y2="84"/>
      </g>
      <!-- mechanical link line -->
      <line x1="33" y1="48" x2="83" y2="48" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/>
      <text x="32" y="14" font-size="8" font-weight="bold" fill="currentColor">3-Pole MC</text>
    </svg>`
  },

  // --- 7. 모터 및 부하류 (Motors & Actuators) ---
  {
    id: "sym-motor-3p",
    nameKo: "3상 유도 전동기",
    nameEn: "3-Phase Induction Motor",
    category: "모터·서보·인버터",
    iecDesc: "원형 내부에 'M'과 '3~' 기호가 표기되고 3개 단자(U, V, W) 및 PE 접지 단자 인출 (IEC 60617-8)",
    nfpaDesc: "ANSI Y32.2 규격 동일 형상. T1, T2, T3 단자 번호 및 모터 명판 마력(HP) 기재",
    standardComparison: "IEC는 U/V/W 및 kW 단위, NFPA는 T1/T2/T3 및 HP 단위 표기. 회전 방향 변경 시 임의의 2선 맞교대 결선.",
    practicalUse: "공장 컨베이어 구동, 유압 펌프 모터, 송풍기 및 집진기 모터",
    wiringCaution: "모터 단자대 와이(Y) 결선과 델타(Δ) 결선 방식 전압 일치 확인 필수. 외함 접지(PE) 미체결 시 프레임 누전 유도 전압으로 감전 위험.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <circle cx="50" cy="52" r="30" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="32" y1="24" x2="32" y2="12" stroke="currentColor" stroke-width="2.5"/>
      <line x1="50" y1="22" x2="50" y2="10" stroke="currentColor" stroke-width="2.5"/>
      <line x1="68" y1="24" x2="68" y2="12" stroke="currentColor" stroke-width="2.5"/>
      <text x="43" y="56" font-size="16" font-weight="bold" fill="currentColor">M</text>
      <text x="42" y="70" font-size="10" font-weight="bold" fill="currentColor">3~</text>
      <text x="26" y="8" font-size="8" font-weight="bold" fill="currentColor">U</text>
      <text x="46" y="8" font-size="8" font-weight="bold" fill="currentColor">V</text>
      <text x="66" y="8" font-size="8" font-weight="bold" fill="currentColor">W</text>
    </svg>`
  },
  {
    id: "sym-motor-servo",
    nameKo: "서보 모터 & 엔코더",
    nameEn: "AC Servo Motor with Encoder",
    category: "모터·서보·인버터",
    iecDesc: "원형 모터 기호 M 옆에 사각 엔코더(ENC / PG) 블록 및 브레이크(BK) 기호가 일체형으로 결합된 복합 심볼 (IEC 60617-8)",
    nfpaDesc: "ANSI Y32.2 규격에서 Servo Motor(SM)와 피드백 엔코더 분리 결선 명시",
    standardComparison: "정밀 위치 결정을 위한 동기 전동기. 동력 케이블(U/V/W/PE)과 신호 케이블(엔코더 시리얼 통신)이 물리적으로 분리 인출됨.",
    practicalUse: "반도체 이송 로봇, 공작기계 볼스크류 축 이송, 정밀 권취기",
    wiringCaution: "엔코더 케이블은 모터 동력선 노이즈에 매우 취약하므로 360도 전원주 편조 실드 접지 시공 및 동력선과 별도 덕트 분리 포설 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <circle cx="38" cy="50" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <text x="32" y="55" font-size="13" font-weight="bold" fill="currentColor">M</text>
      <!-- Encoder box attached -->
      <rect x="62" y="36" width="26" height="28" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="65" y="53" font-size="8" font-weight="bold" fill="currentColor">ENC</text>
      <line x1="38" y1="26" x2="38" y2="12" stroke="currentColor" stroke-width="2"/>
      <line x1="75" y1="36" x2="75" y2="12" stroke="currentColor" stroke-width="2"/>
      <text x="24" y="10" font-size="8" font-weight="bold" fill="currentColor">Power</text>
      <text x="64" y="10" font-size="8" font-weight="bold" fill="currentColor">Signal</text>
    </svg>`
  },
  {
    id: "sym-solenoid",
    nameKo: "솔레노이드 밸브 코일",
    nameEn: "Solenoid Valve Actuator",
    category: "기초 전장",
    iecDesc: "직사각형 코일 박스 내부에 대각선 사선 또는 사각 밸브 기호 결합 (IEC 60617-7)",
    nfpaDesc: "ANSI Y32.2 / NFPA 79 규격에서 SOL 코일 기호와 유압/공압 밸브 블록 연동 표기",
    standardComparison: "전기 신호로 공압/유압 실린더의 방향을 전환하는 솔레노이드 밸브 코일 구동 기호.",
    practicalUse: "공압 클램프 실린더 전/후진 밸브, 진공 파괴 밸브, 절삭유 온/오프 밸브",
    wiringCaution: "DC 24V 코일 오프 시 발생하는 고전압 역기전력을 흡수하기 위한 서지 킬러(Flyback 다이오드 또는 바리스터) 내장형 커넥터 사용 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <rect x="25" y="32" width="50" height="36" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="25" y1="68" x2="75" y2="32" stroke="currentColor" stroke-width="2.5"/>
      <line x1="12" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="75" y1="50" x2="88" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <text x="36" y="24" font-size="10" font-weight="bold" fill="currentColor">SOL</text>
    </svg>`
  },

  // --- 8. 센서 및 계측 스위치류 (Sensors & Switches) ---
  {
    id: "sym-sensor-prox",
    nameKo: "근접 센서 (유도형 센서)",
    nameEn: "Inductive Proximity Sensor",
    category: "센서",
    iecDesc: "마름모꼴(다이아몬드) 센서 외곽선 내에 금속 감지 코일 기호 및 스위칭 트랜지스터 심볼 표기 (IEC 60617-8)",
    nfpaDesc: "ANSI Y32.2 / NFPA 79 규격에서 Proximity Switch 기호로 3선식(Brown +, Blue -, Black Out) 명시",
    standardComparison: "금속 물체 비접촉 감지용 표준 센서. 유럽계는 PNP 소싱이 압도적이며, 일본/국내 일부 장비는 NPN 싱킹 혼용.",
    practicalUse: "실린더 전/후진 엔드 위치 감지, 인덱스 턴테이블 정위치 감지, 메탈 유무 확인",
    wiringCaution: "3선식 배선 규격: 갈색(+24V), 청색(0V), 흑색(출력 신호). 전원선과 신호선 역결선 시 센서 내부 출력 트랜지스터 파손 주의.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="14" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="2"/>
      <line x1="75" y1="50" x2="86" y2="50" stroke="currentColor" stroke-width="2"/>
      <text x="32" y="16" font-size="8" font-weight="bold" fill="currentColor">Proximity</text>
    </svg>`
  },
  {
    id: "sym-sensor-photo",
    nameKo: "광전 센서 (투수광/반사형)",
    nameEn: "Photoelectric Sensor",
    category: "센서",
    iecDesc: "마름모 센서 기호 내부에 발광/수광 다이오드 및 렌즈 광학 경로 화살표 결합 (IEC 60617-8)",
    nfpaDesc: "ANSI Y32.2 규격에서 Photoelectric Switch(투과형 Receiver/Emitter 및 직접반사형) 표기",
    standardComparison: "빛의 차단이나 반사를 이용하여 비금속(웨이퍼, 유리, 트레이 등)까지 광범위하게 감지하는 범용 센서.",
    practicalUse: "컨베이어 물류 박스 감지, 웨이퍼 카세트 감지, 유리 기판 유무 검출",
    wiringCaution: "Light-ON(차광 시 OFF)과 Dark-ON(입광 시 OFF) 모드 셀렉터 설정 오류 시 시퀀스 인터록 반전 위험.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <!-- optical wave arrows -->
      <line x1="38" y1="44" x2="62" y2="44" stroke="currentColor" stroke-width="2"/>
      <polygon points="62,44 54,40 54,48" fill="currentColor"/>
      <line x1="38" y1="56" x2="62" y2="56" stroke="currentColor" stroke-width="2"/>
      <polygon points="62,56 54,52 54,60" fill="currentColor"/>
      <text x="34" y="16" font-size="8" font-weight="bold" fill="currentColor">Photo-Eye</text>
    </svg>`
  },
  {
    id: "sym-switch-limit",
    nameKo: "리밋 스위치 (기계식 접점)",
    nameEn: "Limit Switch (Mechanical Position)",
    category: "센서",
    iecDesc: "a/b접점 도선에 롤러 레버(Roller Plunger) 액추에이터 기호가 결합된 형태 (IEC 60617-7)",
    nfpaDesc: "ANSI Y32.2 / NFPA 79 규격에서 기계적 캠(Cam) 조작 리밋 스위치 기호 동일",
    standardComparison: "기구적 물리 접촉으로 동작하는 신뢰성 높은 위치 제한 스위치. 오버트래블 방지용 하드웨어 리밋으로 필수.",
    practicalUse: "갠트리 로봇 축 오버트래블(OT) 비상정지 리밋, 안전 도어 닫힘 확인, 세이프티 인터록",
    wiringCaution: "기계적 수명(바운싱, 접점 산화)이 존재하므로 환경에 맞는 방수/방진(IP67) 구조 선정 필수. 안전 리밋은 강제 개로(Positive Opening) 메커니즘 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <line x1="15" y1="60" x2="40" y2="60" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="42" cy="60" r="2.5" fill="currentColor"/>
      <line x1="42" y1="60" x2="66" y2="42" stroke="currentColor" stroke-width="3"/>
      <!-- roller on blade -->
      <circle cx="56" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="68" cy="60" r="2.5" fill="currentColor"/>
      <line x1="70" y1="60" x2="90" y2="60" stroke="currentColor" stroke-width="2.5"/>
      <text x="32" y="24" font-size="9" font-weight="bold" fill="currentColor">Limit SW</text>
    </svg>`
  },

  // --- 9. 안전 및 비상 정지 기기류 (Safety) ---
  {
    id: "sym-estop",
    nameKo: "비상정지 버튼 (버섯형 E-Stop)",
    nameEn: "Emergency Stop Pushbutton",
    category: "Safety",
    iecDesc: "버섯형(Mushroom) 헤드 기호와 래치 회전 복귀 화살표, 직접 개로 동작(Direct Opening, 화살표 원형) b접점 결합 (IEC 60947-5-5)",
    nfpaDesc: "NFPA 79 규격에서 적색 버섯형 유지 버튼과 2채널 직렬 안전 접점 결합 명시",
    standardComparison: "인명 보호를 위한 최우선 안전 장치. 접점 융착 시에도 물리적으로 뜯어내는 직접 개로 동작 기구 필수 적용.",
    practicalUse: "조작반 전면 비상정지, 티칭 펜던트 E-Stop, 장비 측면 작업자 비상 정지 버튼",
    wiringCaution: "ISO 13849-1 PLe/Cat 4 만족을 위해 반드시 이중화(2채널 NC 접점) 배선하여 안전 PLC 또는 세이프티 릴레이에 결선 필수.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- mushroom head -->
      <path d="M 30 22 C 30 10 70 10 70 22 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="50" y1="22" x2="50" y2="45" stroke="currentColor" stroke-width="2.5"/>
      <!-- NC contact -->
      <line x1="20" y1="60" x2="42" y2="60" stroke="currentColor" stroke-width="2.5"/>
      <line x1="42" y1="48" x2="42" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="58" y1="48" x2="58" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="38" y1="70" x2="62" y2="50" stroke="currentColor" stroke-width="2.5"/>
      <line x1="58" y1="60" x2="80" y2="60" stroke="currentColor" stroke-width="2.5"/>
      <!-- positive opening symbol -->
      <circle cx="50" cy="84" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="45" y1="84" x2="55" y2="84" stroke="currentColor" stroke-width="2"/>
      <polygon points="55,84 50,81 50,87" fill="currentColor"/>
    </svg>`
  },

  // --- 10. 접지 및 전원 단자류 (Grounding & Earthing) ---
  {
    id: "sym-ground-pe",
    nameKo: "보호 접지 (PE / 샤시 / 신호 접지)",
    nameEn: "Protective Earth (PE) & Chassis Ground",
    category: "EMC·접지",
    iecDesc: "동심원 내부에 수평 라인과 수직 3단 접지선(PE), 빗금 친 샤시 접지(Chassis Ground)로 세부 구분 (IEC 60417-5019)",
    nfpaDesc: "IEEE 315 / ANSI Y32.2 규격에서 지구 접지(Earth, 점점 짧아지는 3개 수평선)와 샤시 프레임 레이크(Rake) 기호 구별",
    standardComparison: "감전 방지용 보호 접지(PE, 녹/황 배선)와 판넬 금속 구조물 샤시 접지, 아날로그 신호 접지(SG)를 엄격히 분리 표기.",
    practicalUse: "제어반 메인 어스바(PE Busbar), 모터 외함 등전위 본딩, 인버터 실드 케이블 양단 접지",
    wiringCaution: "신호 접지(0V)와 보호 접지(PE)를 임의로 혼식 연결하면 모터 노이즈가 PLC 아날로그 신호로 유입되어 계측값 헌팅 발생.",
    svg: `<svg viewBox="0 0 100 100" class="sym-svg">
      <!-- PE circle left -->
      <circle cx="32" cy="48" r="20" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="32" y1="20" x2="32" y2="40" stroke="currentColor" stroke-width="2.5"/>
      <line x1="20" y1="40" x2="44" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="24" y1="47" x2="40" y2="47" stroke="currentColor" stroke-width="2.5"/>
      <line x1="28" y1="54" x2="36" y2="54" stroke="currentColor" stroke-width="2"/>
      <text x="26" y="16" font-size="8" font-weight="bold" fill="currentColor">PE</text>
      <!-- Chassis rake right -->
      <line x1="72" y1="26" x2="72" y2="52" stroke="currentColor" stroke-width="2.5"/>
      <line x1="58" y1="52" x2="86" y2="52" stroke="currentColor" stroke-width="3"/>
      <line x1="62" y1="52" x2="56" y2="64" stroke="currentColor" stroke-width="2.5"/>
      <line x1="72" y1="52" x2="66" y2="64" stroke="currentColor" stroke-width="2.5"/>
      <line x1="82" y1="52" x2="76" y2="64" stroke="currentColor" stroke-width="2.5"/>
      <text x="58" y="20" font-size="8" font-weight="bold" fill="currentColor">Chassis</text>
    </svg>`
  }
];

module.exports = { SYMBOLS_DATA };
