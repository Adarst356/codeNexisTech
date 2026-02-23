/*
  # Create enrollments table for CodeNexisTech learning platform

  1. New Tables
    - `enrollments`
      - `id` (uuid, primary key) - Unique identifier for each enrollment
      - `name` (text) - Student's full name
      - `email` (text) - Student's email address
      - `learning_interest` (text) - What they want to learn
      - `created_at` (timestamptz) - When they enrolled
      - `status` (text) - Enrollment status (default: 'pending')

  2. Security
    - Enable RLS on `enrollments` table
    - Add policy for public inserts (anyone can enroll)
    - Add policy for authenticated users to read all enrollments (for admin purposes)
*/

CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  learning_interest text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can enroll"
  ON enrollments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (true);