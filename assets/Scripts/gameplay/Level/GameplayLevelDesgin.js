export default [
  {
    level: 1,
    timeToBounce: 1,

    ballStartPos: { x: 300, y: -50 },
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
        rotation: 0,
      },
    ],
  },

  {
    level: 2,
    timeToBounce: 1,

    ballStartPos: { x: 300, y: -90 },
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
        rotation: 0,
      },
    ],
  },
  {
    level: 3,
    timeToBounce: 2,

    ballStartPos: { x: 300, y: -90 },
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
        size: { w: 40, h: 100 },
        rotation: 90,
      },
    ],
  },
];
