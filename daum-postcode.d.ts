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
  address: string;
  addressEnglish: string;
  addressType: 'J' | 'R';
  apartment: 'N' | 'Y';
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  bcode: string;
  bname: string;
  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;
  bnameEnglish: string;
  buildingCode: string;
  buildingName: string;
  hname: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  noSelected: 'N' | 'Y';

  /** @deprecated */
  postcode: '';
  /** @deprecated */
  postcode1: '';
  /** @deprecated */
  postcode2: '';
  /** @deprecated */
  postcodeSeq: '';

  query: string;
  roadAddress: string;
  roadAddressEnglish: string;
  roadname: string;
  roadnameCode: string;
  roadnameEnglish: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguCode: string;
  sigunguEnglish: string;
  userLanguageType: 'E' | 'K';
  userSelectedType: 'J' | 'R';
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
