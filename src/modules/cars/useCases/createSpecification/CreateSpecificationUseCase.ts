import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface Request {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: Request): void {
    const specificationExists = this.specificationRepository.findByName(name);
    if (specificationExists) throw new Error('Specification already exists');
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase }