# Late Plate — Restaurant Booking App

Late Plate is a collaborative project developed by our assigned group during the final stage of the Northcoders bootcamp. Designed to simulate a real working environment, the project allowed us to gain valuable exposure to **Agile practices**, including participation in **stand-ups**, **sprint planning**, and regular feature reviews. This helped us efficiently deliver the **Minimum Viable Product (MVP)**. The app enables users to discover and book nearby restaurants with seamless interaction and real-time features.

The app is built using **React Native**, **Expo Router**, and **Supabase** to handle user authentication, dynamic navigation, and real-time restaurant bookings. **Supabase RPCs** power the app's core functionality, including table availability checks, filtering, and making reservations.
---

Demo Video

Watch the demo video for the app and its accompanying website [here](https://northcoders.com/project-phase/late-plate)

---

## **Key Features**

### **Dynamic Navigation with Expo Router**
- The app uses **dynamic file paths** powered by **Expo Router**, enabling efficient navigation across pages. This structure supports scalability and clean organization of features.

### **User Authentication**
- **Supabase Authentication** manages secure user login and registration.
- **Session management** ensures users stay logged in across sessions, reducing the need for repeated logins.

### **Interactive Map Integration**
- The centerpiece of the main page is an interactive map built with **react-native-maps** and **expo-location**.
- Users can view nearby restaurants in real time, with the map updating dynamically based on filtering criteria.

### **Restaurant Booking System**
- The booking feature, a critical part of the MVP, uses **Supabase RPCs** for efficient, real-time database interactions:
  - `check_table_availability` for booking validation.
  - `filter_restaurants` for real-time sorting and discovery.
  - `make_reservation` for seamless booking integration.

### **Real-Time Filtering**
- The map and restaurant list update dynamically based on user-applied filters, providing a seamless and responsive experience.

---

## **Technologies Used**

### **Frontend**
- **React Native**: Core framework for cross-platform mobile development.
- **Expo Router**: Enables dynamic navigation and efficient file-based routing.
- **react-native-maps**: Provides interactive geolocation and marker features.
- **expo-location**: Facilitates real-time location updates.

### **Backend**
- **Supabase**:
  - Handles user authentication, registration, and session persistence.
  - Leverages **RPCs** for optimized server-side logic:
    - `check_table_availability` for booking validation.
    - `filter_restaurants` for real-time sorting and discovery.
    - `make_reservation` for seamless booking integration.

---

## **Development Experience**

This project provided hands-on exposure to:

- **Agile practices**: Participation in daily stand-ups and sprint planning sessions.
- **Collaborative workflows**: Code reviews, pair programming, and task delegation.
- **Real-world challenges**: Building features incrementally while managing scope and prioritizing functionality.

---

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/PerryCole96/late-plate-customer-app
   cd late-plate-customer-app
