export class Sheep {
    constructor(img, stageWidth) {
        this.img = img;

        this.totalFrame = 8;
        this.curFrame = 0;
    }

    draw(ctx, t, dots) {
        this.animate(ctx, dots)
    }

    animate(ctx, dots) {

    }


}