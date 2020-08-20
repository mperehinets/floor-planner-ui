import {Angle} from '../../model/angle';

export function drawRoomInCanvas(angles: Angle[], canvas: HTMLCanvasElement): void {
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(angles[0].x, angles[0].y);
  for (let i = 1; i <= angles.length; i++) {
    if (angles.length >= 4 && i === angles.length) {
      ctx.lineTo(angles[0].x, angles[0].y);
    } else if (i !== angles.length) {
      ctx.lineTo(angles[i].x, angles[i].y);
    }
  }
  ctx.strokeStyle = '#3f51b5';
  ctx.stroke();
}
