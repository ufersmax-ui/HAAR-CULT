/*
  # Fix RLS policies for bookings table

  1. Modified Policies
    - Remove overly permissive policy that allows unrestricted inserts
    - Add stricter policy that validates booking data structure
    - Ensure only legitimate booking data can be inserted
  
  2. Security Improvements
    - RLS policy now validates that required fields are provided
    - Phone number must be non-empty
    - Booking date must be valid
    - Service must be selected
    - Prevents completely open INSERT access
*/

DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;

CREATE POLICY "Validate and create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (
    name != '' AND 
    phone != '' AND 
    service != '' AND 
    booking_date IS NOT NULL AND 
    booking_time != ''
  );