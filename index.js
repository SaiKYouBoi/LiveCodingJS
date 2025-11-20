let spaceData = {
  "destinations": [
    {
      "id": 1,
      "name": "Moon Base Alpha",
      "type": "moon",
      "basePrice": 50000,
      "duration": 3,
      "distance": "384,400 km",
      "description": "Experience low-gravity walking and stunning Earth views from our lunar habitat",
      "capacity": 20,
      "available": true,
      "features": ["Low-gravity walking", "Earth views", "Lunar rover tours"],
      "departures": ["2024-03-15", "2024-04-10", "2024-05-05"]
    },
    {
      "id": 2,
      "name": "Mars Colony One", 
      "type": "planet",
      "basePrice": 250000,
      "duration": 21,
      "distance": "225M km",
      "description": "The ultimate red planet adventure with extended stay in our advanced habitat",
      "capacity": 12,
      "available": true,
      "features": ["Red planet exploration", "Habitat living", "Martian geology studies"],
      "departures": ["2024-06-01", "2024-08-15", "2024-10-20"]
    },
    {
      "id": 3,
      "name": "International Space Station",
      "type": "station",
      "basePrice": 35000,
      "duration": 2,
      "distance": "408 km",
      "description": "Orbital research station experience with zero-gravity experiments",
      "capacity": 8,
      "available": false,
      "features": ["Zero-gravity", "Earth observation", "Scientific experiments"],
      "departures": ["2024-02-20", "2024-03-25", "2024-04-30"]
    },
    {
      "id": 4,
      "name": "Venus Cloud City",
      "type": "planet",
      "basePrice": 180000,
      "duration": 14,
      "distance": "261M km",
      "description": "Floating habitats in the upper atmosphere with breathtaking views",
      "capacity": 15,
      "available": true,
      "features": ["Cloud city living", "Atmospheric studies", "Sunset views"],
      "departures": ["2024-07-10", "2024-09-05", "2024-11-15"]
    },
    {
      "id": 5,
      "name": "Jupiter's Europa",
      "type": "moon",
      "basePrice": 750000,
      "duration": 60,
      "distance": "628M km",
      "description": "Explore the icy moon with potential for life beneath the surface",
      "capacity": 6,
      "available": true,
      "features": ["Ice exploration", "Subsurface research", "Jupiter views"],
      "departures": ["2024-12-01", "2025-03-15"]
    },
    {
      "id": 6,
      "name": "Saturn's Titan",
      "type": "moon",
      "basePrice": 600000,
      "duration": 45,
      "distance": "1.2B km",
      "description": "Visit the only moon with a dense atmosphere and liquid lakes",
      "capacity": 8,
      "available": true,
      "features": ["Lakes exploration", "Atmospheric studies", "Ring views"],
      "departures": ["2025-01-20", "2025-05-10"]
    }
  ],
  "bookings": [
    {
      "id": "BK001",
      "userId": "user123",
      "destinationId": 1,
      "destination": "Moon Base Alpha",
      "package": "premium",
      "passengers": [
        {
          "name": "John Smith",
          "age": 35,
          "passport": "AB123456",
          "specialRequirements": "Vegetarian meal",
          "seatPreference": "window"
        },
        {
          "name": "Jane Smith", 
          "age": 32,
          "passport": "AB123457",
          "specialRequirements": "",
          "seatPreference": "window"
        }
      ],
      "travelDate": "2024-03-15",
      "returnDate": "2024-03-18",
      "totalPrice": 75000,
      "status": "confirmed",
      "createdAt": "2024-01-10T10:30:00Z",
      "paymentStatus": "paid",
      "extras": ["insurance", "photo_pack"]
    },
    {
      "id": "BK002",
      "userId": "user456",
      "destinationId": 2,
      "destination": "Mars Colony One",
      "package": "basic",
      "passengers": [
        {
          "name": "Alice Johnson",
          "age": 28,
          "passport": "CD789012",
          "specialRequirements": "Allergic to nuts",
          "seatPreference": "aisle"
        }
      ],
      "travelDate": "2024-04-20",
      "returnDate": "2024-05-11",
      "totalPrice": 250000,
      "status": "pending",
      "createdAt": "2024-01-12T14:20:00Z",
      "paymentStatus": "deposit",
      "extras": ["insurance"]
    },
    {
      "id": "BK003",
      "userId": "user123",
      "destinationId": 1,
      "destination": "Moon Base Alpha",
      "package": "moonwalk",
      "passengers": [
        {
          "name": "John Smith",
          "age": 35,
          "passport": "AB123456",
          "specialRequirements": "",
          "seatPreference": "window"
        },
        {
          "name": "Mike Brown",
          "age": 40,
          "passport": "EF345678",
          "specialRequirements": "Extra leg room",
          "seatPreference": "aisle"
        }
      ],
      "travelDate": "2024-06-10",
      "returnDate": "2024-06-13",
      "totalPrice": 120000,
      "status": "confirmed",
      "createdAt": "2024-01-15T09:45:00Z",
      "paymentStatus": "paid",
      "extras": ["insurance", "souvenir", "priority_boarding"]
    },
    {
      "id": "BK004",
      "userId": "user789",
      "destinationId": 4,
      "destination": "Venus Cloud City",
      "package": "premium",
      "passengers": [
        {
          "name": "Robert Chen",
          "age": 45,
          "passport": "GH901234",
          "specialRequirements": "",
          "seatPreference": "window"
        },
        {
          "name": "Lisa Chen",
          "age": 42,
          "passport": "GH901235",
          "specialRequirements": "Vegetarian meal",
          "seatPreference": "window"
        },
        {
          "name": "Kevin Chen",
          "age": 16,
          "passport": "GH901236",
          "specialRequirements": "",
          "seatPreference": "middle"
        }
      ],
      "travelDate": "2024-07-10",
      "returnDate": "2024-07-24",
      "totalPrice": 540000,
      "status": "confirmed",
      "createdAt": "2024-01-18T16:30:00Z",
      "paymentStatus": "paid",
      "extras": ["insurance", "photo_pack", "souvenir"]
    },
    {
      "id": "BK005",
      "userId": "user456",
      "destinationId": 3,
      "destination": "International Space Station",
      "package": "basic",
      "passengers": [
        {
          "name": "Alice Johnson",
          "age": 28,
          "passport": "CD789012",
          "specialRequirements": "",
          "seatPreference": "window"
        }
      ],
      "travelDate": "2024-02-20",
      "returnDate": "2024-02-22",
      "totalPrice": 35000,
      "status": "cancelled",
      "createdAt": "2024-01-05T11:15:00Z",
      "paymentStatus": "refunded",
      "extras": []
    },
    {
      "id": "BK006",
      "userId": "user999",
      "destinationId": 5,
      "destination": "Jupiter's Europa",
      "package": "explorer",
      "passengers": [
        {
          "name": "Dr. Sarah Wilson",
          "age": 52,
          "passport": "IJ567890",
          "specialRequirements": "Scientific equipment",
          "seatPreference": "window"
        },
        {
          "name": "Dr. Michael Torres",
          "age": 48,
          "passport": "KL678901",
          "specialRequirements": "Scientific equipment",
          "seatPreference": "aisle"
        }
      ],
      "travelDate": "2024-12-01",
      "returnDate": "2025-01-30",
      "totalPrice": 1500000,
      "status": "confirmed",
      "createdAt": "2024-01-20T08:00:00Z",
      "paymentStatus": "paid",
      "extras": ["insurance", "research_equipment", "extended_stay"]
    },
    {
      "id": "BK007",
      "userId": "user123",
      "destinationId": 6,
      "destination": "Saturn's Titan",
      "package": "premium",
      "passengers": [
        {
          "name": "John Smith",
          "age": 35,
          "passport": "AB123456",
          "specialRequirements": "",
          "seatPreference": "window"
        }
      ],
      "travelDate": "2025-01-20",
      "returnDate": "2025-03-06",
      "totalPrice": 600000,
      "status": "pending",
      "createdAt": "2024-01-25T14:45:00Z",
      "paymentStatus": "deposit",
      "extras": ["insurance", "photo_pack"]
    }
  ],
  "users": [
    {
      "id": "user123",
      "email": "john.smith@email.com",
      "name": "John Smith",
      "phone": "+1234567890",
      "membership": "premium",
      "joinDate": "2023-05-15",
      "totalBookings": 3,
      "loyaltyPoints": 4500
    },
    {
      "id": "user456",
      "email": "alice.johnson@email.com", 
      "name": "Alice Johnson",
      "phone": "+0987654321",
      "membership": "basic",
      "joinDate": "2023-08-22",
      "totalBookings": 2,
      "loyaltyPoints": 1500
    },
    {
      "id": "user789",
      "email": "robert.chen@email.com",
      "name": "Robert Chen",
      "phone": "+1122334455",
      "membership": "premium",
      "joinDate": "2023-11-10",
      "totalBookings": 1,
      "loyaltyPoints": 2000
    },
    {
      "id": "user999",
      "email": "sarah.wilson@email.com",
      "name": "Dr. Sarah Wilson",
      "phone": "+5566778899",
      "membership": "explorer",
      "joinDate": "2023-12-05",
      "totalBookings": 1,
      "loyaltyPoints": 5000
    },
    {
      "id": "user777",
      "email": "david.kim@email.com",
      "name": "David Kim",
      "phone": "+4433221100",
      "membership": "basic",
      "joinDate": "2024-01-08",
      "totalBookings": 0,
      "loyaltyPoints": 0
    }
  ],
  "packages": [
    {
      "id": "basic",
      "name": "Basic Package",
      "multiplier": 1.0,
      "description": "Standard accommodation and meals",
      "includes": ["Shared cabin", "Basic meals", "Standard training"]
    },
    {
      "id": "premium",
      "name": "Premium Package", 
      "multiplier": 1.5,
      "description": "Luxury suite with premium dining and exclusive access",
      "includes": ["Private suite", "Gourmet meals", "VIP training", "Exclusive tours"]
    },
    {
      "id": "moonwalk",
      "name": "Moonwalk Experience",
      "multiplier": 2.0,
      "description": "Includes lunar surface excursion and specialized equipment",
      "includes": ["Lunar surface walk", "Specialized suit", "Private guide", "Commander training"]
    },
    {
      "id": "explorer",
      "name": "Explorer Package",
      "multiplier": 3.0,
      "description": "For scientific missions and extended research",
      "includes": ["Research facilities", "Extended stay", "Scientific equipment", "Expert guides"]
    }
  ],
  "extras": [
    {
      "id": "insurance",
      "name": "Space Travel Insurance",
      "price": 5000,
      "description": "Comprehensive coverage for your journey"
    },
    {
      "id": "photo_pack",
      "name": "Professional Photo Pack", 
      "price": 2500,
      "description": "Digital photos and videos of your experience"
    },
    {
      "id": "souvenir",
      "name": "Exclusive Souvenir Pack",
      "price": 1500,
      "description": "Commemorative items from your trip"
    },
    {
      "id": "priority_boarding",
      "name": "Priority Boarding",
      "price": 1000,
      "description": "Be among the first to board"
    },
    {
      "id": "research_equipment",
      "name": "Research Equipment Rental",
      "price": 15000,
      "description": "Specialized scientific equipment"
    },
    {
      "id": "extended_stay",
      "name": "Extended Stay Option", 
      "price": 50000,
      "description": "Additional days at destination"
    }
  ],
  "promotions": [
    {
      "id": "promo1",
      "code": "SPACE25",
      "description": "25% off for first-time bookers",
      "discount": 0.25,
      "validUntil": "2024-06-30"
    },
    {
      "id": "promo2", 
      "code": "FAMILY15",
      "description": "15% off for groups of 3 or more",
      "discount": 0.15,
      "validUntil": "2024-12-31"
    },
    {
      "id": "promo3",
      "code": "LOYALTY10",
      "description": "10% off for premium members",
      "discount": 0.10,
      "validUntil": "2024-12-31"
    }
  ]
};

// CHALLENGE 1: Count how many destinations we have
// RESTRICTION use Only for, while, and standard logic.
function countTotalDestinations() {
   let count = 0;
   for (let index = 0; index < spaceData.destinations.length; index++) {
    if(spaceData.destinations[index]){
        count++
    }
   }
    return count;
}

console.log(countTotalDestinations())
// CHALLENGE 2: Find destinations that are available for booking
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getAvailableDestinations() {
    let availabledestination = spaceData.destinations.filter(d => d.available == true)
    return availabledestination
}

console.log(getAvailableDestinations())

// CHALLENGE 3: Get the very first booking in our system
// RESTRICTION use Only for, while, and standard logic.
function getFirstBooking() {
let firstbooking = spaceData.bookings[0]
return firstbooking
}

console.log(getFirstBooking())

// CHALLENGE 4: Calculate how much money we've made from all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function calculateTotalRevenue() {
    let sum = 0;
    spaceData.bookings.forEach(bk =>{
        sum+=bk.totalPrice
    })
    return sum
}
console.log(calculateTotalRevenue())

// CHALLENGE 5: Find a user by their email address
// RESTRICTION use Only for, while, and standard logic.

function findUserByEmail(email) {
    let found = {};
   for (let index = 0; index <spaceData.users.length; index++) {
    if(email == spaceData.users[index].email){
        found = spaceData.users[index];
    }
   }
   return found;
}

console.log(findUserByEmail("john.smith@email.com"))

// console.log(spaceData.users[0].email)

// CHALLENGE 6: Count all passengers across every booking
// RESTRICTION use Only for, while, and standard logic.
function countTotalPassengers() {
   let totalpass =0;
    for (let index = 0; index < spaceData.bookings.length; index++) {   
    totalpass += spaceData.bookings[index].passengers.length       
    }
    return totalpass
}

console.log(countTotalPassengers());


// CHALLENGE 7: Group bookings by their status (confirmed, pending, etc.)
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function groupBookingsByStatus() {
    // We want an object that looks like:
    // {
    //   confirmed: [booking1, booking2...],
    //   pending: [booking3...]
    // }
   
}

// CHALLENGE 8: Find the most expensive booking
// RESTRICTION use Only for, while, and standard logic.

// function findMostExpensiveBooking() {
//     let mostexpns = 0;
//     for (let index = 0; index < spaceData.bookings.length; index++) {
//         if (spaceData.bookings[index].totalPrice > spaceData.bookings[index+1].totalPrice ) {
//             mostexpns = spaceData.bookings[index].totalPrice
//         }
//     }
//     return mostexpns
// }

// console.log(findMostExpensiveBooking());

// CHALLENGE 9: Create a simple summary of all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getBookingSummary() {
    // We want to make each booking simpler - just show:
    // id, destination, number of passengers, and total price
    
}

console.log(getBookingSummary());


// CHALLENGE 10: Update a booking's status
// RESTRICTION use Only for, while, and standard logic.
function updateBookingStatus(bookingId, newStatus) {
    
    let found = spaceData.bookings.find(bkid => bkid.id === bookingId)
    found.status = newStatus
    
    return found
}



// CHALLENGE 11: Calculate how much money each destination has made
// RESTRICTION use Only for, while, and standard logic.
function calculateRevenueByDestination() {
    // We want an object that shows total revenue for each destination:
    // { 'Moon Base Alpha': 195000, 'Mars Colony One': 250000 }
   

}

// CHALLENGE 12: Find which user has made the most bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function findUserWithMostBookings() {
  

}

// CHALLENGE 13: Find bookings between specific dates
// RESTRICTION use Only for, while, and standard logic.
function filterBookingsByDate(startDate, endDate) {
    
    
}

// CHALLENGE 14: Get a list of all passenger names from all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getAllPassengerNames() {
   
    
}

// CHALLENGE 15: Add a new booking with proper validation
// RESTRICTION use Only for, while, and standard logic.
function addNewBooking(bookingData) {
   
    
}

// ========================
// SOLUTIONS' TEST
// ========================


async function testAllChallenges() {
 
    await loadData();
    
    console.log('TESTing !\n');
    
    console.log('LEVEL 1:');
    console.log('1. How many destinations?', countTotalDestinations());
    console.log('2. Available destinations:', getAvailableDestinations());
    console.log('3. First booking ever:', getFirstBooking());
    console.log('4. Total money made:', calculateTotalRevenue());
    console.log('5. Find John Smith:', findUserByEmail('john.smith@email.com'));
    
    console.log('\nLEVEL 2:');
    console.log('6. Total passengers:', countTotalPassengers());
    console.log('7. Bookings by status:', groupBookingsByStatus());
    console.log('8. Most expensive trip:', findMostExpensiveBooking());
    console.log('9. Booking summaries:', getBookingSummary());
    console.log('10. Update booking:', updateBookingStatus('BK001', 'cancelled'));
    
    console.log('\nLEVEL 3:');
    console.log('11. Money per destination:', calculateRevenueByDestination());
    console.log('12. Most bookings by:', findUserWithMostBookings());
    console.log('13. March bookings:', filterBookingsByDate('2024-03-01', '2024-04-01'));
    console.log('14. All passenger names:', getAllPassengerNames());
    
    // Try adding a new booking
    try {
        const newBooking = {
            userId: 'user456',
            destinationId: 2,
            destination: 'Mars Colony One',
            package: 'basic',
            passengers: [{ name: 'Bob Wilson', age: 45 }],
            travelDate: '2024-07-01',
            returnDate: '2024-07-03',
            totalPrice: 250000,
            status: 'pending'
        };
        console.log('15. Add new booking:', addNewBooking(newBooking));
    } catch (error) {
        console.log('15. Failed to add booking:', error.message);
    }
}


window.testAllChallenges = testAllChallenges;
window.spaceData = spaceData;

// Some tips for success:
// 1. Start with the easy challenges first
// 2. Use console.log to see what data you're working with
// 3. For restricted challenges, think "how would I do this manually?"
// 4. Test each function as you complete it
// 5. Don't worry if it takes time - learning is a process!

console.log('Pro tip: Open browser console and type testAllChallenges() to check your work!');