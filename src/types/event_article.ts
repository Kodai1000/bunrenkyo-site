export type event_article = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    status: string,
    remarks: string,
    content: string,
    picture : {
        url: string,
        height: number,
        width: number
    }
}