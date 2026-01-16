/*
  # Create bookings table for HAAR-CULT salon

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `phone` (text, customer phone number)
      - `service` (text, type of service)
      - `booking_date` (date, appointment date)
      - `booking_time` (text, appointment time)
      - `created_at` (timestamptz, when booking was created)
      - `status` (text, booking status - pending/confirmed/cancelled)
  
  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public to create bookings (salon website is public-facing)
    - Add policy for service role to read all bookings (for salon management)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all bookings"
  ON bookings
  FOR SELECT
  TO service_role
  USING (true);