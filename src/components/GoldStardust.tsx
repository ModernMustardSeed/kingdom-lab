import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface ColorHSB {
  h: number;
  s: number;
  b: number;
}

interface Palette {
  [key: string]: ColorHSB;
}

const GoldStardust: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const NUM_PARTICLES = 500;
      const NUM_BACKGROUND_STARS = 150;

      let zOff = 0;
      const mouseInfluence = { x: 0, y: 0, active: false };

      const palette: Palette = {
        goldDeep: { h: 38, s: 80, b: 70 },
        goldRich: { h: 42, s: 70, b: 85 },
        goldBright: { h: 45, s: 60, b: 100 },
        goldPale: { h: 48, s: 40, b: 100 },
        amber: { h: 32, s: 85, b: 90 },
        champagne: { h: 50, s: 30, b: 95 },
        cream: { h: 55, s: 20, b: 100 },
        roseGold: { h: 15, s: 50, b: 90 },
        platinum: { h: 45, s: 10, b: 95 },
      };

      class BackgroundStar {
        x: number;
        y: number;
        size: number;
        twinkleSpeed: number;
        twinkleOffset: number;
        baseAlpha: number;
        hue: number;
        sat: number;

        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.size = p.random(0.5, 1.5);
          this.twinkleSpeed = p.random(0.5, 2);
          this.twinkleOffset = p.random(1000);
          this.baseAlpha = p.random(20, 50);
          this.hue = p.random() > 0.8 ? p.random(40, 55) : p.random(40, 50);
          this.sat = p.random() > 0.8 ? p.random(10, 30) : p.random(0, 10);
        }

        update() {
          this.x += p.sin(zOff + this.twinkleOffset) * 0.02;
          this.y += p.cos(zOff * 0.5 + this.twinkleOffset) * 0.01;
          if (this.x < 0) this.x = p.width;
          if (this.x > p.width) this.x = 0;
          if (this.y < 0) this.y = p.height;
          if (this.y > p.height) this.y = 0;
        }

        display() {
          const twinkle = p.noise(this.twinkleOffset, zOff * this.twinkleSpeed);
          const alpha = this.baseAlpha * (0.3 + twinkle * 0.7);
          p.fill(this.hue, this.sat, 100, alpha);
          p.ellipse(this.x, this.y, this.size, this.size);
        }
      }

      class ShootingStar {
        pos: p5.Vector;
        vel: p5.Vector;
        life: number;
        length: number;
        thickness: number;

        constructor() {
          if (p.random() > 0.5) {
            this.pos = p.createVector(p.random(p.width), -20);
          } else {
            this.pos = p.createVector(-20, p.random(p.height * 0.6));
          }
          this.life = 1.0;
          this.length = p.random(50, 150);
          this.thickness = p.random(1.5, 3);
          const angle = p.PI / 4 + p.random(-0.2, 0.2);
          const speed = p.random(20, 35);
          this.vel = p5.Vector.fromAngle(angle).mult(speed);
        }

        update() {
          this.pos.add(this.vel);
          this.life -= 0.02;
        }

        display() {
          if (this.life <= 0) return;
          const tailVector = this.vel.copy().normalize().mult(-1);
          const steps = 20;
          for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const pos = p5.Vector.add(this.pos, p5.Vector.mult(tailVector, i * (this.length / steps)));
            const alpha = this.life * (1 - t) * 60;
            const size = this.thickness * (1 - t * 0.8);
            p.fill(45, 20, 100, alpha);
            p.ellipse(pos.x, pos.y, size, size);
          }
          p.fill(50, 5, 100, this.life * 90);
          p.ellipse(this.pos.x, this.pos.y, this.thickness + 1, this.thickness + 1);
          if (p.random() < 0.2) {
            p.fill(40, 0, 100, this.life * 80);
            p.ellipse(this.pos.x, this.pos.y, this.thickness * 4, this.thickness * 4);
          }
        }

        isDead() {
          return this.life <= 0 || this.pos.x > p.width + 100 || this.pos.y > p.height + 100;
        }
      }

      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        depth: number;
        size: number;
        colorType: string;
        noiseSeed: number;
        noiseScale: number;
        speedMult: number;
        glowStrength: number;
        trail: { x: number; y: number }[];
        maxTrail: number;
        index: number;

        constructor(index: number) {
          this.index = index;
          this.pos = p.createVector(0, 0);
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.depth = 0;
          this.size = 0;
          this.colorType = 'goldBright';
          this.noiseSeed = 0;
          this.noiseScale = 0;
          this.speedMult = 0;
          this.glowStrength = 0;
          this.trail = [];
          this.maxTrail = 0;
          this.reset(true);
        }

        reset(randomY = false) {
          this.pos = p.createVector(p.random(p.width), randomY ? p.random(p.height) : p.random(-100, -20));
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.depth = p.pow(p.random(), 0.7);
          const baseSize = p.lerp(0.8, 4, this.depth);
          this.size = baseSize * p.random(0.8, 1.2);
          this.colorType = this.selectColorType();
          this.noiseSeed = p.random(1000);
          this.noiseScale = p.lerp(0.003, 0.001, this.depth);
          this.speedMult = p.lerp(0.3, 1.2, this.depth);
          this.glowStrength = p.lerp(0.5, 1.5, this.depth);
          this.trail = [];
          this.maxTrail = p.floor(p.lerp(3, 12, this.depth));
        }

        selectColorType(): string {
          const r = p.random();
          if (this.depth > 0.7) {
            if (r < 0.4) return 'goldRich';
            if (r < 0.7) return 'goldBright';
            if (r < 0.85) return 'amber';
            return 'roseGold';
          } else if (this.depth > 0.3) {
            if (r < 0.5) return 'goldBright';
            if (r < 0.8) return 'goldPale';
            return 'champagne';
          } else {
            if (r < 0.4) return 'goldPale';
            if (r < 0.7) return 'champagne';
            if (r < 0.9) return 'cream';
            return 'platinum';
          }
        }

        update() {
          if (p.frameCount % 2 === 0) {
            this.trail.push({ x: this.pos.x, y: this.pos.y });
            if (this.trail.length > this.maxTrail) this.trail.shift();
          }
          const nx = this.pos.x * this.noiseScale;
          const ny = this.pos.y * this.noiseScale;
          const angle = p.noise(nx + this.noiseSeed, ny, zOff) * p.TWO_PI * 2;
          const flow = p5.Vector.fromAngle(angle);
          flow.mult(0.03 * this.speedMult);
          this.acc.add(flow);
          this.acc.y += 0.003 * this.speedMult;
          this.acc.x += p.sin(zOff * 2 + this.noiseSeed) * 0.002;

          if (mouseInfluence.active) {
            const dx = mouseInfluence.x - this.pos.x;
            const dy = mouseInfluence.y - this.pos.y;
            const dist = p.sqrt(dx * dx + dy * dy);
            const influenceRadius = 200 * this.depth;
            if (dist < influenceRadius) {
              const strength = (1 - dist / influenceRadius) * 0.015 * this.depth;
              this.acc.x += dx * strength * 0.1;
              this.acc.y += dy * strength * 0.1;
            }
          }

          this.vel.add(this.acc);
          this.vel.limit(0.5 + this.speedMult * 0.5);
          this.pos.add(this.vel);
          this.acc.mult(0);

          if (this.pos.y > p.height + 50) this.reset(false);
          if (this.pos.x < -50) this.pos.x = p.width + 50;
          if (this.pos.x > p.width + 50) this.pos.x = -50;
        }

        display() {
          const col = palette[this.colorType];
          const twinkle = p.noise(this.noiseSeed, zOff * 2.5);
          const brightness = p.lerp(col.b * 0.6, col.b, twinkle);
          const alphaBoost = p.lerp(0.7, 1.3, twinkle);

          // Trail
          for (let i = 0; i < this.trail.length; i++) {
            const t = i / this.trail.length;
            const point = this.trail[i];
            const trailAlpha = t * 8 * alphaBoost * this.depth;
            const trailSize = this.size * (0.3 + t * 0.5);
            p.fill(col.h, col.s * 0.5, brightness * 0.8, trailAlpha);
            p.ellipse(point.x, point.y, trailSize * 2, trailSize * 2);
          }

          // Glows
          const glowSize3 = this.size * 6 * this.glowStrength;
          p.fill(col.h, col.s * 0.6, brightness, 4 * alphaBoost * this.depth);
          p.ellipse(this.pos.x, this.pos.y, glowSize3, glowSize3);

          const glowSize2 = this.size * 3.5 * this.glowStrength;
          p.fill(col.h, col.s * 0.7, brightness, 12 * alphaBoost * this.depth);
          p.ellipse(this.pos.x, this.pos.y, glowSize2, glowSize2);

          const glowSize1 = this.size * 2;
          p.fill(col.h, col.s * 0.8, brightness, 25 * alphaBoost);
          p.ellipse(this.pos.x, this.pos.y, glowSize1, glowSize1);

          // Core
          p.fill(col.h, col.s * 0.5, Math.min(100, brightness * 1.1), 70 * alphaBoost);
          p.ellipse(this.pos.x, this.pos.y, this.size, this.size);

          // Hot center
          p.fill(col.h - 5, col.s * 0.3, 100, 50 * alphaBoost * twinkle);
          p.ellipse(this.pos.x, this.pos.y, this.size * 0.4, this.size * 0.4);
        }
      }

      const particles: Particle[] = [];
      const backgroundStars: BackgroundStar[] = [];
      const shootingStars: ShootingStar[] = [];

      const drawBackground = () => {
        for (let y = 0; y <= p.height; y++) {
          const t = y / p.height;
          const h = p.lerp(240, 220, t);
          const s = p.lerp(30, 10, t);
          const b = p.lerp(6, 1, t);
          p.stroke(h, s, b);
          p.line(0, y, p.width, y);
        }
        p.noStroke();
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.noStroke();
        drawBackground();
        for (let i = 0; i < NUM_BACKGROUND_STARS; i++) backgroundStars.push(new BackgroundStar());
        for (let i = 0; i < NUM_PARTICLES; i++) particles.push(new Particle(i));
      };

      p.draw = () => {
        p.fill(220, 15, 2, 4);
        p.rect(0, 0, p.width, p.height);
        zOff += 0.002;

        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
          mouseInfluence.x = p.lerp(mouseInfluence.x, p.mouseX, 0.05);
          mouseInfluence.y = p.lerp(mouseInfluence.y, p.mouseY, 0.05);
          mouseInfluence.active = true;
        }

        for (const star of backgroundStars) { star.update(); star.display(); }
        particles.sort((a, b) => a.depth - b.depth);
        for (const part of particles) { part.update(); part.display(); }

        if (p.random() < 0.005) shootingStars.push(new ShootingStar());
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const ss = shootingStars[i];
          ss.update();
          ss.display();
          if (ss.isDead()) shootingStars.splice(i, 1);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        drawBackground();
      };

      p.mouseMoved = () => { mouseInfluence.active = true; };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => { p5Instance.remove(); };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default GoldStardust;
