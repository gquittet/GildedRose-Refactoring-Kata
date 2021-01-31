import { Item } from "../gilded-rose";

export abstract class ItemUpdateStrategy {
    protected MIN_QUALITY: number = 0;
    protected MAX_QUALITY: number = 50;
    abstract updateQuality(item: Item): Item;
}
