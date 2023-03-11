# Hotel-Room-Management-App

Complete admin-facing solution for the management of rooms in a Hotel.

## Hotel can have multiple rooms of multiple types.
Each room type has a different type of pricing.
- Room type A: 100 Rs per hour
- Room type B: 80 Rs per hour
- Room type C: 50 Rs per hour
## A Hotel can have:
- 2 rooms of A type
- 3 rooms of B type
- 5 rooms of C type

### Functions:
>Create: A Page where the admin can book the room which takes the user’s email, room number, start time, and end time and books the room accordingly
The Price of the booking should update as soon as the user updates any one of the room number, start time or end time.
No two bookings should have overlapping start and end time for the same room.

>Edit: Allow admin to edit any variables like user email, room number, start time, end time and correspondingly take confirmation on updated price.

>Delete: Allow admin to cancel any future booking with the following conditions
If the booking start time is more than 48 hrs, Show a complete refund on UI
If booking start time is within 24 hrs to 48 hrs, 50% refund on UI
Else no refund (but admin can still cancel)

>View: Create a view page for the admin to view all the bookings both upcoming and passed with the following filters
Filter by room number and room type
Filter by start time and end time
