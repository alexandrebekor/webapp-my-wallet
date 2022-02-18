const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sum = functions.database
  .ref("/transactions/{date}")
  .onWrite(async (change, context) => {
    const refMonth = admin.database().ref("/report/" + context.params.date);
    const refTransactions = change.after.ref;
    const snapShotTransactions = await refTransactions.once("value");
    const transactions = snapShotTransactions.val();

    let input = 0;
    let output = 0;

    Object.keys(transactions).forEach((record) => {
      if (transactions[record].price > 0) {
        input += parseFloat(transactions[record].price);
      } else {
        output += parseFloat(transactions[record].price);
      }
    });

    return refMonth.transaction((current) => {
      if (current === null) {
        return {
          input,
          output,
          prevision_input: 0,
          prevision_output: 0,
        };
      }

      return {
        ...current,
        input,
        output,
      };
    });
  });
