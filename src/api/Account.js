import http from './http';

export default {
    login(dto) {
        return http
            .post('/5a6614d399fd4', {
                uid: dto.uid,
                pwd: dto.pwd
            }, {
                adapter: async () => {
                    return {
                        data: true
                    }
                }
            })
    }
}