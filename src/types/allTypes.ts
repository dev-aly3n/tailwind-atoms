
export interface metaDataType {
  siteTitle: string;
  pageTitle: string;
  desc: string;
  keywords: string;
  pageUrl: string;
  imageUrl: string;
  homePageUrl: string;
}

export interface statusType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export type popUpType = "successful" | "failed" | "neutral";
