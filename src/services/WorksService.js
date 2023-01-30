import Service from './Service'

export default class WorksService extends Service {
    async getPublic() {
        return await this.get('/api/portfolio/public');
    }
    
    async getPrivate() {
        return await this.get('/api/portfolio/private');
    }
    
    async getPersonal() {
        return await this.get('/api/portfolio/personal');
    }
}