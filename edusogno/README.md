## Available Scripts

In the project directory, you can run:

## `npm run startDb`

Starts dummy json server (dummy db)
Endpoints:
http://localhost:3001/Users
http://localhost:3001/Events

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Dummy Data

Please check dummydb.json check
{
"Users": [
{
"userId": 1,
"firstName": "Marco",
"lastName": "Rossi",
"email": "ulysses200915@varen8.com",
"password": "hello",
"role": "user",
"id": "9959"
},
{
"userId": 2,
"firstName": "Filippo",
"lastName": "D’Amelio",
"email": "qmonkey14@falixiao.com",
"password": "Edusogno?123",
"role": "user",
"id": "2d86"
},
{
"userId": 3,
"firstName": "Gian Luca",
"lastName": "Carta",
"email": "mavbafpcmq@hitbase.net",
"password": "EdusognoCiao",
"role": "admin",
"id": "73b7"
},
{
"userId": 4,
"firstName": "Stella",
"lastName": "De Grandis",
"email": "dgipolga@edume.me",
"password": "EdusognoGia",
"role": "admin",
"id": "8c2a"
},
{
"id": "f0f9",
"firstName": "Kingsley",
"lastName": "Amankwa",
"email": "profnird@gmail.com",
"password": "hello",
"role": "user"
}
],
"Events": [
{
"title": "Edusogno Code Task",
"event_date": "2-3-2024",
"event_url": "https//:google.com",
"userId": 1,
"id": "0805"
},
{
"id": "f18b",
"title": "another test",
"event_date": "2024-05-03",
"event_url": "dadfad"
},
{
"id": "ee8e",
"title": "Bright",
"event_date": "2024-04-12",
"event_url": "adadsfa"
},
{
"id": "e2df",
"title": "Another Test",
"event_date": "2024-04-26",
"event_url": "adfas"
},
{
"id": "8fae",
"title": "All is God",
"event_date": "2024-04-24",
"event_url": "adfas"
},
{
"id": "9aac",
"title": "JESUS",
"event_date": "2024-04-01",
"event_url": "asdfaewere"
},
{
"id": "6504",
"title": "Mama",
"event_date": "2024-04-26",
"event_url": "asdfasdfas"
}
]
}

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
