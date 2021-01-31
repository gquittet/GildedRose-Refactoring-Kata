import { ItemUpdateStrategy } from "../item-update-strategy";
import { Item } from "../../gilded-rose";

export class BackstagePassesItemUpdateStrategy extends ItemUpdateStrategy {
    updateQuality(item: Item): Item {
        if (item.sellIn <= 0) item.quality = 0;
        else if (item.sellIn <= 5) item.quality = Math.min(item.quality + 3, this.MAX_QUALITY);
        else if (item.sellIn <= 10) item.quality = Math.min(item.quality + 2, this.MAX_QUALITY);
        else item.quality = Math.min(item.quality + 1, this.MAX_QUALITY);

        item.sellIn -= 1;
        return item;
    }
}
