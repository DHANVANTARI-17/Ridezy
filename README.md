# 🚑 Aarogya Cabs


This project is an Ambulance Booking System that allows users to book ambulances, notifies ambulances within a 10km radius, and manages ride workflows. The system is built using **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.io** for real-time communication. Payment integration is also enabled for ride payments.

---

## **Features**

1. **User Features:**
   - Register and log in as a user.
   - Book an ambulance ride by providing pickup and destination addresses.
   - View estimated arrival time for the ambulance.
   - Make payments for rides.

2. **Ambulance Features:**
   - Register and log in as an ambulance driver.
   - Receive notifications for ride requests within a 10km radius.
   - Accept or reject ride requests.
   - Start and end rides.

3. **Real-Time Communication:**
   - Notifications are sent to ambulances within the radius using **Socket.io**.

4. **Geospatial Queries:**
   - MongoDB geospatial indexing is used to find ambulances within a 10km radius.

5. **Payment Integration:**
   - Users can securely pay for rides using the integrated payment system.

---

## **Workflow**

1. **User Books a Ride:**
   - The user provides pickup and destination addresses.
   - The system calculates the estimated arrival time.
   - Notifications are sent to all ambulances within a 10km radius.

2. **Ambulance Receives Notification:**
   - Ambulances in the radius receive a real-time notification.
   - An ambulance driver can accept the ride.

3. **Ride Confirmation:**
   - Once an ambulance accepts the ride, the user is notified.
   - The ride status is updated to "accepted."

4. **Ride Progress:**
   - The ambulance driver starts the ride after verifying the user.
   - The ride status is updated to "ongoing."

5. **Ride Completion:**
   - The ambulance driver ends the ride.
   - The ride status is updated to "completed."

6. **Payment:**
   - The user makes a payment for the completed ride.

---

## **API Endpoints**

### **User Routes**

| Method | Endpoint         | Description                  | Request Body                          |
|--------|------------------|------------------------------|---------------------------------------|
| POST   | `/users/register` | Register a new user          | `{ fullname, email, password }`       |
| POST   | `/users/login`    | Log in as a user             | `{ email, password }`                 |

---

### **Ambulance Routes**

| Method | Endpoint            | Description                     | Request Body                          |
|--------|---------------------|---------------------------------|---------------------------------------|
| POST   | `/ambulances/register` | Register a new ambulance driver | `{ fullname, email, password, vehicle: { plate, vehicleType } }` |
| POST   | `/ambulances/login`    | Log in as an ambulance driver   | `{ email, password }`                 |

---

### **Ride Routes**

| Method | Endpoint          | Description                     | Request Body                          |
|--------|-------------------|---------------------------------|---------------------------------------|
| POST   | `/rides/create`   | Create a new ride               | `{ pickup, destination, vehicleType }` |
| POST   | `/rides/confirm`  | Confirm a ride                  | `{ rideId }`                          |
| GET    | `/rides/start-ride` | Start a ride                   | Query: `{ rideId, otp }`              |
| POST   | `/rides/end-ride` | End a ride                      | `{ rideId }`                          |

---

## **Models**

### **1. User Model**
```javascript
const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
```

## How to Run the Project
### 1. Clone the Repository:

```bash
git clone <repository-url>
cd Uber_app
```
### 2. Install Dependencies
 * Backend
 ```bash
cd backend
npm install
```

* Frontend
``` bash
cd frontend
npm install
```

### 3. Set up environment variables
* Create a .env file in both backend and frontend directories.
* Backend .env
``` 
PORT=4000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
GOOGLE_MAPS_API=<your-google-maps-api-key>
```

* Frontend .env
```
VITE_SOCKET_URL=http://localhost:4000
```

### 4. Start the Backend:
```
cd backend
node server.js
```

### 5.Start the Frontend
```
cd frontend
npm run dev
```
### 6. Access the application
* Frontend: http://localhost:5173
* Backend: http://localhost:4000

## 🚀 Technologies Used  

### Backend  
- **Node.js** – JavaScript runtime environment for building scalable backend services.  
- **Express.js** – Web framework for handling API routes and middleware.  
- **MongoDB** – NoSQL database for storing user, driver, and ride information.  
- **Socket.io** – Real-time communication between passengers and drivers (live updates, confirmations).  

### Frontend  
- **React.js** – Component-based UI library for building dynamic user interfaces.  
- **Tailwind CSS** – Utility-first CSS framework for responsive and modern UI design.  

### Other Integrations  
- **Google Maps API** – Used for geocoding, auto-suggestions, and distance/time calculations.  
- **Payment Gateway Integration** – For secure ride fare payments.  

---

## 🔮 Future Enhancements  
- Add **ride cancellation functionality** for passengers and drivers.  
- Implement **real-time location tracking for ambulances** and safety-critical rides.  
- Enhance **error handling and input validation** for more robust APIs.  
- Introduce **emergency SOS feature** with live tracking and family notifications.  
