import { ItemUpdateStrategy } from "../item-update-strategy";
import { Item } from "../../gilded-rose";

export class BackstagePassesItemUpdateStrategy extends ItemUpdateStrategy {
    updateQuality(item: Item): Item {
        return item;
    }
}
