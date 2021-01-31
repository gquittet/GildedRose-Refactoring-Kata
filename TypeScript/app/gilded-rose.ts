import { ItemUpdateStrategy } from "./item/item-update-strategy";
import { ItemUpdater } from "./item/item-updater";
import { AgedBrieItemUpdateStrategy } from "./item/strategies/aged-brie-item-update-strategy";
import { BackstagePassesItemUpdateStrategy } from "./item/strategies/backstage-passes-item-update-strategy";
import { LegendaryItemUpdateStrategy } from "./item/strategies/legendary-item-update-strategy";
import { CommonItemUpdateStrategy } from "./item/strategies/common-item-update-strategy";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;
    private readonly strategies: { [name: string]: ItemUpdateStrategy };
    private readonly itemUpdater: ItemUpdater;

    constructor(items = [] as Array<Item>) {
        this.items = items;
        this.strategies = {
            'Aged Brie': new AgedBrieItemUpdateStrategy(),
            'Backstage passes': new BackstagePassesItemUpdateStrategy(),
            'Legendary': new LegendaryItemUpdateStrategy(),
            'Common': new CommonItemUpdateStrategy(),
        };
        this.itemUpdater = new ItemUpdater(this.strategies['Common']);
    }

    updateQuality() {
        return this.items.map(item => {
            switch (item.name) {
                case 'Aged Brie':
                    this.itemUpdater.itemUpdateStrategy = this.strategies['Aged Brie'];
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    this.itemUpdater.itemUpdateStrategy = this.strategies['Backstage passes'];
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    this.itemUpdater.itemUpdateStrategy = this.strategies['Legendary'];
                    break;
                default:
                    this.itemUpdater.itemUpdateStrategy = this.strategies['Common'];
            }
            return this.itemUpdater.updateQuality(item);
        });
    }
}
