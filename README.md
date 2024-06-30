# #Mern Project Blood Bank Management System

### Welcome to the Blood Bank Management System, a web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application aims to streamline the management of blood banks by providing features for donors, recipients, and administrators.

# # Authors : -

### ● Sanskriti Dwivedi
- ROll NO. 22015002322

### ● Om Chaturvedi
- ROll NO.  22015002302 

### ● Himanshu Gupta
- ROll NO. 22015002280

### ● Gaurav Nishad
- ROll NO.  2215002273

# #Table Of Contents :-

### ● Introduction

### ● Features

### ● Technologies Used

### ● Installation

### ● Configuration

### ● Usage

### ● API Reference

### ● API Documentation

### ● Folder Structure

### ● Contrubution

### ● Contacts

# #Features :-

### ● Donor Management : Register and manage donor information.

### ● Recipient Management : Register and manage recipient information.

### ● Blood Inventory : Track and manage blood stock levels.

### ● Recipient Management : Register and manage recipient information.

### ● Blood Requests : Create and manage blood donation and transfusion requests.

### ● User Authentication : Secure user authentication and authorization.

### ● Admin Dashboard : Admin panel for managing the system.

### ● Search Functionality : Search for donors and blood types.

### ● Notifications : Email and SMS notifications for donors and recipients.

# #Technologies Used :-

![Node.js & express](https://qualitapps.com/wp-content/uploads/2023/02/102-300x200.png)

![MongoDB](https://img.icons8.com/color/120/000000/mongodb.png)
![React](https://img.icons8.com/color/120/000000/react-native.png)
![CSS](https://img.icons8.com/?size=120&id=21278&format=png&color=000000/css.png)
![jwt](https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000/TWT.png)

### ● Backend: Node.js, Express.js

### ● Database: MongoDB

### ● Authentication: JWT (JSON Web Tokens)

### ● Styling: CSS, Bootstrap

### ● Others: Axios, Mongoose

# # Installation :-

### Follow these steps to set up the project on your local machine :-

## Prerequisites :-

### ● Node.js

### ● MongoDB

### ● GIT

## Please Folows the steps : -

### 1. Clone the Repository :-

```bash
git clone https://github.com/Gaurav11oo/Project_Blood_Bank_Management_System.git

cd blood-bank-management-system
```

### 2. Install Backend Dependencies :-

```bash
cd backend
npm start
```

### 3. Install Frontend Dependencies :-

```bash
cd backend
npm start
```

# # Configuration :-

### 1. Backend Confuguration :-

### ● Create a .env file in the backend directory with the following content:-

```env
PORT=5000
DEV_MODE = development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service_provider
```

## 2. Frontend Configuration:-

```
REACT_APP_API_URL=http://localhost:5000/api

```

# #Usage :-

## <i> 1. Start The Backend Server :-

```
cd backend
npm start

```

## 2. Start The Frontend Development :-

```
cd client
npm start

```
## 3. To Start The Backend Server & Frontend Development at same time:- 

```
cd client
npm run dev.

```
</i>
## 4. Open your browser and navigate to http://localhost:3000 to access the application.

# #API Reference

### ● To login

```http
  GET /api/auth
```

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| Email     | `string` | **Required**. Your Email    |
| Password  | `string` | **Required**. Your Password |

### ● To Register

```http
  Post /api/auth
```

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| role      | `string` | **Required**. Your Role                           |
| name      | `string` | **Required**. Your Name                           |
| email     | `string` | **Required**. Your Email                          |
| password  | `string` | **Required**. Make password                       |
| Website   | `string` | Your website only for hospitals and organisations |
| Address   | `string` | **Required**. Your Address                        |
| Phone     | `string` | **Required**. Your Phone No.                      |

### ● To Add Inventory

```http
  POST /api/inventory
```

| Parameter     | Type     | Description                                      |
| :------------ | :------- | :----------------------------------------------- |
| inventoryType | `string` | **Required**. Choose Inventory Type In or out    |
| bloodGroup    | `string` | **Required**. Choose blood group from list       |     
| quantity      | `Int32`  | **Required**. Blood quantity                     |
| email         | `string` | **Required**. Donar's Email who already register |

# # API Documentaion:-
   ### ● [Documentation](https://documenter.getpostman.com/view/36462454/2sA3duHDZ8#56c799b1-0b16-4724-87b9-a1a9b4630048)


<!-- 
# #API Endpoints :-

## Authentication :

### ● POST /api/auth/register : Register a new user

### ● POST /api/auth/login : User Login

## Donars :

### ● GET /api/donars : Get all donars

### ● POST /api/donar : Add a new donar

### ● GET /api/donar : GET donar by id

## Blood Inventory :

### ● GET /api/inventory : Get all blood types

### ● POST /api/donar : Add a new donar

### ● GET /api/donar : GET donar by id
 -->


<!--
## Requests :

### ● GET /api/ : Get all blood types

### ● POST /api/donar : Add a new donar

### ● GET /api/donar : GET donar by id -->
<!-- 
## Administrator :

### ● GET /api/inventory : Get ALL all blood records

### ● GET /api/donars : Get all donars records

### ● GET /api/hospitals : Get all hospitals records

### ● GET /api/ORG : Get all Organisation records

### ● DELETE /api/ : Admin can delete any specifics records -->

# #Folder Structure :-

```
blood-bank-management-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── client/
│   ├── public/
|   |     |── assets/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── index.css/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│   └── package.json
├── README.md
└── .gitignore

```

# # To Contact Me :-

### ● Name : GAURAV NISHAD

### ● GitHub : [Gaurav11oo](https://github.com/Gaurav11oo/)

### ● LinkedIn : [GAURAV NISHAD](https://www.linkedin.com/in/gaurav-nishad-6682b1198?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ2pjxU5NRvySSfV2sAoTDw%3D%3D)


