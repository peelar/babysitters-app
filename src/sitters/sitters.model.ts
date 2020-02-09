export enum SitterStatus {
  AVAILABlE = 'AVAILABlE',
  UNAVAILABlE = 'UNAVAILABlE',
}

export interface Sitter {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  status: SitterStatus;
}
