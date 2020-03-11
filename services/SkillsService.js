import { Service } from './'

export default class SkillsService extends Service {
    async getSkills() {
        return await this.get('/api/skills');
    }

    async getCategories() {
        return await this.get('/api/categories');
    }
}