import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
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
