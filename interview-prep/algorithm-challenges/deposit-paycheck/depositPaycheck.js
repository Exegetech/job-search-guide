// Part 1

function depositPaycheck(accounts, paycheck){
    var receiptInfo = {};

    accounts.forEach((account, index) => {

        if (index === accounts.length - 1 || paycheck - account.amount < 0) {
            receiptInfo[account.accountType] = paycheck;
            paycheck = 0;
        }
        else {
            receiptInfo[account.accountType] = account.amount;
            paycheck -= account.amount;
        }

    });

    return Object.keys(receiptInfo).reduce((receipt, accountType, index) => {
        if (index) receipt += '\n';
        return `${receipt}Deposited ${receiptInfo[accountType]} into ${accountType}`;
    }, '');

}


// Part 2

function depositPaycheck(accounts, paycheck, splitType){
    var percentage = (splitType === 'percentage');
    var remainder = paycheck;
    var receiptInfo = {};

    accounts.forEach((account, index) => {

        if (index === accounts.length - 1 || remainder - account.amount < 0) {
            receiptInfo[account.accountType] = remainder;
            remainder = 0;
        }
        else {
            if (percentage) {
                receiptInfo[account.accountType] = paycheck * account.amount;
                remainder -= paycheck * account.amount;
            }
            else {
                receiptInfo[account.accountType] = account.amount;
                remainder -= account.amount;
            }
        }

    });

    return Object.keys(receiptInfo).reduce((receipt, accountType, index) => {
        if (index) receipt += '\n';
        return `${receipt}Deposited ${receiptInfo[accountType].toFixed(2)} into ${accountType}`;
    }, '');

}
