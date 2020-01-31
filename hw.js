const protsentRegular = 0.01;
const protsentIncreased = 0.05;
const protsentSpecial = 0.3;
const cashbackLimit = 3000;
const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special'; 

const  purchases = [
    {
    amount: 1510,
    category: REGULAR_CATEGORY,
    },
    {
        amount: 274,
        category: INCREASED_CATEGORY,
    },
    {
        amount: 1245,
        category: SPECIAL_CATEGORY,
    },
];

let cashback = 0;

 for(const purchase of purchases){
    if (purchase.category == REGULAR_CATEGORY){
        cashback = protsentRegular * purchase.amount[0], REGULAR_CATEGORY;
    } else if (purchase.category == INCREASED_CATEGORY){
        cashback = protsentIncreased * purchase.amount[1], INCREASED_CATEGORY;
    } else if (purchase.category == SPECIAL_CATEGORY){
        cashback = protsentSpecial * purchase.amount[2], SPECIAL_CATEGORY;
    }  
 }


if (cashback > cashbackLimit) {
     cashback = cashbackLimit
};

 console.log(cashback +'somon');



//9.1
{
    const PURCHASES = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 3000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 3000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 3000, category: 'food'},
    ]},
];

const max = PURCHASES.map(o => ({
    date: o.date,
    count: o.values.length
})).reduce((acc, curr) => acc.count > curr.count ? acc : curr);

const result = max.date;
console.log(result);
}
//9.2


{

    const PURCHASES = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 1000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 5000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 4000, category: 'food' }
    ]},
];

const MaxAmountInDay = PURCHASES.map((o => ({
    date: o.date,
    amount: o.values.reduce((acc, curr) => acc + curr.amount, 0)
}))).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr);



const result2 = MaxAmountInDay.date;
console.log(result2);

// 9.3



const demo = PURCHASES.map(o =>o.values)
    .flat()
    .reduce((acc,curr) => acc.amount > curr.amount ? acc:curr)
    ;
console.log(demo);


//9.4

const findMaxCategory = PURCHASES.map(o => o.values)
    .flat()
    .reduce((acc, curr) => {
        const  comparisonCtategory = acc.find(o => o.category === curr.category)
        if (comparisonCtategory === undefined){
            acc.push({
                category: curr.category,
                amount: curr.amount
            });
        }
        else
        {
        comparisonCtategory.amount += curr.amount
        
}
return acc;
    }, []).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr)


console.log(findMaxCategory);

//9.5


const meanAmountInDay = PURCHASES.map(o => o.values)
.flat()
.map((o, index, array) => o.amount / array.length
).reduce((acc, curr) => acc + curr)

console.log(meanAmountInDay);




///9.6


const statisticForDay = PURCHASES.map(o => ({
    data: o.date,
    amount: o.values.map(a => a.amount).reduce((acc, curr) => acc + curr)
}));

console.log(statisticForDay);


//9.7


const cutlyStatistick = PURCHASES.map(o => o.values)
.flat()
.reduce((acc, curr) => {
    const  comparisonCtategory = acc.find(o => o.category === curr.category)
    if (comparisonCtategory === undefined){
        acc.push({
            category: curr.category,
            amount: curr.amount
        });
    }
    else
    {
    comparisonCtategory.amount += curr.amount
    
}
return acc;
}, [])


console.log(cutlyStatistick);
}