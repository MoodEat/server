# MoodEat &copy; 2020
### Created by :
1. Muhammad Hilmi Muharromi
2. Ulfa Hasanah
3. Andreas Nandiwardhana
4. Hikmani Syariful Fajar

### Description :
MoodEat comes to help you to answer the age-old question, "What should I eat?". This app can match your mood to food and help you to get restaurant recommendations based on your mood, so you can decide what kind of food to eat and where places to eat. 
The user will take a photo, and then the app can detect the mood based on the picture. After that, the user will be provided with food options and closest restaurants to their location. 

The front-end team consisted of Hilmi and Arda, and the technology utilized includes: React, React Native, React Navigation, Redux, Expo, Cloudinary, and UI Kitten.
The back-end team consisted of Ipul and Ulfa, and the technology utilized includes: NodeJS, ExpressJS, MongoDB Atlas, Mongoose, Jest, and AWS EC2.

***

### **Register**

* **URL**

    _/register_

* **Method**

  `POST`

* **Headers**
  **Required**

  None

* **Data Body**

  `name=[string]`<br>
  `email=[string]` <br>
  `password=[string]`

* **Data Params**

    None

* **Success Response**
  * **Code:** 201
  * **Content:**
    ```javascript
    {
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWU2ZTFjMWJjY2I3MDY4NWMwOThhMCIsImVtYWlsIjoiZmFAbWFpbC5jb20iLCJpYXQiOjE1ODc0NDExODB9.3EX22djxv2x43muEvyVGU4X1cYuj6B8REOmPyvPu9pM"
    }
    ````
    OR

* **Error Response**
  * **Code:** 400
  * **Content:** 
    ```javascript
    {
        "message": "Your email address has been registered"
    }
    ```

### **Login**

* **URL**

    _/login_

* **Method**

  `POST`

* **Headers**
  **Required**

  None

* **Data Body**

  `email=[string]`<br>
  `password=[string]`

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    { 
      "token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoidWxmYUBtYWlsLmNvbSIsImlhdCI6MTU4NDQyMjc4Nn0.ClB3bSC9FQpGBhwOItswZMpRQVOa0o6sLYYgk6vOVK8'
    }
    ````
    OR

* **Error Response**
  * **Code:** 400
  * **Content:** 
    ```javascript
    {
      "message": "Email or password is wrong" 
    }
    ```
---
### **Show food for anger mood**

* **URL**

    _/anger_

* **Method**

  `GET`

* **Headers**
  **Required**

    None

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9a555e0196acce7767916f",
            "food": "Hotdog",
            "image": "https://i.imgur.com/OhRj8Ct.jpg"
        },
        {
            "_id": "5e9a555e0196acce77679170",
            "food": "Ayam Geprek",
            "image": "https://i.imgur.com/yQeRJ7S.jpg"
        },
        {
            "_id": "5e9a555e0196acce77679171",
            "food": "Rujak",
            "image": "https://i.imgur.com/p3KQZ63.jpg"
        },
        {
            "_id": "5e9a555e0196acce77679172",
            "food": "Seblak",
            "image": "https://i.imgur.com/M8K1Q1X.jpg"
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error" 
    }
    ```

### **Show food for contempt mood**

* **URL**

    _/contempt_

* **Method**

  `GET`

* **Headers**
  **Required**

    None

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9a55940a4e6e0c9b53c97d",
            "food": "Ketoprak",
            "image": "https://i.imgur.com/mEtNt7n.jpg"
        },
        {
            "_id": "5e9a55940a4e6e0c9b53c97e",
            "food": "Nasi Padang",
            "image": "https://i.imgur.com/zd6WI8p.jpg"
        },
        {
            "_id": "5e9a55940a4e6e0c9b53c97f",
            "food": "Ramen",
            "image": "https://i.imgur.com/QXT8htm.jpg"
        },
        {
            "_id": "5e9a55940a4e6e0c9b53c980",
            "food": "Gorengan",
            "image": "https://i.imgur.com/RHJMIxv.jpg"
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error" 
    }
    ```

### **Show food for disgust mood**

* **URL**

    _/disgust_

* **Method**

  `GET`

* **Headers**
  **Required**

    None

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9a55dfe28488bf729138af",
            "food": "Sushi",
            "image": "https://i.imgur.com/RQBe6Qz.jpg"
        },
        {
            "_id": "5e9a55dfe28488bf729138b0",
            "food": "Bakpia",
            "image": "https://i.imgur.com/8w9rgjQ.jpg"
        },
        {
            "_id": "5e9a55dfe28488bf729138b1",
            "food": "Omelette",
            "image": "https://i.imgur.com/edNMFCC.jpg"
        },
        {
            "_id": "5e9a55dfe28488bf729138b2",
            "food": "Rawon",
            "image": "https://i.imgur.com/TZGSEtO.jpg"
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error" 
    }
    ```

### **Show food for fear mood**

* **URL**

    _/fear_

* **Method**

  `GET`

* **Headers**
  **Required**

    None

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9a56099d536caadd8e68eb",
            "food": "Bakmi",
            "image": "https://i.imgur.com/1J8a9de.jpg"
        },
        {
            "_id": "5e9a56099d536caadd8e68ec",
            "food": "Sate",
            "image": "https://i.imgur.com/NdKyy4f.jpg"
        },
        {
            "_id": "5e9a56099d536caadd8e68ed",
            "food": "Nasi Goreng",
            "image": "https://i.imgur.com/5kom7yX.jpg"
        },
        {
            "_id": "5e9a56099d536caadd8e68ee",
            "food": "Spaghetty",
            "image": "https://i.imgur.com/ekdV0ZV.jpg"
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error" 
    }
    ```

### **Show food for happiness mood**

* **URL**

    _/happiness_

* **Method**

  `GET`

* **Headers**
  **Required**

    None

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9a48d791ec05bde9ce885e",
            "food": "Pie",
            "image": "https://i.imgur.com/De6r0OG.jpg"
        },
        {
            "_id": "5e9a48d791ec05bde9ce885f",
            "food": "Brownies",
            "image": "https://i.imgur.com/nVxUkbd.jpg"
        },
        {
            "_id": "5e9a48d791ec05bde9ce8860",
            "food": "Ice Cream",
            "image": "https://i.imgur.com/ZE5M1ls.jpg"
        },
        {
            "_id": "5e9a48d791ec05bde9ce8861",
            "food": "Chocolate",
            "image": "https://i.imgur.com/k5u1g1n.jpg"
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error" 
    }
    ```

### **Show food for neutral mood**

* **URL**

    _/neutral_

* **Method**

  `GET`

* **Headers**
  **Required**

    None

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9a552bb99ed38a860e3207",
            "food": "Pudding",
            "image": "https://i.imgur.com/QLgZqvI.jpg"
        },
        {
            "_id": "5e9a552bb99ed38a860e3208",
            "food": "Seafood",
            "image": "https://i.imgur.com/gpWyA0m.jpg"
        },
        {
            "_id": "5e9a552bb99ed38a860e3209",
            "food": "Soto",
            "image": "https://i.imgur.com/TzNmkjI.jpg"
        },
        {
            "_id": "5e9a552bb99ed38a860e320a",
            "food": "Donuts",
            "image": "https://i.imgur.com/aI1X9Sv.jpg"
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error" 
    }
    ```

### **Show food for sadness mood**

* **URL**

    _/sadness_

* **Method**

  `GET`

* **Headers**
  **Required**

    None

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9a53e3f94d2793c9f6e39a",
            "food": "Gado-gado",
            "image": "https://i.imgur.com/R3LWEvn.jpg"
        },
        {
            "_id": "5e9a53e3f94d2793c9f6e39b",
            "food": "Somay",
            "image": "https://i.imgur.com/Harpe0b.jpg"
        },
        {
            "_id": "5e9a53e3f94d2793c9f6e39c",
            "food": "Kebab",
            "image": "https://i.imgur.com/xUbQSPj.jpg"
        },
        {
            "_id": "5e9a53e3f94d2793c9f6e39d",
            "food": "Bubur",
            "image": "https://i.imgur.com/KgDOnUu.jpg"
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error" 
    }
    ```

### **Show food for surprise mood**

* **URL**

    _/surprise_

* **Method**

  `GET`

* **Headers**
  **Required**

    None

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9a546b3ecdcca967f3c7ee",
            "food": "Burger",
            "image": "https://i.imgur.com/SNafu5z.jpg"
        },
        {
            "_id": "5e9a546b3ecdcca967f3c7ef",
            "food": "Pizza",
            "image": "https://i.imgur.com/K6AXtBE.jpg"
        },
        {
            "_id": "5e9a546b3ecdcca967f3c7f0",
            "food": "Martabak",
            "image": "https://i.imgur.com/6Lwtz3k.jpg"
        },
        {
            "_id": "5e9a546b3ecdcca967f3c7f1",
            "food": "Popcorn",
            "image": "https://i.imgur.com/leraQVJ.jpg"
        },
        {
            "_id": "5e9a546b3ecdcca967f3c7f2",
            "food": "cake",
            "image": "https://i.imgur.com/fKb2Mkj.jpg"
        }
    ]
    ```
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error" 
    }
    ```
---
### **Show restaurant recommedations**

* **URL**

    _/restaurant_

* **Method**

    `GET`

* **Headers**
  **Required**

    `lat=[double]`<br>
    `longitude=[double]`

* **Data Body**

    None

* **Data Params**

    `food=[string]`

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "idRestaurant": "7423435",
            "name": "Bakso Bakwan Malang & Nasi Rawon M. Suyudi",
            "url": "https://www.zomato.com/jakarta/bakso-bakwan-malang-nasi-rawon-m-suyudi-klender?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
            "address": "Jl. Buaran 3 No. 45, Klender, Jakarta",
            "locality": "Klender",
            "city": "Jakarta",
            "city_id": 74,
            "latitude": "-6.2204343521",
            "longitude": "106.9196212292",
            "zipcode": "",
            "country_id": 94,
            "locality_verbose": "Klender, Jakarta"
            },
            "photo_url": "https://b.zmtcdn.com/data/reviews_photos/25c/307f6d6e079e9efbf4429ba23ff9025c_1437635982.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            "idRestaurant": "19077296",
            "name": "Gudeg & Rawon Karunia",
            "url": "https://www.zomato.com/jakarta/gudeg-rawon-karunia-jatinegara?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
            "address": "City Plaza Jatinegara, Lantai 2, Food Connection, Jl Matraman Raya No 173, Jatinegara, Jakarta",
            "locality": "City Plaza Jatinegara, Jatinegara",
            "city": "Jakarta",
            "city_id": 74,
            "latitude": "-6.2140392449",
            "longitude": "106.8643177673",
            "zipcode": "",
            "country_id": 94,
            "locality_verbose": "City Plaza Jatinegara, Jatinegara, Jakarta"
            },
            "photo_url": ""
        },
        {
            "idRestaurant": "18676482",
            "name": "Rawon Ireng Suroboyo",
            "url": "https://www.zomato.com/jakarta/rawon-ireng-suroboyo-1-manggarai?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
            "address": "Pasaraya Manggarai, Lantai Basement, DAPURAYA, Jl. Sultan Agung No. 1, Manggarai, Jakarta",
            "locality": "Pasaraya Manggarai, Manggarai",
            "city": "Jakarta",
            "city_id": 74,
            "latitude": "-6.2095409252",
            "longitude": "106.8470259011",
            "zipcode": "",
            "country_id": 94,
            "locality_verbose": "Pasaraya Manggarai, Manggarai, Jakarta"
            },
            "photo_url": ""
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "message": "Internal Server Error"
    }
    ```

### **Add restaurant to Favorites**

* **URL**

    _/favorites_

* **Method**

  `POST`

* **Headers**
  **Required**

  `token`

* **Data Body**

  `restaurantId=[integer]`

* **Data Params**

    None

* **Success Response**
  * **Code:** 201
  * **Content:**
    ```javascript
    {
        "_id": "5e9e99471bccb70685c098ac",
        "idRestaurant": 7423435,
        "name": "Bakso Bakwan Malang & Nasi Rawon M. Suyudi",
        "url": "https://www.zomato.com/jakarta/bakso-bakwan-malang-nasi-rawon-m-suyudi-klender?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
            "address": "Jl. Buaran 3 No. 45, Klender, Jakarta",
            "locality": "Klender",
            "city": "Jakarta",
            "city_id": 74,
            "latitude": "-6.2204343521",
            "longitude": "106.9196212292",
            "zipcode": "",
            "country_id": 94,
            "locality_verbose": "Klender, Jakarta"
        },
        "photo_url": "https://b.zmtcdn.com/data/reviews_photos/25c/307f6d6e079e9efbf4429ba23ff9025c_1437635982.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "UserId": "5e9d31ed743ec106327ff5cd",
        "__v": 0
    }
    ````
    OR

* **Error Response**
  * **Code:** 404
  * **Content:** 
    ```javascript
    {
      "message": "Please login first" 
    }
    ```


### **Get favorite restaurant**

* **URL**

    _/favorites_

* **Method**

  `GET`

* **Headers**
  **Required**

  `token`

* **Data Body**

    None

* **Data Params**

    None

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    [
        {
            "_id": "5e9e98ee1bccb70685c098ab",
            "idRestaurant": 7423435,
            "name": "Bakso Bakwan Malang & Nasi Rawon M. Suyudi",
            "url": "https://www.zomato.com/jakarta/bakso-bakwan-malang-nasi-rawon-m-suyudi-klender?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
            "address": "Jl. Buaran 3 No. 45, Klender, Jakarta",
            "locality": "Klender",
            "city": "Jakarta",
            "city_id": 74,
            "latitude": "-6.2204343521",
            "longitude": "106.9196212292",
            "zipcode": "",
            "country_id": 94,
            "locality_verbose": "Klender, Jakarta"
            },
            "photo_url": "https://b.zmtcdn.com/data/reviews_photos/25c/307f6d6e079e9efbf4429ba23ff9025c_1437635982.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "UserId": "5e9d31ed743ec106327ff5cd",
            "__v": 0
        }
    ]
    ````
    OR

* **Error Response**
  * **Code:** 404
  * **Content:** 
    ```javascript
    {
      "message": "There isn't favorite restaurant"
    }
    ```

### **Delete favorite restaurant**

* **URL**

    _/favorites_

* **Method**

  `DELETE`

* **Headers**
  **Required**

  `token`

* **Data Body**

    None

* **Data Params**

    `id=[string]`

* **Success Response**
  * **Code:** 200
  * **Content:**
    ```javascript
    {
        "message": "Restaurant has been deleted from favorites"
    }
    ````
    OR

* **Error Response**
  * **Code:** 404
  * **Content:** 
    ```javascript
    {
        "message": "No restaurant found"
    }
    ```  