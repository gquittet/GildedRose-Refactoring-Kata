import { ItemUpdateStrategy } from "../item-update-strategy";
import { Item } from "../../gilded-rose";

export class ConjuredItemUpdateStrategy extends ItemUpdateStrategy {
    updateQuality(item: Item): Item {
        item.quality = Math.max(item.quality - 2, this.MIN_QUALITY);
        item.sellIn -= 1;
        return item;
    }
}
