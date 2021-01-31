import { ItemUpdateStrategy } from "./item-update-strategy";
import { Item } from "../gilded-rose";

export class ItemUpdater {
    constructor(private _itemUpdateStrategy: ItemUpdateStrategy) { }

    set itemUpdateStrategy(itemUpdateStrategy: ItemUpdateStrategy) {
        this._itemUpdateStrategy = itemUpdateStrategy;
    }

    get itemUpdateStrategy(): ItemUpdateStrategy {
        return this._itemUpdateStrategy
    }

    updateQuality(item: Item): Item {
        return this.itemUpdateStrategy.updateQuality(item);
    }
}
