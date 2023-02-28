import { neighborRepository } from '../../Infrastructure/repositories/neighbor.repository';

export const neighborService = {
    getNeighbor: (cca: string) => {
        return neighborRepository.getNeighbor(cca)
    },
}