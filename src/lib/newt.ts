import { createClient } from 'newt-client-js'
import type { Article } from '@/types/article'

const client = createClient({
    spaceUid: process.env.NEWT_SPACE_UID + '',
    token: process.env.NEWT_CDN_API_TOKEN + '',
    apiType: 'cdn'
})

export const getArticles = async (appUid: string, modelUid: string) => {
    const { items } = await client.getContents<Article>({
        appUid: appUid,
        modelUid: modelUid
    })
    return items
}

export const getArticleBySlug = async (slug: string) => {
    const article = await client.getFirstContent<Article>({
        appUid:"clubs",
        modelUid:'Article',
        query:{
            slug
        },
    })
    return article
}