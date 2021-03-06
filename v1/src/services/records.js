const Record = require("../models/records");

/**
 * @description Fetch records according to request from the database
 * @param       {object} where
 * @return      {Aggregate<Array<any>>}
 */
const list = (where) => {
  return Record.aggregate([
    {
      $project: {
        _id: 0,
        key: "$key",
        createdAt: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
        totalCount: { $sum: "$counts" },
      },
    },
    {
      $match: {
        $and: [
          { createdAt: { $gte: where.startDate, $lte: where.endDate } },
          { totalCount: { $gte: where.minCount, $lte: where.maxCount } },
        ],
      },
    },
  ]);
};

module.exports = {
  list,
};
