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
  alwaysShowEngAddr?: boolean;
  animation?: boolean;
  autoClose?: boolean;
  autoMappingJibun?: boolean;
  autoMappingRoad?: boolean;
  focusInput?: boolean;
  height?: number | string;
  hideEngBtn?: boolean;
  hideMapBtn?: boolean;
  maxSuggestItems?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  onclose?: DaumPostcodeCloseHandler;
  oncomplete?: DaumPostcodeCompleteHandler;
  onresize?: DaumPostcodeResizeHandler;
  onsearch?: DaumPostcodeSearchHandler;
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
  pleaseReadGuideTimer?: number;
  shorthand?: boolean;
  showMoreHName?: boolean;
  submitMode?: boolean;
  theme?: DaumPostcodeTheme | null;
  useBannerLink?: boolean;
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
