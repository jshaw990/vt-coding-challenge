import getRequest from '../utils/httpRequest'

class BlogPostService {
    getAll(skip: number = 0) {
        return getRequest('', skip)
    }

    getBySlug(slug: string) {
        return getRequest(slug)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BlogPostService()