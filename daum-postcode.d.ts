declare global {
  interface DaumPostcodeTheme {
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

  interface DaumPostcodeData {
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
    postcode: '';
    postcode1: '';
    postcode2: '';
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

  interface DaumPostcodeSize {
    height: number;
    width: number;
  }

  type DaumPostcodeState = 'COMPLETE_CLOSE' | 'FORCE_CLOSE';

  interface DaumPostcodeSearchData {
    count: number;
    q: string;
  }

  /**
   * @see [속성](https://postcode.map.daum.net/guide#attributes)
   */
  interface DaumPostcodeOptions {
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
    oncomplete?: (data: DaumPostcodeData) => void;
    onresize?: DaumPostcodeResizeHandler;
    onsearch?: DaumPostcodeResizeHandler;
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

  interface DaumPostcodeEmbedOptions {
    autoClose?: DaumPostcodeOptions['autoClose'];
    q?: DaumPostcodeSearchData['q'];
  }

  interface DaumPostcodeOpenOptions extends DaumPostcodeEmbedOptions {
    left?: number;
    popupKey?: string;
    popupTitle?: string;
    top?: number;
  }

  type DaumPostcodeCompleteHandler = (data: DaumPostcodeData) => void;
  type DaumPostcodeResizeHandler = (size: DaumPostcodeSize) => void;
  type DaumPostcodeCloseHandler = (state: DaumPostcodeState) => void;
  type DaumPostcodeSearchHandler = (data: DaumPostcodeSearchData) => void;
  type DaumPostcodeEmbedHandler = (
    element: HTMLElement,
    options?: DaumPostcodeOptions
  ) => void;
  type DaumPostcodeOpenHander = (options?: DaumPostcodeOpenOptions) => void;

  interface DaumPostcodeConstructor {
    new (options: DaumPostcodeOptions): {
      embed: DaumPostcodeEmbedHandler;
      open: DaumPostcodeOpenHander;
    };
  }

  interface Daum {
    Postcode: DaumPostcodeConstructor;
  }

  /**
   * @see [Daum Postcode](https://postcode.map.daum.net/guide)
   */
  const daum: Daum;
  interface Window {
    daum: Daum;
  }
}

export = daum;
