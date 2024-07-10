export default [
  {
    level: 1,
    timeToBounce: 3,

    ballStartPos: { x: 200, y: -100 },
    wall: {
      wall1: { pos: { x: -360, y: 0 }, size: { w: 100, h: 1334 } },
      wall2: { pos: { x: 359.774, y: 605.885 }, size: { w: 100, h: 1334 } },
      wall3: { pos: { x: 0, y: 230 }, size: { w: 960, h: 100 } },
      wall4: { pos: { x: 0, y: -230 }, size: { w: 960, h: 100 } },
    },
    fadeWall: { pos: { x: 370.801, y: -130 }, size: { w: 134, h: 266 } },
  },

  {
    level: 2,
    timeToBounce: 100,

    ballStartPos: { x: 100, y: -100 },
    wall: {
      wall1: { pos: { x: -360, y: 0 }, size: { w: 100, h: 1334 } },
      wall2: { pos: { x: 360, y: -765 }, size: { w: 100, h: 1334 } },
      wall3: { pos: { x: 0, y: 230 }, size: { w: 960, h: 100 } },
      wall4: { pos: { x: 0, y: -230 }, size: { w: 960, h: 100 } },
      wall5: { pos: { x: 360, y: 195 }, size: { w: 100, h: 300 } },
    },
    fadeWall: { pos: { x: 360, y: -30 }, size: { w: 134, h: 266 } },
    obstaclesWall: [
      {
        pos: { x: 0, y: 0 },
        size: { w: 1, h: 4 },
        rotation: 0,
      },
    ],
  },
  {
    level: 3,
    timeToBounce: 7,

    ballStartPos: { x: 200, y: -90 },
    wall: {
      wall1: { pos: { x: -360, y: 0 }, size: { w: 100, h: 1334 } },
      wall2: { pos: { x: 359.774, y: 605.885 }, size: { w: 100, h: 1334 } },
      wall3: { pos: { x: 0, y: 230 }, size: { w: 960, h: 100 } },
      wall4: { pos: { x: 0, y: -240 }, size: { w: 960, h: 100 } },
    },
    fadeWall: { pos: { x: 370.801, y: -130 }, size: { w: 134, h: 266 } },
    obstaclesWall: [
      {
        pos: { x: 0, y: 0 },
        size: { w: 2, h: 4 },
        rotation: 90,
      },
    ],
  },
];
