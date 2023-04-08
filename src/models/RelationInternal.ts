import { OnDeleteType } from "typeorm/metadata/types/OnDeleteType";
import { OnUpdateType } from "typeorm/metadata/types/OnUpdateType";
import { Entity } from "./Entity";

export type RelationInternal = {
    ownerTable: Entity;
    relatedTable: Entity;
    ownerColumns: string[];
    relatedColumns: string[];
    objectId?: string;
    onDelete?: OnDeleteType;
    onUpdate?: OnUpdateType;
};
