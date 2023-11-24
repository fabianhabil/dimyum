export interface FeedbackType {
  Nama: string;
  Email_Binus: string;
  NIM: string;
  Feedback: string;
  Testimoni: string;
  Date: string;
}

export interface OrderFormType {}

export interface DimsumOrderType {
  carrot: DimsumType;
  mushroom: DimsumType;
  shrimp: DimsumType;
  beef: DimsumType;
  crabStick: DimsumType;
}

export interface DimsumType {
  name: string;
  count: number;
}
