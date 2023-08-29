// tudo que estiver dentro do declaration file precisa ser criado de modo global

declare namespace _ {
  declare interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare let global: typeof globalThis & {
  MINHAGLOBAL: string;
};
