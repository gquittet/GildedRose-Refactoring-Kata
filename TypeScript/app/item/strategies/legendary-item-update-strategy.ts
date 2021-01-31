import { ItemUpdateStrategy } from "../item-update-strategy";
import { Item } from "../../gilded-rose";

export class LegendaryItemUpdateStrategy extends ItemUpdateStrategy {
    updateQuality(item: Item): Item {
        return item;
    }
}
