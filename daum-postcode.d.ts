/**
 * @see [테마](https://postcode.map.daum.net/guide#themeWizard)
 */
export interface DaumPostcodeTheme {
  /** @summary 바탕 배경색 */
  bgColor?: string;

  /** @summary 본문 배경색(검색결과, 결과없음, 첫화면, 검색서제스트) */
  contentBgColor?: string;

  /** @summary 강조 글자색 */
  emphTextColor?: string;

  /** @summary 테두리 */
  outlineColor?: string;

  /** @summary 페이지 배경색 */
  pageBgColor?: string;

  /** @summary 우편번호 글자색 */
  postcodeTextColor?: string;

  /** @summary 검색창 글자색 */
  queryTextColor?: string;

  /** @summary 검색창 배경색 */
  searchBgColor?: string;

  /** @summary 기본 글자색 */
  textColor?: string;
}

export interface DaumPostcodeData {
  /**
   * @example '경기 성남시 분당구 판교역로 235'
   */
  address: string;

  /**
   * @example '235 Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, korea'
   */
  addressEnglish: string;

  /** 검색된 기본 주소 타입 */
  addressType: 'J' | 'R';

  /** 공동주택 여부 */
  apartment: 'N' | 'Y';

  /**
   * @example '경기 성남시 분당구 삼평동 681'
   */
  autoJibunAddress: string;

  /**
   * @example '681, Sampyeong-dong, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea'
   */
  autoJibunAddressEnglish: string;

  /**
   * @example '경기 성남시 분당구 판교역로 235'
   */
  autoRoadAddress: string;

  /**
   * @example '235, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea'
   */
  autoRoadAddressEnglish: string;

  /**
   * @example '4113510900'
   */
  bcode: string;

  /**
   * @example '삼평동'
   */
  bname: string;

  /** 법정리의 읍/면 이름 */
  bname1: string;

  /** 법정리의 읍/면 이름의 영문 */
  bname1English: string;

  /**
   * @example '삼평동'
   */
  bname2: string;

  /**
   * @example 'Sampyeong-dong'
   */
  bname2English: string;

  /**
   * @example 'Sampyeong-dong'
   */
  bnameEnglish: string;

  /**
   * @example '4113510900106810000000001'
   */
  buildingCode: string;

  /**
   * @example '에이치스퀘어 엔동'
   */
  buildingName: string;

  /**
   * 행정동 이름, 검색어를 행정동으로 검색하고, 검색결과의 법정동과 검색어에 입력한 행정동과 다른 경우에 표시하고, 데이터를 내립니다.
   */
  hname: string;

  /**
   * @example '경기 성남시 분당구 삼평동 681'
   */
  jibunAddress: string;

  /**
   * @example '681, Sampyeong-dong, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea'
   */
  jibunAddressEnglish: string;

  /** 연관 주소에서 "선택 안함" 부분을 선택했을때를 구분할 수 있는 상태변수 */
  noSelected: 'N' | 'Y';

  /** @deprecated 구 우편번호 */
  postcode: '';
  /** @deprecated 구 우편번호 앞 3자리 */
  postcode1: '';
  /** @deprecated 구 우편번호 뒤 3자리 */
  postcode2: '';
  /** @deprecated 구 우편번호 일련번호 */
  postcodeSeq: '';

  /**
   * @example '판교역로 235'
   */
  query: string;

  /**
   * @example '경기 성남시 분당구 판교역로 235'
   */
  roadAddress: string;

  /**
   * @example '235, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea'
   */
  roadAddressEnglish: string;

  /**
   * @example '판교역로'
   */
  roadname: string;

  /**
   * @example '3179025'
   */
  roadnameCode: string;

  /**
   * @example 'Pangyoyeok-ro'
   */
  roadnameEnglish: string;

  /**
   * @example '경기'
   */
  sido: string;

  /**
   * @example 'Gyeonggi-do'
   */
  sidoEnglish: string;

  /**
   * @example '성남시 분당구'
   */
  sigungu: string;

  /**
   * @example '41135'
   */
  sigunguCode: string;

  /**
   * @example 'Bundang-gu Seongnam-si'
   */
  sigunguEnglish: string;

  /** 색 결과에서 사용자가 선택한 주소의 언어 타입 */
  userLanguageType: 'E' | 'K';

  /** 검색 결과에서 사용자가 선택한 주소의 타입 */
  userSelectedType: 'J' | 'R';

  /**
   * @example '13494'
   */
  zonecode: string;
}

export interface DaumPostcodeSize {
  height: number;
  width: number;
}

export type DaumPostcodeState = 'COMPLETE_CLOSE' | 'FORCE_CLOSE';

export interface DaumPostcodeSearchData {
  count: number;
  q: string;
}

/**
 * @see [속성](https://postcode.map.daum.net/guide#attributes)
 */
export interface DaumPostcodeOptions {
  /**
   * 검색 결과의 한글과 영문 주소를 동시에 볼 수 있게 해주는 기능입니다.\
   * 해당 기능 활성화시 "영문보기" 버튼은 감춰집니다(hideEngBtn 속성의 설정 값보다 우선시 됩니다).
   * @default false
   */
  alwaysShowEngAddr?: boolean;

  /**
   * 우편번호 찾기 화면에서 애니메이션 효과를 줍니다.
   * @default false
   */
  animation?: boolean;

  autoClose?: boolean;

  /**
   * @default true
   */
  autoMappingJibun?: boolean;

  /**
   * @default true
   */
  autoMappingRoad?: boolean;

  /**
   * 우편번호 찾기가 실행된 후 검색어 입력박스에 focus를 줍니다.\
   * 단, PC 플랫폼에서만 동작하며 Mobile 플랫폼은 지원하지 않습니다.
   * @default true
   */
  focusInput?: boolean;

  /**
   * 우편번호 찾기 팝업 또는 iframe의 고정 높이를 지정합니다. iframe으로 띄울 경우 비율(%)로도 입력이 가능합니다.\
   * 최소값은 400이며 이보다 작은 값을 넣으면 무시됩니다.
   * @default 500
   */
  height?: number | string;

  /**
   * 검색 결과의 "영문보기" 버튼을 가릴 수 있는 옵션입니다.\
   * 다만, 해당 기능은 자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능으로, app에 임베딩을 해야되는 상황이거나 버튼이 눌러지면 안되는 상황일때 선택적으로 이용하시는 것을 권장합니다.
   * @default false
   */
  hideEngBtn?: boolean;

  /**
   * 검색 결과의 "지도" 버튼을 가릴 수 있는 옵션입니다.\
   * 다만, 해당 기능은 자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능으로, app에 임베딩을 해야되는 상황이거나 버튼이 눌러지면 안되는 상황일때 선택적으로 이용하시는 것을 권장합니다.
   * @default false
   */
  hideMapBtn?: boolean;

  /**
   * 검색어 입력시 검색바 아래에 뜨는 서제스트의 최대 검색 개수를 조절할 수 있는 옵션입니다.\
   * 입력하지 않거나 1~10을 벗어나는 수를 입력시 기본값으로 셋팅됩니다.
   * @default 10
   */
  maxSuggestItems?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  onclose?: DaumPostcodeCloseHandler;
  oncomplete?: DaumPostcodeCompleteHandler;
  onresize?: DaumPostcodeResizeHandler;
  onsearch?: DaumPostcodeSearchHandler;

  /**
   * 검색결과가 많을시 검색바 아래의 가이드 영역을 강조시켜 주는 기능입니다.\
   * 가이드 문구는 첫화면의 가이드 문구와 동일하며, 조합방식과 예시를 설명하여 사용자에게 재검색을 유도할 수 있도록 하는 기능입니다.
   * @default 0
   */
  pleaseReadGuide?:
    | 0
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20;

  /**
   * pleaseReadGuide 옵션과 같이 사용되는 옵션으로 선택사항입니다.\
   * 입력값 설정 단위는 '초'단위로 설정할 수 있으며, 0.1~60까지 입력 가능합니다.
   * @default 1.5
   */
  pleaseReadGuideTimer?: number;

  /**
   * 검색된 주소와 내려가는 데이터의 '시', '도' 부분을 축약 표시합니다(한글 주소만 해당).
   * - 서울특별시 -> 서울
   * - 광주광역시 -> 광주
   * - 전라북도 -> 전북
   *
   * 단, '세종특별자치시' '제주특별자치도'는 지자체의 요청에 의해 제외
   * @default true
   */
  shorthand?: boolean;

  /**
   * 기존보다 행정동 정보를 좀 더 많이 보여주게 하는 옵션입니다.
   * @default false
   */
  showMoreHName?: boolean;

  /**
   * "form submit" 방식을 사용합니다. false로 설정 시 "location replace" 방식을 사용하게 됩니다.\
   * 우편번호 서비스로 인해 history 관련 제어가 어려우실 경우 false로 설정하여 이용하시기 바랍니다.
   * @default true
   */
  submitMode?: boolean;

  /**
   * 우편번호 찾기 화면의 색상 테마를 변경할 수 있습니다.
   * @default null
   */
  theme?: DaumPostcodeTheme | null;

  /**
   * 하단 배너에 "가이드페이지"로 이동하는 링크를 활성화 시킵니다.
   * @default true
   */
  useBannerLink?: boolean;

  /**
   * 우편번호 찾기 팝업 또는 iframe의 고정 넓이를 지정합니다. iframe으로 띄울 경우 비율(%)로도 입력이 가능합니다.\
   * 최소값은 300이며 이보다 작은 값을 넣으면 무시됩니다.
   * @default 500
   */
  width?: number | string;

  /** @deprecated */
  zonecodeOnly?: boolean;
}

export interface DaumPostcodeEmbedOptions {
  autoClose?: DaumPostcodeOptions['autoClose'];
  q?: DaumPostcodeSearchData['q'];
}

export interface DaumPostcodeOpenOptions extends DaumPostcodeEmbedOptions {
  left?: number;
  popupKey?: string;
  popupTitle?: string;
  top?: number;
}

export type DaumPostcodeCompleteHandler = (data: DaumPostcodeData) => void;
export type DaumPostcodeResizeHandler = (size: DaumPostcodeSize) => void;
export type DaumPostcodeCloseHandler = (state: DaumPostcodeState) => void;
export type DaumPostcodeSearchHandler = (data: DaumPostcodeSearchData) => void;
export type DaumPostcodeEmbedHandler = (
  element: HTMLElement,
  options?: DaumPostcodeOptions
) => void;
export type DaumPostcodeOpenHandler = (
  options?: DaumPostcodeOpenOptions
) => void;

export interface DaumPostcodeConstructor {
  new (options: DaumPostcodeOptions): {
    embed: DaumPostcodeEmbedHandler;
    open: DaumPostcodeOpenHandler;
  };
}

export interface Daum {
  Postcode: DaumPostcodeConstructor;
}

declare global {
  /**
   * @see [Daum Postcode](https://postcode.map.daum.net/guide)
   */
  const daum: Daum;
  interface Window {
    /**
     * @see [Daum Postcode](https://postcode.map.daum.net/guide)
     */
    daum: Daum;
  }
}
