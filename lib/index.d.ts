import { AdapterService, ServiceOptions } from '@feathersjs/adapter-commons';
import { Id } from '@feathersjs/feathers';
import { EntityRepository, AnyEntity } from 'mikro-orm';
interface MikroOrmServiceOptions extends Partial<ServiceOptions> {
    Entity: any;
    repository: EntityRepository<any>;
    name: string;
}
export declare class MikroOrmService extends AdapterService<any> {
    private app;
    private Entity;
    private repository;
    private name;
    constructor(options: MikroOrmServiceOptions);
    setup(app: any): void;
    get(id: Id): Promise<AnyEntity<any>>;
    create(data: Partial<AnyEntity<any>>): Promise<AnyEntity<any>>;
    patch(id: Id, data: Partial<AnyEntity<any>>): Promise<AnyEntity<any>>;
    remove(id: Id): Promise<AnyEntity<any>>;
}
export default function (options: MikroOrmServiceOptions): MikroOrmService;
export {};