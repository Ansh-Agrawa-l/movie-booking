# Movie Booking App

## Overview
A full-stack movie booking application that allows users to search for movies, book tickets, manage bookings, and process payments. Admins (Theater Owners) can manage theaters, screens, movies, and ticket pricing.

## Features
### Functional Requirements
#### 1. User Roles & Authentication
##### Customers:
- Search for movies based on title, location, or time.
- Select a theater and showtime.
- Choose and book available seats.
- View past and upcoming bookings.

##### Admins (Theater Owners):
- Add new movies.
- Manage theaters and screens.

#### 2. Movie Management
- Each movie has a title, genre, duration, and language.
- A movie can be available in multiple theaters at different times.

#### 3. Theater & Screen Management
- Each screen has a fixed number of seats.
- Showtimes are assigned to screens.

#### 4. Booking & Seat Selection
- Users can select seats from the available ones.
- Once booked, a seat cannot be double-booked.
- Bookings must be linked to users for retrieval.

## Installation & Setup
### Prerequisites
- Node.js & npm
- MongoDB (or any other database of choice)

### Steps to Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Ansh-Agrawa-l/movie-booking.git
   cd movie-booking
   ```

2. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```

3. Set up environment variables in a `.env` file for the backend:
   ```sh
   # Server Configuration
   PORT=8000

   # MongoDB Configuration
   MONGO_URL=<your_mongodb_connection_string>
   DB_NAME=moviebooking

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   NEXT_PUBLIC_BACKEND_API=http://localhost:8000

   # JWT Secret Keys
   JWT_SECRET_KEY=<your_jwt_secret_key>
   JWT_REFRESH_SECRET_KEY=<your_jwt_refresh_secret_key>
   JWT_ADMIN_SECRET_KEY=<your_jwt_admin_secret_key>
   ```

4. Start the backend server:
   ```sh
   nodemon index.js
   ```

5. Navigate to the frontend folder and install dependencies:
   ```sh
   cd ../frontend
   npm install
   ```

6. Set up environment variables in `.env.local` for the frontend:
   ```sh
   NEXT_PUBLIC_BACKEND_API=http://localhost:8000
   JWT_SECRET_KEY=<your_jwt_secret_key>
   JWT_REFRESH_SECRET_KEY=<your_jwt_refresh_secret_key>
   ```

7. Start the frontend:
   ```sh
   npm run dev
   ```

8. Navigate to the admin panel folder and install dependencies:
   ```sh
   cd ../admin
   npm install
   ```

9. Set up environment variables in `.env.local` for the admin panel:
   ```sh
   NEXT_PUBLIC_BACKEND_API=http://localhost:8000
   JWT_SECRET_KEY=<your_jwt_secret_key>
   JWT_REFRESH_SECRET_KEY=<your_jwt_refresh_secret_key>
   ```

10. Start the admin panel:
    ```sh
    npm run dev
    ```

## How to Run the Application
1. Ensure MongoDB is running.
2. Start the backend server: `nodemon index.js`
3. Start the frontend: `npm run dev` in the `frontend` folder.
4. Start the admin panel: `npm run dev` in the `admin` folder.
5. Access the application via `http://localhost:3000` in the browser.

## Technologies Used
- **Frontend**: Next.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT


