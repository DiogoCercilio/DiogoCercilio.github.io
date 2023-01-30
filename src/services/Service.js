import { 
    sections,
    aboutInfo,
    footerLinks,
    publicPortfolio, 
    privatePortfolio, 
    personalPortfolio,
    skills, 
    categories    
} from '../mocks/Mocks'

export default class Service {
    async getMocked(path) {
        switch(path) {
            case "/api/sections": return Promise.resolve(sections)//.catch(e=> { throw new Error('Error on API response') })
            case "/api/contact": return Promise.resolve(footerLinks)
            case "/api/about": return Promise.resolve(aboutInfo)
            case "/api/portfolio/public": return Promise.resolve(publicPortfolio)
            case "/api/portfolio/private": return Promise.resolve(privatePortfolio)
            case "/api/portfolio/personal": return Promise.resolve(personalPortfolio)
            case "/api/skills": return Promise.resolve(skills)
            case "/api/categories": return Promise.resolve(categories)
            default:
                throw new Error("Not implemented yet...")
        }
    }

    // TODO: After create Backend... Implement service requests
    async get(path) {
        return await this.getMocked(path)
    }
}