


export interface MatchParagraph {
    before: string;
    match: string;
    after: string;
    score: number;
}

export interface SearchResult {
    paragraphs: MatchParagraph[];
    searchedParagraphCount: number;
    paragraphCount: number;
}