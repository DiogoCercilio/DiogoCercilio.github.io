import { Service } from './'

export default class SectionsService extends Service {
    async getSections() {
        return await this.get('/api/sections');
    }

    async getFooterLinks() {
        return await this.get('/api/contact')
    }
    
    async getAboutInfo() {
        return await this.get('/api/about')
    }
}