import { random, randomInt } from './util.js';

export class Building {
  constructor(width, height, widthFraction, heightFraction) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.widthFraction = widthFraction;
    this.heightFraction = heightFraction;
  }

  draw(town, ctx) {
    const rando = Math.random();
    let drawFunc = this.drawHouse;
    let w = this.width;
    let h = this.height;
    let wf = this.widthFraction;
    let hf = this.heightFraction;
    if (rando < 0.45) {
      drawFunc = this.drawHouse;
      w = randomInt(50, 120);
      h = randomInt(60, 120);
      wf = random(0.1, 0.8);
      hf = random(0.35, 0.70);
    } else if (rando < 0.75) {
      drawFunc = this.drawTower;
      w = randomInt(20, 40);
      h = randomInt(100, 200);
      wf = 0.5;
      hf = random(0.5, 0.6);
    } else {
      drawFunc = this.drawLongTower;
      w = randomInt(25, 75);
      h = randomInt(50, 100);
      wf = random(0.2, 0.7);
      hf = random(0.5, 0.7);
    }
    // const aspectRatio = w / h;


    // divide width and height into fractions for roof and sides
    const w1 = w * wf; // const w2 = w * (1 / wf);
    const h1 = h * hf; // const h2 = h * (1 / hf);
    const rounds = 2;
    ctx.translate(0, 200 - h);
    for (let i = 0; i < rounds; i++) {
      drawFunc(ctx, w, h, w1, h1, i);
    }
    ctx.translate(0, -(200 - h));
  } // end draw

  drawLongTower(ctx, w, h, w1, h1, i) {
    // Long towers have a short face and a long face

    // Front left face
    //  1   2
    //  4   3
    ctx.beginPath();
    ctx.moveToRand(0, h1);
    ctx.lineToRand(w1, h1);
    ctx.lineToRand(w1, h);
    ctx.lineToRand(0, h);
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = '#f5f5f5'; // light color
      ctx.fill();
      ctx.stroke();
      ctx.beginPath(); // can skip on nonzero passes
    }
    // Right side face
    //  1   2
    //  4   3
    ctx.moveToRand(w1, h1);
    ctx.lineToRand(w, h1);
    ctx.lineToRand(w, h);
    ctx.lineToRand(w1, h);
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = '#f5f5f5'; // light color
      ctx.fill();
      ctx.stroke();
      ctx.beginPath(); // can skip on nonzero passes
    }

    // Roof right, starts at top right
    //  4  1
    //   3  2
    const w1Half = (w1 / 2) * 1.4; // magic 1.4 to shorten roof
    ctx.moveToRand(w - w1Half, 0);
    ctx.lineToRand(w, h1); // bez?
    ctx.lineToRand(w1, h1);
    ctx.lineToRand(w1Half, 0); // bez?
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = 'aaa'; // Right Roof
      ctx.fill();
      ctx.stroke();
      ctx.beginPath(); // can skip on nonzero passes
    }
    // Roof left
    //    1
    //  3  2
    ctx.moveToRand(w1Half, 0);
    ctx.lineToRand(w1, h1); // bez?
    ctx.lineToRand(0, h1);
    ctx.closePath(); // but bez?
    if (i === 0) {
      ctx.fillStyle = '#f1f1f1'; // Left Roof
      ctx.fill();
    }
    // don't close?
    ctx.stroke();
  }

  drawTower(ctx, w, h, w1, h1, i) {
    // Front left face
    //  1   2
    //  4   3
    ctx.beginPath();
    ctx.moveToRand(0, h1);
    ctx.lineToRand(w1, h1);
    ctx.lineToRand(w1, h);
    ctx.lineToRand(0, h);
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = '#f5f5f5'; // light color
      ctx.fill();
      ctx.stroke();
      ctx.beginPath(); // can skip on nonzero passes
    }
    // Right side face
    //  1   2
    //  4   3
    ctx.moveToRand(w1, h1);
    ctx.lineToRand(w, h1);
    ctx.lineToRand(w, h);
    ctx.lineToRand(w1, h);
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = '#f5f5f5'; // light color
      ctx.fill();
      ctx.stroke();
      ctx.beginPath(); // can skip on nonzero passes
    }
    // Roof right, starts at top right
    //  1
    //  3  2
    ctx.moveToRand(w1, 0);
    ctx.lineToRand(w, h1); // bez?
    ctx.lineToRand(w1, h1);
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = '#dddddd'; // roof color a
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
    }
    // Roof RIGHT?
    //    2
    // 1  3
    ctx.moveToRand(0, h1);
    ctx.lineToRand(w1, 0); // bez?
    ctx.lineToRand(w1, h1);
    ctx.closePath(); // but bez?
    if (i === 0) {
      ctx.fillStyle = '#f1f1f1'; // roof color b
      ctx.fill();
    }
    // don't close?
    ctx.stroke();
  }

  drawHouse(ctx, w, h, w1, h1, i) {
    // Front face
    //    2
    //  1   3
    //  5   4
    ctx.beginPath();
    ctx.moveToRand(0, h1);
    ctx.lineToRand(w1 / 2, 0); // bez?
    ctx.lineToRand(w1, h1); // bez?
    ctx.lineToRand(w1, h);
    ctx.lineToRand(0, h);
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = '#f5f5f5'; // light color
      ctx.fill();
      ctx.stroke();
      ctx.beginPath(); // can skip on nonzero passes
    }
    // Side face
    //  1   2
    //  4   3
    ctx.moveToRand(w1, h1);
    ctx.lineToRand(w, h1);
    ctx.lineToRand(w, h);
    ctx.lineToRand(w1, h);
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = '#f5f5f5'; // light color
      ctx.fill();
      ctx.stroke();
      ctx.beginPath(); // can skip on nonzero passes
    }
    // Roof, starts at top right
    //  4   1
    //    3   2
    const w1Half = w1 / 2;
    ctx.moveToRand(w - w1Half, 0);
    ctx.lineToRand(w, h1); // bez?
    ctx.lineToRand(w1, h1);
    ctx.lineToRand(w1Half, 0); // bez?
    ctx.closePath();
    if (i === 0) {
      ctx.fillStyle = '#f1f1f1'; // roof color
      ctx.fill();
    }
    ctx.stroke();
  }
} // end class

export default Building;

