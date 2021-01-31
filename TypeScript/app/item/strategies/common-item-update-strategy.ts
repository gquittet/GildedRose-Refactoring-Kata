import { ItemUpdateStrategy } from "../item-update-strategy";
import { Item } from "../../gilded-rose";

export class CommonItemUpdateStrategy extends ItemUpdateStrategy {
    updateQuality(item: Item): Item {
        return item;
    }
}
