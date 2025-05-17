export type club_article = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    body: string,
    slug: string,
    official: string,
    picture : {
        url: string,
        height: number,
        width: number
    }
}