export default [
  {
    level: 1,
    timeToBounce: 5,
    ballStartPos: { x: -250, y: 100 },
    wall: {
      left: { pos: { x: -480, y: 0 }, size: { w: 100, h: 1334 } },
      right: { pos: { x: 480, y: 680 }, size: { w: 100, h: 1334 } },
      top: { pos: { x: 0, y: 270 }, size: { w: 960, h: 100 } },
      down: { pos: { x: 0, y: -270 }, size: { w: 960, h: 100 } },
    },
    fadeWall: { pos: { x: 480, y: -105 }, size: { w: 100, h: 230 } },
    obstaclesWall: [
      {
        pos: { x: 0, y: 0 },
        size: { w: 40, h: 200 },
        rotation: 90,
      },
      {
        pos: { x: 0, y: -120 },
        size: { w: 40, h: 200 },
        rotation: 20,
      },
    ],
  },
  {
    level: 2,
    timeToBounce: 3,

    ballStartPos: { x: 300, y: 0 },
    wall: {
      left: { pos: { x: -480, y: 0 }, size: { w: 100, h: 1334 } },
      right: { pos: { x: 480, y: 680 }, size: { w: 100, h: 1334 } },
      top: { pos: { x: 0, y: 270 }, size: { w: 960, h: 100 } },
      down: { pos: { x: 0, y: -270 }, size: { w: 960, h: 100 } },
    },
    fadeWall: { pos: { x: 480, y: -105 }, size: { w: 100, h: 230 } },
    obstaclesWall: [
      {
        pos: { x: 0, y: -120 },
        size: { w: 40, h: 200 },
        rotation: 20,
      },
    ],
  },
  {
    level: 3,
    timeToBounce: 2,

    ballStartPos: { x: 300, y: 0 },
    wall: {
      left: { pos: { x: -480, y: 0 }, size: { w: 100, h: 1334 } },
      right: { pos: { x: 480, y: 680 }, size: { w: 100, h: 1334 } },
      top: { pos: { x: 0, y: 270 }, size: { w: 960, h: 100 } },
      down: { pos: { x: 0, y: -270 }, size: { w: 960, h: 100 } },
    },
    fadeWall: { pos: { x: 480, y: -105 }, size: { w: 100, h: 230 } },
    obstaclesWall: [
      {
        pos: { x: 0, y: 0 },
        size: { w: 40, h: 200 },
        rotation: 90,
      },
    ],
  },
];
