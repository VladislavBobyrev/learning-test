class Animation {
    constructor() {
        this.mainText = ('Vladislav i Mashenka');
        this.textSliceWidth = 10;
        this.waveLenth = 200;
        this.waveAmpletude = 30;
        this.c = new Canvas();
        this.creatTextData();
        this.setypPripertis();
        this.wave();
    }
    setypPripertis() {
        this.textSliceCount = this.textArea / this.textSliceWidth;
        this.twoPi = Math.PI * 2;
       
    }
    creatTextData() {
        this.textArea = this.c.drawText( this.mainText, 100, 70);
        this.texDate = this.c.git(this.textArea);
    }
    wave() {
        for(let i = 0; i < this.textSliceCount; i++) {
            const xSlicePoint = i * this.textSliceWidth;
            const offSetY = Math.sin(xSlicePoint / this.waveLenth * this.twoPi) * this.waveAmpletude;
            
        this.c.pid(this.texDate, 0, 300 + offSetY,  xSlicePoint, 0 , this.textSliceWidth, this.textArea.h);
        }
    }
}

class Canvas {
    constructor() {
        this.createCanvas();
        this.fitToScreen();
    }
    createCanvas () {
        this.cnv = document.createElement('canvas');
        this.ctx = this.cnv.getContext(`2d`);
        document.body.appendChild(this.cnv);
    }
    fitToScreen() {
        this.w = this.cnv.width = innerWidth;
        this.h = this.cnv.height = innerHeight;
    }
    drawText(t = `Extreme`, fs= 90, x = 0, y = 0) {        
            this.ctx.font = `${fs}px Arial`;
            this.ctx.fillStyle = `white`;
            this.ctx.textBaseline = `top`;
            this.ctx.fillText(t, x ,y);

            const fw = this.ctx.measureText(t).width;
            return {x: x, y: y, w: fw, h: fs};
        
    }
    git({x, y, w, h}) {
       return this.ctx.getImageData(x, y, w, h);
    }
    pid(d, x, y, dx, dy, dw, dh) {
        this.ctx.putImageData(d, x, y, dx, dy, dw, dh);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }
}
window.onload = () => {
    new Animation();
}