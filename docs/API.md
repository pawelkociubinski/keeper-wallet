*GET* app/V1/balance
```
{
  date: [10.01.2018, 17.01.2018],     // Array<String>
  categories: [
    {
      id: 1,                          // Number
      name: "pets",                   // String
      icon: "animal",                 // String
      color: "red",                   // String
      value: -20                      // Number
    },
    {...}
  ],                                  // Array<Object>
  details: [
    {
      category_id: 1,                 // Number
      transfers: [
        {
          expense: 20,                // Number
          date: 12.01.2018            // String
        },
        {...}
      ]                               // Array<Object>
    },
    {...}
  ]                                   // Array<Object>
}
```

*POST* app/V1/new_income
```
{
  price: 23,32 // Number,
  date: 30.01.2018 // Date,
  category: String // "",
  description: String,
  account: "gotówka"// String
}
```

*POST* app/V1/new_expense
```
{
  price: 23,32 // Number,
  date: 30.01.2018 // Date,
  category: String // "",
  description: String,
  account: "gotówka"// String
}
```
