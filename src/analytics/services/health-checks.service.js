import { http } from '../../shared/utils/http-common';

export class HealthChecksService {
    getAll() {
        return http.get("/api/v1/health-checks");
    }
}