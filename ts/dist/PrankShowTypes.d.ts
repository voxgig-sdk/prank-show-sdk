export interface Post {
    content?: string;
    date?: string;
    id?: string;
    title?: string;
    url?: string;
}
export interface PostListMatch {
    page: number;
    $action?: string;
    [action: string]: any;
}
