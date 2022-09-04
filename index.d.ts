export type cbOptions = {
    uid?: number,
    name?: string,
    gender?: string,
    year?: number,
    birthplace?: string,
    language?: string,
    bday?: string,
    developer?: boolean,
}

declare function chatbot(msg: string, options?: cbOptions): Promise<object>;

declare function grammar(msg: string): Promise<object>;

declare function nsfw(url: string): Promise<object>;

declare function toxicity(msg: string): Promise<object>;