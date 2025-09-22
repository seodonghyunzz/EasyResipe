export interface RecipeType {
  RCP_SEQ: string; // 일련번호
  RCP_NM: string; // 메뉴명
  RCP_WAY2: string; // 조리방법
  RCP_PAT2: string; // 요리종류
  INFO_WGT: string; // 중량
  INFO_ENG: string; // 열량
  INFO_CAR: string; // 탄수화물
  INFO_PRO: string; // 단백질
  INFO_FAT: string; // 지방
  INFO_NA: string; // 나트륨
  HASH_TAG: string; // 해쉬태그
  ATT_FILE_NO_MAIN: string; // 이미지(소)
  ATT_FILE_NO_MK: string; // 이미지(대)
  RCP_PARTS_DTLS: string; // 재료정보
  MANUAL: { step: number; text?: string; img?: string }[]; // 조리법 단계
  RCP_NA_TIP: string; // 저감 조리법 TIP
}
