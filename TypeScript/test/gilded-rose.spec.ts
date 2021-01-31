import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    describe('Common items', () => {
        it('should decrease the sell by date of all object', () => {
            const gildedRose = new GildedRose([new Item('Toto', 10, 5), new Item('Tata', 9, 4)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(9);
            expect(items[1].sellIn).to.equal(8);
        });

        it('should decrease the sell by date', () => {
            const gildedRose = new GildedRose([new Item('Toto', 10, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(9);
        });

        it('should set a negative sell by date when it has passed', () => {
            const gildedRose = new GildedRose([new Item('Tata', 0, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(-1);
        });

        it('should decrease the quality', () => {
            const gildedRose = new GildedRose([new Item('Tata', 10, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(4);
        });

        it('should decrease the quality by 2 if the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item('Titi', 0, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(3);
        });
    });

    describe('Sulfuras, Hand of Ragnaros', () => {
        it('should never decrease the sell by date', () => {
            const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(5);
        });

        it('should never decrease the quality', () => {
            const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(80);
        });

        it('should never decrease the quality even if it is at 40', () => {
            const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 40)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(40);
        });
    });

    // Backstage passes handle only the concert of TAFKAL80ETC
    describe('Backstage passes to a TAFKAL80ETC concert', () => {
        it('should decrease the sellIn of the object', () => {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(-1);
        });

        it('should decrease the quality if the sell by date is bigger than 10', () => {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(6);
        });

        it('should increase the quality by 2 if it remains 10 days or lower', () => {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(7);
        });

        it('should never increase the quality over 50 if it remains 10 days or lower', () => {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
        });

        it('should increase the quality by 3 if it remains 5 days or lower', () => {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(8);
        });

        it('should increase the quality by 3 if it remains 1 day', () => {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(8);
        });

        it('should never increase the quality over 50 if it remains 5 days or lower', () => {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
        });

        it('should set the quality to 0 after the date of the concert', () => {
            const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
    });

    describe('Aged Brie', () => {
        it('should decrease the sellIn of the object', () => {
            const gildedRose = new GildedRose([new Item('Aged Brie', 0, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(-1);
        });

        it('should increase the quality after update', () => {
            const gildedRose = new GildedRose([new Item('Aged Brie', 20, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(3);
        });

        it('should increase the quality two times faster if the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item('Aged Brie', 0, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(4);
        });

        it('should never increase the quality over 50', () => {
            const gildedRose = new GildedRose([new Item('Aged Brie', 20, 50)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
        });

    });

});
