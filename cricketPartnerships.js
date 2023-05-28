const partnerships = [
  {
    id: "72fcafd0-6bec-11ed-a99f-43a8e8abd956",
    firstPlayer: "4c855fa0-6be7-11ed-a99f-43a8e8abd956",
    secondPlayer: "43f94360-6be7-11ed-a99f-43a8e8abd956",
    firstPlayerContribution: {
      runs: 17,
      balls: 11,
    },
    secondPlayerContribution: {
      runs: 16,
      balls: 13,
    },
    totalContribution: 33,
    wickets: 2,
    oversPlayed: "4.0",
    teamScore: 69,
    runRate: "8.25",
    startOver: "5.1",
    endOver: "9.1",
    inning: 1,
    ballNumber: 59,
  },
  {
    id: "c11ca540-6beb-11ed-a99f-43a8e8abd956",
    firstPlayer: "48872ff0-6be7-11ed-a99f-43a8e8abd956",
    secondPlayer: "43f94360-6be7-11ed-a99f-43a8e8abd956",
    firstPlayerContribution: {
      runs: 6,
      balls: 13,
    },
    secondPlayerContribution: {
      runs: 20,
      balls: 18,
    },
    totalContribution: 36,
    wickets: 1,
    oversPlayed: "5.1",
    teamScore: 36,
    runRate: "6.97",
    startOver: "0",
    endOver: "5.1",
    inning: 1,
    ballNumber: 35,
  },
  {
    id: "c11ca541-6beb-11ed-a99f-43a8e8abd956",
    firstPlayer: "4e692410-7aeb-11ed-9a2f-fb420a2614cf",
    secondPlayer: "4b5db8d0-7aeb-11ed-9a2f-fb420a2614cf",
    firstPlayerContribution: {
      runs: 2,
      balls: 2,
    },
    secondPlayerContribution: {
      runs: 1,
      balls: 1,
    },
  },
  {
    id: "c11ca541-6beb-11ed-a99f-43a8e8abd956",
    firstPlayer: "4b5db8d0-7aeb-11ed-9a2f-fb420a2614cf",
    secondPlayer: "2e267950-7aeb-11ed-9a2f-fb420a2614cf",
    firstPlayerContribution: {
      runs: 6,
      balls: 1,
    },
    secondPlayerContribution: {
      runs: 9,
      balls: 4,
    },
  },
  {
    id: "c11ca541-6beb-11ed-a99f-43a8e8abd956",
    firstPlayer: "4b5db8d0-7aeb-11ed-9a2f-fb420a2614cf",
    secondPlayer: "3af10290-7aeb-11ed-9a2f-fb420a2614cf",
    firstPlayerContribution: {
      runs: 10,
      balls: 3,
    },
    secondPlayerContribution: {
      runs: 1,
      balls: 1,
    },
  },
];

const score = {
  striker: {
    userId: "4b5db8d0-7aeb-11ed-9a2f-fb420a2614cf",
    name: "ankit",
    runs: 11,
    balls: 4,
  },
  nonStriker: {
    userId: "3af10290-7aeb-11ed-9a2f-fb420a2614cf",
    name: "sagar",
    runs: 1,
    balls: 1,
  },
};

const getPlayerContribution = ({ partnerships, player }) => {
  let { runs, balls } = player;
  partnerships.forEach((partnership) => {
    if (partnership.firstPlayer === player.userId) {
      runs -= partnership.firstPlayerContribution.runs;
      balls -= partnership.firstPlayerContribution.balls;
    }
    if (partnership.secondPlayer === player.userId) {
      runs -= partnership.secondPlayerContribution.runs;
      balls -= partnership.secondPlayerContribution.balls;
    }
  });
  return { runs, balls };
};

const modifyPartnership = ({ score, partnerships }) => {
  const firstPlayer =
    score.striker.userId === partnerships[0].firstPlayer
      ? score.striker.userId
      : score.nonStriker.userId;

  const secondPlayer =
    firstPlayer === score.striker.userId
      ? score.nonStriker.userId
      : score.striker.userId;

  let firstPlayerContribution;
  let secondPlayerContribution;
  if (firstPlayer === score.striker.userId) {
    firstPlayerContribution = getPlayerContribution({
      partnerships,
      player: score.striker,
    });
    secondPlayerContribution = getPlayerContribution({
      partnerships,
      player: score.nonStriker,
    });
  } else {
    firstPlayerContribution = getPlayerContribution({
      partnerships,
      player: score.nonStriker,
    });
    secondPlayerContribution = getPlayerContribution({
      partnerships,
      player: score.striker,
    });
  }

  const modifiedPartnershipData = [
    {
      firstPlayer,
      secondPlayer,
      firstPlayerContribution,
      secondPlayerContribution,
    },
  ];

  console.log("modifiedPartnershipData:::", modifiedPartnershipData);

  return modifiedPartnershipData;
};

const response = modifyPartnership({ score, partnerships });
