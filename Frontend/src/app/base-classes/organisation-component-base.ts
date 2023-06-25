import { RdfMapper } from "ts-rdf-mapper";
import { IToggleTtl } from "../interfaces/toggle-ttl.interface";
import { Organisation } from "../models/organisation";

export class OrganisationBase<T extends Organisation> implements IToggleTtl {

    dataItem: T | undefined;
    ttlView: boolean = false;
    ttlText: string = "";

    toggleTtlView(): void {

        this.ttlText = RdfMapper.serialize(this.dataItem);
        this.ttlView = !this.ttlView;
    }

}